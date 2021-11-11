import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

// 	table: {
// 		maxWidth: 500,
// 		fontSize: 22,
// 	},
// 	link: {
// 		textDecoration: 'none',
// 		color: '#FFF',
// 	},
const Item = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
}));

const Blogs = ({ blogs, handleDelete, handleLike }) => {
	return (
		<>
			<Typography variant="h4">Today's Blogs</Typography>
			<List>
				{blogs
					.sort((a, b) => b.likes - a.likes)
					.map((blog) => (
						<ListItem button="true" key={blog.id}>
							<ListItemText
								primary={
									<Link
										style={{ textDecoration: 'none' }}
										className="link"
										to={`blogs/${blog.id}`}
									>
										<Typography sx={{ textDecoration: 'none' }} variant="h4">
											{blog.title}
										</Typography>
									</Link>
								}
								variant="h6"
							></ListItemText>

							<TableCell>
								<Typography variant="subtitle1">{blog.author}</Typography>
							</TableCell>
						</ListItem>
					))}
			</List>
		</>
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
