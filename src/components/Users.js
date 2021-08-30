import '../Index.css';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import {
	Table,
	TableContainer,
	TableBody,
	TableHead,
	Paper,
	TableRow,
	TableCell,
} from '@material-ui/core';

const useStyles = makeStyles({
	root: {
		background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
		border: 0,
		borderRadius: 3,
		boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
		color: 'black',
		height: 48,
		padding: '0 30px',
	},
});

const Users = ({ users }) => {
	const classes = useStyles();

	return (
		<div>
			<TableContainer component={Paper}>
				<Table aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>Users</TableCell>
							<TableCell>Blogs created</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{users.map((user) => (
							<TableRow key={user.id}>
								<TableCell component="th" scope="row">
									<Link to={`/users/${user.id}`}>{user.name}</Link>
								</TableCell>
								<TableCell>{user.blogs.length}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};

export default Users;
