import { React, useState } from 'react';
import '../Index.css';
import { useParams } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import { IconButton } from '@material-ui/core';

const useStyles = makeStyles({
	root: {
		minWidth: 275,
		maxWidth: 345,
		backgroundColor: '#424242',
		color: 'white',
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)',
	},
	title: {
		fontSize: 22,
	},
	pos: {
		marginBottom: 12,
	},
});

const Blog = ({ blogs, handleLike, handleDelete }) => {
	const classes = useStyles();
	const id = useParams().id;
	const blog = blogs.find((b) => b.id === String(id));
	console.log(blog);
	if (!blog) {
		return null;
	}

	return (
		<Card variant="outlined" className={classes.root}>
			<CardContent>
				<Typography className={classes.title}>{blog.title}</Typography>{' '}
				<Typography>{blog.author}</Typography>
				<Typography>{blog.url}</Typography>
				<Typography>{blog.likes} likes</Typography>
				<IconButton
					id="likeButton"
					size="small"
					color="primary"
					onClick={() => handleLike(blog)}
				>
					<ThumbUpIcon />
				</IconButton>
			</CardContent>
		</Card>
	);
};

export default Blog;

// 	like
// <Button
// 	id="removeButton"
// 	size="small"
// 	color="primary"
// 	onClick={() => handleDelete(blog)}
// >
// 	remove
// </Button>
