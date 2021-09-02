import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
	root: {
		background: 'black',
		width: '100%',
		height: '100%',
		color: 'white',
		display: 'flex'
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
