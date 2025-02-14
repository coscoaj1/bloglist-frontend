import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import * as React from 'react';
import { useTheme } from '@mui/material/styles';

const LoginForm = ({
	username,
	password,
	handleLogin,
	handleUserNameChange,
	handlePasswordChange,
}) => {
	const theme = useTheme();
	return (
		<Container
			component="main"
			maxWidth="xs"
			sx={{
				height: '75vh',
				[theme.breakpoints.down('md')]: {
					maxWidth: '375px',
				},
			}}
		>
			<CssBaseline />
			<Box
				sx={{
					marginTop: 8,
					margin: '0 auto',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					[theme.breakpoints.down('xs')]: {
						width: '300px',
					},
				}}
			>
				<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Sign in
				</Typography>
				<Box component="form" onSubmit={handleLogin} sx={{ mt: 1 }}>
					<TextField
						sx={{ minWidth: 350, mb: 3 }}
						id="username"
						label="Username *"
						value={username}
						onChange={handleUserNameChange}
					/>
					<TextField
						sx={{ minWidth: 350 }}
						id="password"
						label="Password *"
						type="password"
						value={password}
						onChange={handlePasswordChange}
					/>
					<FormControlLabel
						control={<Checkbox value="remember" color="primary" />}
						label="Remember me"
					/>
					<Typography variant="body2">
						Guest credentials - username: 'Guest' password: 'Password'
					</Typography>
					<Button
						id="login-button"
						type="submit"
						variant="contained"
						sx={{ mt: 3, mb: 2, minWidth: 350 }}
					>
						login
					</Button>
					<Grid container>
						<Grid item xs>
							<Link href="#" variant="body2">
								Forgot password?
							</Link>
						</Grid>
						<Grid item>
							<Link href="#" variant="body2">
								{"Don't have an account? Sign Up"}
							</Link>
						</Grid>
					</Grid>
				</Box>
			</Box>
		</Container>
	);
};

export default LoginForm;
