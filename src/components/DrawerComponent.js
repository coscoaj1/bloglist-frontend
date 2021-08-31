import { MenuIcon } from '@material-ui/icons/Menu';
import {
	Drawer,
	List,
	ListItem,
	ListItemText,
	ListItemIcon,
	IconButton,
} from '@material-ui/core';
import { useState } from 'react';

const DrawerComponent = () => {
	const [openDrawer, setOpenDrawer] = useState(true);

	return (
		<div>
			<Drawer onClose={() => setOpenDrawer(false)} open={openDrawer}>
				<List>
					<ListItem divider button>
						<ListItemIcon>
							<ListItemText>HOME</ListItemText>
						</ListItemIcon>
					</ListItem>
					<ListItem divider button>
						<ListItemIcon>
							<ListItemText>BLOGS</ListItemText>
						</ListItemIcon>
					</ListItem>
					<ListItem divider button>
						<ListItemIcon>
							<ListItemText>USERS</ListItemText>
						</ListItemIcon>
					</ListItem>
					<ListItem divider button>
						<ListItemIcon>
							<ListItemText>LOGIN</ListItemText>
						</ListItemIcon>
					</ListItem>
				</List>
			</Drawer>
		</div>
	);
};

export default DrawerComponent;
