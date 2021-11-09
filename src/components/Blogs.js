import { Link } from 'react-router-dom';
import Table from '@mui/material/Table';
import { styled } from '@mui/material/styles';

import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
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

const Blogs = ({ blogs }) => {
	return (
		<TableContainer component={Paper}>
			<Table>
				<Typography variant="h3">Today's blogs</Typography>
				<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
					{blogs
						.sort((a, b) => b.likes - a.likes)
						.map((blog) => (
							<Grid key={blog.id} item xs={6}>
								<Item>
									{blog.title}
									{blog.author}
								</Item>
							</Grid>
							// <TableRow button="true" key={blog.id}>
							// 	<TableCell>
							// 		<Typography variant="h6">
							// 			<Link to={`blogs/${blog.id}`}>{blog.title}</Link>
							// 		</Typography>
							// 	</TableCell>

							// 	<TableCell>
							// 		<Typography variant="subtitle1">{blog.author}</Typography>
							// 	</TableCell>
							// </TableRow>
						))}
				</Grid>
			</Table>
		</TableContainer>
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
