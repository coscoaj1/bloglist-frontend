import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Container from '@mui/material/Container';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

const Item = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
}));

const Blogs = ({ blogs, handleDelete, handleLike }) => {
	return (
		<Container>
			<Typography variant="h4">Today's Blogs</Typography>
			<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
				{blogs
					.sort((a, b) => b.likes - a.likes)
					.map((blog) => (
						<ListItem alignItems="flex-start" button="true" key={blog.id}>
							<ListItemText
								primary={
									<Link
										style={{ textDecoration: 'none' }}
										className="link"
										to={`blogs/${blog.id}`}
									>
										<Typography sx={{ textDecoration: 'none' }} variant="h5">
											{blog.title}
										</Typography>
									</Link>
								}
								variant="h6"
							></ListItemText>
							<ListItemText>
								<Typography variant="subtitle1">{blog.author}</Typography>
							</ListItemText>
						</ListItem>
					))}
			</List>
		</Container>
	);
};

export default Blogs;

{
	/* <Blog
    handleLike={handleLike}
    handleDelete={handleDelete}
    key={blog.title}
    blog={blog}
/> */
}
