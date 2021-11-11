import React from "react";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import PestControlRodentIcon from "@mui/icons-material/PestControlRodent";
import DrawerComponent from "./DrawerComponent";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import ok from "../ok.png";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
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
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Button sx={{ mr: 2 }} size="large" component={Link} to="/">
              <PestControlRodentIcon
                fontSize="large"
                sx={{
                  color: "gray",
                  fontSize: 40,
                }}
              />
            </Button>
            <Typography sx={{ paddingRight: 2, paddingTop: 1 }} variant="h4">
              Catlify
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
              sx={{ display: "flex", justifyContent: "center", gap: "1rem" }}
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
        {isMatch ? (
          <DrawerComponent handleLogout={handleLogout} user={user} />
        ) : null}
      </AppBar>
      <Toolbar />
    </>
  );
}
