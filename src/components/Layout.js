import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
	root: {
		background: 'white',
		width: '100%',
		height: '100%',
		color: 'black',
		display: 'flex',
		alignItems: 'center',
	},
});
export default function Layout({ children }) {
	const classes = useStyles();
	return (
		<div>
			<div className={classes.root}>{children}</div>
		</div>
	);
}
