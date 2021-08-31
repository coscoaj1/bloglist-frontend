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

import DescriptionIcon from '@material-ui/icons/Description';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { palette } from '@material-ui/system';

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
const DrawerComponent = () => {
	const [openDrawer, setOpenDrawer] = useState(false);
	const classes = useStyles();

	return (
		<>
			<Drawer
				classes={{ paper: classes.drawerPaper }}
				anchor="right"
				onClose={() => setOpenDrawer(false)}
				open={openDrawer}
			>
				<List>
					<ListItem divider button>
						<ListItemIcon>
							<HomeIcon />
							<ListItemText>HOME</ListItemText>
						</ListItemIcon>
					</ListItem>
					<ListItem divider button>
						<ListItemIcon>
							<DescriptionIcon />
							<ListItemText> BLOGS</ListItemText>
						</ListItemIcon>
					</ListItem>
					<ListItem divider button>
						<ListItemIcon>
							<PeopleIcon />
							<ListItemText> USERS</ListItemText>
						</ListItemIcon>
					</ListItem>
					<ListItem divider button>
						<ListItemIcon>
							<AccountCircleIcon />
							<ListItemText> LOGIN</ListItemText>
						</ListItemIcon>
					</ListItem>
				</List>
			</Drawer>

			<IconButton onClick={() => setOpenDrawer(!openDrawer)}>
				<MenuIcon anchor="right" />
			</IconButton>
		</>
	);
};

export default DrawerComponent;
