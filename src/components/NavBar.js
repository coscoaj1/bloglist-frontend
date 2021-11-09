import React from "react";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import PestControlRodentIcon from "@mui/icons-material/PestControlRodent";
import DrawerComponent from "./DrawerComponent";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import ok from "../ok.png";
import { useTheme } from "@mui/material/styles";
// MuiAppBar-root

// const useStyles = makeStyles({
// 	root: {
// 		display: 'flex',
// 	},
// 	orange: {
// 		height: '60px',
// 		width: '60px',
// 		margin: '-.3em'
// 	},
// 	toolLeft: {
// 		width: '100%'
// 	},
// 	toolRight: {
// 		display: 'flex',
// 		width: '30%',
// 		gap: '1em'

// 	},

// });

export default function NavBar({ user, handleLogout }) {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <>
      <AppBar position="fixed" sx={{ width: "100vw", margin: 0 }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <Button
              component={Link}
              to="/"
              color="inherit"
              sx={{ paddingRight: "48px" }}
            >
              <PestControlRodentIcon
                fontSize="large"
                sx={{ color: "gray", paddingRight: "12px" }}
              />
              <Typography variant="h4">CAT-BLOGS</Typography>
            </Button>

            <Button color="inherit" component={Link} to="/blogs">
              blogs
            </Button>
            <Button
              component="div"
              sx={{ flexGrow: 1 }}
              color="inherit"
              component={Link}
              to="/users"
            >
              users
            </Button>
          </div>
          {user ? (
            <Toolbar sx={{ display: "flex" }}>
              <Button size="small" onClick={handleLogout}>
                logout
              </Button>
              <Typography>{user.name}</Typography>
              <Avatar alt="OK" src={ok} />
            </Toolbar>
          ) : (
            <Button color="inherit" component={Link} to="/login">
              login
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
}

{
  /* {isMatch ? (
  <DrawerComponent handleLogout={handleLogout} user={user} />
) : ( */
}

{
  /* )} */
}
