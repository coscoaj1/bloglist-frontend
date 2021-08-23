const LoginForm = ({
	username,
	password,
	handleLogin,
	handleUserNameChange,
	handlePasswordChange,
}) => (
	<form onSubmit={handleLogin}>
		<div>
			username:
			<input id="username" value={username} onChange={handleUserNameChange} />
		</div>
		<div>
			password
			<input id="password" value={password} onChange={handlePasswordChange} />
		</div>
		<button id="login-button" type="submit">
			login
		</button>
	</form>
);

export default LoginForm;
