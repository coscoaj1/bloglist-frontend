import { Container, Grid } from '@mui/material';

const AboutSection = () => {
	return (
		<Container component="section" maxWidth="md" sx={{ mb: 15 }}>
			<Grid container spacing={3}>
				<Grid item xs={12} sm={6}></Grid>
				<Grid item xs={12} sm={6}></Grid>
			</Grid>
		</Container>
	);
};

export default AboutSection;
