import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { deepPurple, amber } from '@mui/material/colors';

let theme = createTheme({
	palette: {
		primary: {
			main: deepPurple[700],
		},
		secondary: {
			main: amber[400],
		},
	},
	typography: {
		fontFamily: 'Quicksand',
		fontWeightLight: 400,
		fontWeightRegular: 500,
		fontWeightMedium: 600,
		fontWeightBold: 700,
	},
});

theme = responsiveFontSizes(theme);
export default theme;
