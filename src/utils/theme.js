import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#6363ff",
    },
    background: {
      default: "#F7FAFF",
    },
  },
});

theme = responsiveFontSizes(theme);
export default theme;
