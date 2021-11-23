import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#6363ff",
    },
  },
});

theme = responsiveFontSizes(theme);
export default theme;
