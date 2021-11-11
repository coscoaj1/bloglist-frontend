import { useParams } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardMedia, Typography, CardActionArea } from '@material-ui/core';
import Ma from '../Ma.jpg';
import Ok from '../ok.png';
import Whitey from '../Whitey.jpg';
import Sid from '../Sid.jpg';

const useStyles = makeStyles({
	root: {
		maxWidth: 355,
	},
	media: {
		height: 200,
		width: 300,
	},
	container: {
		display: 'flex',
		margin: '0 auto',
		justifyContent: 'space-around',
	},
});

const User = ({ users }) => {
	const classes = useStyles();
	const id = useParams().id;
	const showUser = users.find((u) => u.id === String(id));
	console.log(showUser);
	if (!showUser) {
		return null;
	}

	let cat = {};

	if (showUser.name === 'Ma') {
		cat.cat = Ma;
	} else if (showUser.name === 'orange') {
		cat.cat = Ok;
	} else if (showUser.name === 'Sid') {
		cat.cat = Sid;
	} else if (showUser.name === 'whitey') {
		cat.cat = Whitey;
	}

	return (
		<div className={classes.container}>
			<Card className={classes.root}>
				<CardActionArea />
				<CardMedia
					className={classes.media}
					image={cat.cat}
					title="feral cat"
				/>
				<Typography>{showUser.name}</Typography>
				<Typography>added blogs</Typography>
				{showUser.blogs.map((blog) => (
					<div key={blog.id}>{blog.title}</div>
				))}
			</Card>
		</div>
	);
};

export default User;
