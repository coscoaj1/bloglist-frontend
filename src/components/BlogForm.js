import { useState } from 'react';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import '../Index.css';

const BlogForm = ({ createBlog }) => {
	const [newTitle, setNewTitle] = useState('');
	const [newAuthor, setNewAuthor] = useState('');
	const [newUrl, setNewUrl] = useState('');

	const handleTitleChange = (event) => {
		setNewTitle(event.target.value);
	};

	const handleAuthorChange = (event) => {
		setNewAuthor(event.target.value);
	};

	const handleUrlChange = (event) => {
		setNewUrl(event.target.value);
	};

	const addBlog = (event) => {
		event.preventDefault();
		createBlog({
			title: newTitle,
			author: newAuthor,
			url: newUrl,
		});

		setNewTitle('');
		setNewAuthor('');
		setNewUrl('');
	};

	return (
		<div className="formDiv">
			<form onSubmit={addBlog}>
				<div>
					<h2>create new</h2>
					<div>
						title:{' '}
						<input
							id="title"
							className="input"
							value={newTitle}
							onChange={handleTitleChange}
						/>
					</div>
				</div>
				<div>
					<div>
						author:{' '}
						<input
							id="author"
							className="input"
							value={newAuthor}
							onChange={handleAuthorChange}
						/>
					</div>
				</div>
				<div>
					<div>
						url:{' '}
						<input
							id="url"
							className="input"
							value={newUrl}
							onChange={handleUrlChange}
						/>
					</div>
					<div>
						<Button
							variant="contained"
							color="primary"
							size="small"
							startIcon={<SaveIcon />}
							type="submit"
						>
							Add
						</Button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default BlogForm;
