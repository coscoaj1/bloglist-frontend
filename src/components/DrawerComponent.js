import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
	Drawer,
	List,
	ListItem,
	ListItemText,
	ListItemIcon,
	IconButton,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import CloseIcon from '@material-ui/icons/Close';
import Avatar from '@material-ui/core/Avatar';

import DescriptionIcon from '@material-ui/icons/Description';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useHistory } from 'react-router-dom';
import ok from '../ok.png'

const useStyles = makeStyles((theme) => ({
	drawerPaper: {
		backgroundColor: theme.palette.common.drawer,
	},
	link: {
		color: 'white',
	},
	icon: {
		color: 'yellow',
	},
}));
const DrawerComponent = ({ user, handleLogout }) => {
	const [openDrawer, setOpenDrawer] = useState(false);
	const classes = useStyles();
	const history = useHistory();

	const handleClick = (item) => {
		history.push(item.path);
		setOpenDrawer(!openDrawer);
	};
	const menuItems = [
		{
			text: 'HOME',
			icon: <HomeIcon />,
			path: '/',
		},
		{
			text: 'BLOGS',
			icon: <DescriptionIcon />,
			path: '/blogs',
		},
		{
			text: 'USERS',
			icon: <PeopleIcon />,
			path: '/users',
		},
	];
	const login = [
		{
			text: 'LOGIN',
			icon: <AccountCircleIcon />,
			path: '/login',
		},
	];
	const logout = [
		{
			text: 'LOGOUT',
			icon: <CloseIcon />,
			path: '/',
		}
	]
	return (
		<>
			<Drawer
				classes={{ paper: classes.drawerPaper }}
				anchor="right"
				onClose={() => setOpenDrawer(false)}
				open={openDrawer}
			>
				<List>
					{menuItems.map((item) => {
						return (
							<ListItem
								divider={true}
								button
								key={item.text}
								onClick={() => handleClick(item)}
							>
								<ListItemIcon>{item.icon}</ListItemIcon>
								<ListItemText className={classes.link}>
									{item.text}
								</ListItemText>
							</ListItem>
						);
					})}
				</List>
				<List>
					{!user
						? login.map((item) => {
								return (
									<ListItem
										divider={true}
										button
										key={item.text}
										onClick={() => handleClick(item)}
									>
										<ListItemIcon>{item.icon}</ListItemIcon>
										<ListItemText>{item.text}</ListItemText>
									</ListItem>
								);
						  })
						: logout.map((item) => {
						return (
						<ListItem 
						divider={true}
						button
						onClick={handleLogout}>
							<ListItemIcon>{item.icon}</ListItemIcon>
										<ListItemText>{item.text}</ListItemText>
						</ListItem>
						)
						})}
				</List>
			</Drawer>

			<IconButton onClick={() => setOpenDrawer(!openDrawer)}>
				<MenuIcon anchor="right" />
			</IconButton>
			{user ? <Avatar alt="OK" src={ok} /> : null}
		</>
	);
};

export default DrawerComponent;
