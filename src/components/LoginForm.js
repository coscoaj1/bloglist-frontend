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
			<input value={username} onChange={handleUserNameChange} />
		</div>
		<div>
			password
			<input value={password} onChange={handlePasswordChange} />
		</div>
		<button type="submit">login</button>
	</form>
);

export default LoginForm;
