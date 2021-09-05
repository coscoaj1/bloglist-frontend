import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
	table: {
		maxWidth: 500,
		fontSize: 22,
	},
	link: {
		textDecoration: 'none',
		color: '#FFF',
	},
});

const Blogs = ({ blogs }) => {
	const classes = useStyles();
	return (
		<TableContainer component={Paper}>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>
							<Typography variant="h5">blogs</Typography>
						</TableCell>
						<TableCell align="left">
							<Typography variant="h5"> Author</Typography>
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{blogs
						.sort((a, b) => b.likes - a.likes)
						.map((blog) => (
							<TableRow button="true" key={blog.id}>
								<TableCell>
									<Typography variant="h6">
										<Link className={classes.link} to={`blogs/${blog.id}`}>
											{blog.title}
										</Link>
									</Typography>
								</TableCell>

								<TableCell>
									<Typography variant="subtitle1">{blog.author}</Typography>
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
