import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import '../Index.css';
import { Typography } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useFormik } from 'formik';

const useStyles = makeStyles({
	field: {
		marginBottom: 10,
	},
});

const BlogForm = ({ createBlog }) => {

	const formik = useFormik({
		initialValues: {
			title: '',
			author: '',
			url: '',
		},
			onSubmit: values => {
				console.log(values)
				createBlog({
					title: formik.values.title,
					author: formik.values.author,
					url: formik.values.url,
				})
			}})
			
	const classes = useStyles();
	return (
		<form autoComplete="off" onSubmit={formik.handleSubmit}>
			<Typography variant="h5">add new blog</Typography>

			<div>
				<TextField
					id="title"
					variant="outlined"
					label="title"
					fullWidth={true}
					value={formik.values.title}
					onChange={formik.handleChange}
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
					value={formik.values.author}
					onChange={formik.handleChange}
					margin="normal"
					/>
			</div>
			<div>
				<TextField
					id="url"
					variant="outlined"
					label="url:"
					value={formik.values.url}
					fullWidth={true}
					margin="normal"

					onChange={formik.handleChange}
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

// const addBlog = (event) => {
// 	event.preventDefault();
// 	createBlog({
// 		title: newTitle,
// 		author: newAuthor,
// 		url: newUrl,
// 	});