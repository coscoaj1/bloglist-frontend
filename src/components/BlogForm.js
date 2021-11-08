import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import '../Index.css';
import { Typography } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const useStyles = makeStyles({
	field: {
		marginBottom: 10,
		borderColor: 'black',
	},
});

const BlogSchema = Yup.object().shape({
	title: Yup.string('Enter title')
		.min(2, 'Too short!')
		.max(50, 'Too Long!')
		.required('Required'),
	author: Yup.string('Enter author')
		.min(2, 'Too short!')
		.max(50, 'Too Long!')
		.required('Required'),
	url: Yup.string('Enter website')
		.url()
		.min(2, 'Too short!')
		.required('Required'),
});

const BlogForm = ({ createBlog }) => {
	const formik = useFormik({
		initialValues: {
			title: '',
			author: '',
			url: '',
		},
		validationSchema: BlogSchema,
		onSubmit: (values) => {
			console.log(values);
			createBlog({
				title: formik.values.title,
				author: formik.values.author,
				url: formik.values.url,
			});
		},
	});

	const classes = useStyles();
	return (
		<form autoComplete="off" onSubmit={formik.handleSubmit}>
			<Typography variant="h5">add new blog</Typography>

			<div>
				<TextField
					id="title"
					variant="standard"
					label="title"
					fullWidth={true}
					value={formik.values.title}
					onChange={formik.handleChange}
					className={classes.field}
					margin="normal"
					error={formik.touched.title && Boolean(formik.errors.title)}
					helperText={formik.touched.title && formik.errors.title}
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
					error={formik.touched.author && Boolean(formik.errors.author)}
					helperText={formik.touched.author && formik.errors.author}
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
					error={formik.touched.url && Boolean(formik.errors.url)}
					helperText={formik.touched.url && formik.errors.url}
					onChange={formik.handleChange}
					className={classes.field}
				/>
			</div>
			<div>
				<Button
					id="add-button"
					variant="contained"
					color="secondary"
					startIcon={<SaveIcon />}
					type="submit"
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
