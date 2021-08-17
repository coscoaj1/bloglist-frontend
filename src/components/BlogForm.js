import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import '../Index.css';

const BlogForm = ({
	addBlog,
	newTitle,
	handleTitleChange,
	newAuthor,
	handleAuthorChange,
	newUrl,
	handleUrlChange,
}) => {
	return (
		<form onSubmit={addBlog}>
			<div>
				<h2>create new</h2>
				<div>
					title:{' '}
					<input
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
						className="input"
						value={newAuthor}
						onChange={handleAuthorChange}
					/>
				</div>
			</div>
			<div>
				<div>
					url:{' '}
					<input className="input" value={newUrl} onChange={handleUrlChange} />
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
	);
};

export default BlogForm;
