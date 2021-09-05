import { createTheme } from '@material-ui/core';

const theme = createTheme({
	palette: {
		type: 'dark',
		primary: {
			main: '#688EFF',
		},
		secondary: {
			main: '#0d3b66',
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

//["002500","355070","dadff7","870058","a4303f"]
