import { createTheme } from '@material-ui/core';

const theme = createTheme({
	palette: {
		primary: {
			main: '#b7b7a4',
		},
		secondary: {
			main: '#14213d',
		},
		common: {
			drawer: '#b7b7a4',
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

export default theme;
