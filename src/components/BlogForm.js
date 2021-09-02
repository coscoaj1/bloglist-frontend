import { useState } from 'react';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import '../Index.css';
import { Typography } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	field: {
		marginBottom: 10,
	},
});

const BlogForm = ({ createBlog }) => {
	
	const [newTitle, setNewTitle] = useState('');
	const [newAuthor, setNewAuthor] = useState('');
	const [newUrl, setNewUrl] = useState('');

	const classes = useStyles();

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
		<form autoComplete="off" onSubmit={addBlog}>
			<Typography variant="h5">add new blog</Typography>

			<div>
				<TextField
					id="title"
					variant="outlined"
					label="title"
					fullWidth={true}
					value={newTitle}
					onChange={handleTitleChange}
					className={classes.field}
					margin="normal"

				/>
			</div>

			<div>
				<TextField
					id="author"
					variant="outlined"
					label="author"
					fullWidth={true}
					value={newAuthor}
					onChange={handleAuthorChange}
					className={classes.field}
					margin="normal"
				/>
			</div>
			<div>
				<TextField
					id="url"
					variant="outlined"
					label="url:"
					value={newUrl}
					fullWidth={true}
					margin="normal"

					onChange={handleUrlChange}
					className={classes.field}
				/>
			</div>
			<div>
				<Button
					id="add-button"
					variant="contained"
					color="primary"
					startIcon={<SaveIcon />}
					type="submit"
					size="large"
				>
					Add
				</Button>
			</div>
		</form>
	);
};

export default BlogForm;
