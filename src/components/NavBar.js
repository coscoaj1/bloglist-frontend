import React from "react";
import LibraryBooks from "@mui/icons-material/LibraryBooks";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import DrawerComponent from "./DrawerComponent";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import ok from "../ok.png";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";

export default function NavBar({ user, handleLogout }) {
  // const theme = useTheme();
  // const isMatch = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <>
      <AppBar position="fixed" sx={{ width: "100vw", margin: 0 }}>
        <Toolbar
          component="nav"
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: { xs: `none`, md: `flex` } }}>
            <Button sx={{ mr: 2 }} size="large" component={Link} to="/">
              <LibraryBooks
                color="secondary"
                sx={{ width: "40px", height: "40px" }}
              />
            </Button>
            <Typography sx={{ paddingRight: 2, paddingTop: 1 }} variant="h4">
              BlogReviews
            </Typography>

            <Button color="inherit" component={Link} to="/blogs">
              blogs
            </Button>
            <Button
              color="inherit"
              component="div"
              sx={{ flexGrow: 1 }}
              component={Link}
              to="/users"
            >
              users
            </Button>
          </Box>
          {user ? (
            <Toolbar
              sx={{
                display: { xs: `none`, md: `flex` },
                justifyContent: "center",
                gap: "1rem",
              }}
            >
              <Button color="inherit" size="small" onClick={handleLogout}>
                logout
              </Button>
              <Typography sx={{ paddingBottom: "3px" }}>{user.name}</Typography>
              <Avatar alt="OK" src={ok} />
            </Toolbar>
          ) : (
            <Button color="inherit" component={Link} to="/login">
              login
            </Button>
          )}
        </Toolbar>
        <DrawerComponent handleLogout={handleLogout} user={user} />
      </AppBar>
      <Toolbar />
    </>
  );
}
