import "../Index.css";
import { Link } from "react-router-dom";

import {
  Table,
  TableContainer,
  TableBody,
  TableHead,
  Paper,
  TableRow,
  TableCell,
  Typography,
  Container,
} from "@mui/material";

const Users = ({ users }) => {
  return (
    <Container sx={{ minHeight: "100vh" }}>
      <TableContainer className="table" component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography>Users</Typography>
              </TableCell>
              <TableCell>
                <Typography>Blogs created</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell component="th" scope="row">
                  <Typography variant="h5">
                    <Link to={`/users/${user.id}`}>{user.name}</Link>
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography>{user.blogs.length}</Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Users;
