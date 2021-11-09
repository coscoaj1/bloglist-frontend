import { Link } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

// 	table: {
// 		maxWidth: 500,
// 		fontSize: 22,
// 	},
// 	link: {
// 		textDecoration: 'none',
// 		color: '#FFF',
// 	},

const Blogs = ({ blogs }) => {
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
                    <Link to={`blogs/${blog.id}`}>{blog.title}</Link>
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
