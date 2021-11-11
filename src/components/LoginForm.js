import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import * as React from "react";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Catlify
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const LoginForm = ({
  username,
  password,
  handleLogin,
  handleUserNameChange,
  handlePasswordChange,
}) => {
  return (
    <Container>
      <form onSubmit={handleLogin}>
        <div style={{ paddingTop: "12px" }}>
          username:
          <TextField
            sx={{ minWidth: 400 }}
            id="username"
            value={username}
            onChange={handleUserNameChange}
          />
        </div>
        <div>
          password:
          <TextField
            sx={{ minWidth: 400 }}
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button id="login-button" type="submit">
          login
        </button>
      </form>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
};

export default LoginForm;
