import { TextField } from '@material-ui/core';
const LoginForm = ({
	username,
	password,
	handleLogin,
	handleUserNameChange,
	handlePasswordChange,
}) => {
	return (
		<form onSubmit={handleLogin}>
			<div>
				username:
				<TextField
					id="username"
					value={username}
					onChange={handleUserNameChange}
				/>
			</div>
			<div>
				password
				<TextField
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
