import { React, useState } from 'react';
import '../Index.css';
import { useParams } from 'react-router';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import TextField from '@mui/material/TextField';
import { IconButton, CardActions, Grid } from '@mui/material/';
import { useHistory } from 'react-router-dom';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Coffee from '../assets/coffee-2511065_640.jpg';
import Business from '../assets/business-5475283_640.jpg';
import Cat from '../assets/cat-963931_640.jpg';
import Laptop from '../assets/laptop-3087585_640.jpg';
import StartUp from '../assets/startup-594090_640.jpg';
import Code from '../assets/code-1839406_640.jpg';
import Wordpress from '../assets/wordpress-265132_640.jpg';
import Word from '../assets/wordpress-923188_640.jpg';
import LaptopTwo from '../assets/laptop-3087585_640.jpg';
import Despaired from '../assets/despaired-2261021_640.jpg';
import Computer from '../assets/computer-2982270_640.jpg';
import Pencils from '../assets/pencils-762555_640.jpg';
import { useTheme } from '@mui/material/styles';

const pics = [
	Despaired,
	Pencils,
	Computer,
	Laptop,
	LaptopTwo,
	Wordpress,
	Word,
	Business,
	Cat,
	Coffee,
	StartUp,
	Code,
];
const pic = pics[Math.floor(Math.random() * pics.length)];
const Blog = ({ blogs, handleLike, createComment, handleDelete }) => {
	const [expanded, setExpanded] = useState(false);
	const [newComment, setNewComment] = useState([]);

	const theme = useTheme();
	let history = useHistory();

	const handleExpandedClick = () => {
		setExpanded(!expanded);
	};

	const handleChange = (event) => {
		setNewComment(event.target.value);
	};

	const id = useParams().id;
	const blog = blogs.find((b) => b.id === String(id));

	const addComment = (event) => {
		event.preventDefault();
		createComment({
			comment: newComment,
			id: blog.id,
		});
		setNewComment('');
	};
	if (!blog) {
		return null;
	}

	const StyledIconButton = styled('IconButton')(({ theme }) => ({
		'& .MuiSvgIcon-root': {
			color: '#999999',
			alignItems: 'center',
			paddingTop: '7px',
		},
	}));

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				minHeight: '100vh',
				'& .MuiCardContent-root:last-child, & .MuiCardContent-root': {
					padding: 0,
				},
			}}
		>
			<Card
				sx={{
					width: '90vw',
					flexDirection: 'row',
					display: 'flex',
					marginTop: 4,
					alignItems: 'center',
					borderRadius: '8px',
					[theme.breakpoints.down('md')]: {
						flexDirection: 'column-reverse',
					},
				}}
				elevation={1}
			>
				<CardContent
					sx={{
						display: 'flex',
						width: '65%',
						flexDirection: 'column',
						[theme.breakpoints.down('md')]: {
							width: '375px',
							textAlign: 'center',
						},
					}}
				>
					<Stack sx={{ mb: 12, p: 2 }} spacing={2}>
						<Typography
							fontWeight="medium"
							variant="h5"
							gutterBottom
							sx={{
								[theme.breakpoints.down('md')]: {
									p: 4,
								},
							}}
						>
							{blog.title}
						</Typography>{' '}
						<Typography sx={{ color: 'gray' }} fontStyle="italic" gutterBottom>
							{blog.author}
						</Typography>
						<a href={blog.url} target="_blank">
							<Typography sx={{ color: 'gray' }}>Link to Article</Typography>
						</a>
					</Stack>
					<CardActions
						sx={{
							width: '100%',
							display: 'flex',
							alignItems: 'center',
							p: 2,
							justifyContent: 'space-between',
							[theme.breakpoints.down('md')]: {
								justifyContent: 'space-around',
							},
						}}
					>
						<Typography fontWeight="medium" sx={{ color: 'gray' }}>
							{blog.likes} likes
						</Typography>
						<Stack direction="row" spacing={2} sx={{ pr: 3, gap: 2 }}>
							<StyledIconButton
								id="likeButton"
								title="Like"
								size="small"
								onClick={() => handleLike(blog)}
							>
								<ThumbUpIcon />
							</StyledIconButton>

							<StyledIconButton
								title="Delete"
								onClick={() => {
									handleDelete(blog), history.push('/');
								}}
							>
								<DeleteIcon />
							</StyledIconButton>
							<StyledIconButton title="Comment" onClick={handleExpandedClick}>
								<ModeCommentIcon />
							</StyledIconButton>
						</Stack>
					</CardActions>
				</CardContent>
				<CardContent
					sx={{
						p: 0,
					}}
				>
					<CardMedia
						component="img"
						height="auto"
						src={pic}
						alt=""
						sx={{
							width: '100%',
							[theme.breakpoints.down('md')]: {
								maxWidth: '450px',
							},
							[theme.breakpoints.down('md')]: {
								maxWidth: '375px',
							},
						}}
					/>{' '}
				</CardContent>
			</Card>
			{expanded ? (
				<form noValidate autoComplete="off" onSubmit={addComment}>
					<TextField
						onChange={handleChange}
						value={newComment}
						variant="outlined"
						label="enter comment"
						fullWidth
						sx={{ marginTop: '2rem' }}
					/>
				</form>
			) : null}
			<Box sx={{ mt: 4 }}>
				<Typography variant="h4">comments</Typography>
				{blog.comments.map((comment) => {
					return <div key={comment.comments}>"{comment.comments}"</div>;
				})}
			</Box>
		</Box>
	);
};

export default Blog;
