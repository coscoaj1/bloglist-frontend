import { React, useState } from 'react';
import Button from '@material-ui/core/Button';
import '../Index.css';
import PropTypes from 'prop-types';

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
					<Button size="small" color="primary" onClick={() => handleLike(blog)}>
						like
					</Button>
					<Button
						size="small"
						color="primary"
						onClick={() => handleDelete(blog)}
					>
						remove
					</Button>
				</ul>
			)}
		</div>
	);
};

Blog.propTypes = {
	blog: PropTypes.object.isRequired,
	handleLike: PropTypes.func.isRequired,
	handleDelete: PropTypes.func.isRequired,
};
export default Blog;
