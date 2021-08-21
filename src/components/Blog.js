import { React, useState } from 'react';
import Button from '@material-ui/core/Button';
import '../Index.css';

const Blog = ({ blog, handleLike, handleDelete }) => {
	const [toggle, setToggle] = useState(true);

	const toggler = () => {
		toggle ? setToggle(false) : setToggle(true);
	};

	return (
		<div>
			{toggle ? (
				<span>
					{blog.title} {blog.author}
					<Button size="small" color="primary" onClick={toggler}>
						view
					</Button>
				</span>
			) : (
				<ul className="blogs">
					<Button size="small" color="primary" onClick={toggler}>
						hide
					</Button>
					<li>{blog.title}</li> <li>{blog.author}</li>
					<li>{blog.url}</li>
					<li>likes: {blog.likes}</li>
					<Button
						size="small"
						color="primary"
						onClick={(event) => handleLike(event, blog.id)}
					>
						like
					</Button>
					<Button
						size="small"
						color="primary"
						onClick={(event) => handleDelete(event, blog.id)}
					>
						remove
					</Button>
				</ul>
			)}
		</div>
	);
};
export default Blog;
