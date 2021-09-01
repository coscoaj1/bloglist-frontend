import { React, useState, useEffect } from 'react';
import '../Index.css';
import clsx from 'clsx';
import { useParams } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import DeleteIcon from '@material-ui/icons/Delete';
import ModeCommentIcon from '@material-ui/icons/ModeComment';
import TextField from '@material-ui/core/TextField';
import { IconButton, CardActions, Collapse } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		minWidth: 275,
		maxWidth: 345,
		backgroundColor: '#424242',
		color: 'white',
	},
	title: {
		fontSize: 22,
	},
	field: {
		marginTop: 20,
	},
}));

const Blog = ({ blogs, handleLike, createComment, handleDelete }) => {
	const [expanded, setExpanded] = useState(false);
	const [newComment, setNewComment] = useState([]);

	const handleExpandedClick = () => {
		setExpanded(!expanded);
	};

	const handleChange = (event) => {
		setNewComment(event.target.value);
	};

	const classes = useStyles();
	const id = useParams().id;
	const blog = blogs.find((b) => b.id === String(id));

	const addComment = (event) => {
		console.log(blog);
		event.preventDefault();
		console.log(newComment);
		createComment({
			comment: newComment,
			id: blog.id,
		});
	};
	if (!blog) {
		return null;
	}

	return (
		<>
			<Card elevation={12} className={classes.root}>
				<CardContent>
					<Typography className={classes.title}>{blog.title}</Typography>{' '}
					<Typography>{blog.author}</Typography>
					<Typography>{blog.url}</Typography>
					<Typography>{blog.likes} likes</Typography>
					<CardActions>
						<IconButton
							id="likeButton"
							size="small"
							color="primary"
							onClick={() => handleLike(blog)}
						>
							<ThumbUpIcon />
						</IconButton>
						<IconButton onClick={() => handleDelete(blog)}>
							<DeleteIcon color="primary" />
						</IconButton>
						<IconButton onClick={handleExpandedClick}>
							<ModeCommentIcon color="primary" />
						</IconButton>
					</CardActions>
				</CardContent>
			</Card>
			{expanded ? (
				<form noValidate autoComplete="off" onSubmit={addComment}>
					<TextField
						className={classes.field}
						onChange={handleChange}
						value={newComment}
						color="secondary"
						variant="outlined"
						label="enter comment"
						fullWidth
					/>
				</form>
			) : null}
			<Typography variant="h4">comments</Typography>
			{blog.comments.map((comment) => {
				return <div key={comment.comments}>{comment.comments}</div>;
			})}
		</>
	);
};

export default Blog;

// 	like
// <Button
// 	id="removeButton"
// 	size="small"
// 	color="primary"
// 	onClick={() => handleDelete(blog)}
// >
// 	remove
// </Button>
