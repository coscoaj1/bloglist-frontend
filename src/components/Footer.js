import Link from '@mui/material/Link';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function Copyright() {
	return (
		<Typography variant="body2" sx={{ color: `common.white` }}>
			{'Copyright © '}
			<Link color="inherit" href="https://mui.com/">
				BlogReviews
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}
export default function Footer() {
	return (
		<Box
			component="footer"
			sx={{
				bgcolor: 'primary.main',
				position: 'fixed',
				bottom: 0,
				left: 0,
				mt: 4,
				width: '100%',
				py: 2,
			}}
		>
			<Stack direction="row" justifyContent="center" spacing={4} sx={{ mb: 2 }}>
				<Link component="button" sx={{ color: `common.white` }}>
					<Facebook fontSize="large" />
				</Link>
				<Link component="button" sx={{ color: `common.white` }}>
					<Instagram fontSize="large" />
				</Link>
				<Link component="button" sx={{ color: `common.white` }}>
					<Twitter fontSize="large" />
				</Link>
			</Stack>
			<Copyright />
		</Box>
	);
}
