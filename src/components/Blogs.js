import Blog from './Blog';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
	table: {
		maxWidth: 500,
	},
}));

const Blogs = ({ blogs, handleDelete, handleLike }) => {
	const classes = useStyles();
	return (
		<TableContainer component={Paper}>
			<Table className={classes.table} component="nav">
				<TableHead>
					<TableRow>
						<TableCell>blogs</TableCell>
						<TableCell align="left"> Author</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{blogs
						.sort((a, b) => b.likes - a.likes)
						.map((blog) => (
							<TableRow button key={blog.id}>
								<TableCell>
									<Link to={`blogs/${blog.id}`}>{blog.title}</Link>
								</TableCell>
							</TableRow>
						))}
				</TableBody>
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
