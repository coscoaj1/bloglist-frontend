import React from 'react';
import { Toolbar, AppBar, Button } from '@material-ui/core';
import DrawerComponent from './DrawerComponent';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Link } from 'react-router-dom';
import { makeStyles, Typography } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import ok from '../ok.png';

const useStyles = makeStyles({
	root: {
		display: 'flex',
		color: 'white',
	},
	orange: {
		height: '60px',
		width: '60px',
		margin: '-.3em',
		color: 'white',
	},
	toolLeft: {
		width: '100%',
		color: 'white',
	},
	toolRight: {
		display: 'flex',
		width: '30%',
		gap: '1em',
		color: 'white',
	},
});
export default function NavBar({ user, handleLogout }) {
	const classes = useStyles();
	const theme = useTheme();
	const isMatch = useMediaQuery(theme.breakpoints.down('xs'));

	return (
		<div>
			<AppBar position="static">
				{isMatch ? (
					<DrawerComponent handleLogout={handleLogout} user={user} />
				) : (
					<Toolbar className={classes.root}>
						<div className={classes.toolLeft}>
							<Button component={Link} to="/">
								<Typography>home</Typography>
							</Button>
							<Button component={Link} to="/blogs">
								blogs
							</Button>
							<Button className={classes.users} component={Link} to="/users">
								users
							</Button>
						</div>
						{user ? (
							<div className={classes.toolRight}>
								<Button
									size="small"
									onClick={handleLogout}
									className={classes.user}
								>
									logout
								</Button>
								<Typography>{user.name}</Typography>
								<Avatar className={classes.orange} alt="OK" src={ok} />
							</div>
						) : (
							<Button color="inherit" component={Link} to="/login">
								login
							</Button>
						)}
					</Toolbar>
				)}
			</AppBar>
		</div>
	);
}
