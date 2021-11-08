import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
	root: {
		width: '100%',
		height: '100%',
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
