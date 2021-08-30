import { useParams } from 'react-router';

const User = ({ users }) => {
	console.log(users);
	const id = useParams().id;
	const showUser = users.find((u) => u.id === String(id));
	console.log(showUser);
	if (!showUser) {
		return null;
	}
	return (
		<div>
			<h3>{showUser.name}</h3>
			<h3>added blogs</h3>

			{showUser.blogs.map((blog) => (
				<div key={blog.id}>{blog.title}</div>
			))}
		</div>
	);
};

export default User;
