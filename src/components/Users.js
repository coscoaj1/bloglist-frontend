import { Link } from 'react-router-dom';
const Users = ({ users }) => (
	<div>
		<h4>Users blogs created</h4>
		<ul>
			{users.map((user) => (
				<li key={user.id}>
					<Link to={`/users/${user.id}`}> {user.name}</Link>
				</li>
			))}
		</ul>
	</div>
);

export default Users;
