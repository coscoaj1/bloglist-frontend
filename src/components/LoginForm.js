import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import * as React from "react";

const LoginForm = ({
  username,
  password,
  handleLogin,
  handleUserNameChange,
  handlePasswordChange,
}) => {
  return (
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
  );
};

export default LoginForm;
