import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#6161FF",
    },
    background: {
      default: "#F7FAFF",
    },
  },
});

theme = responsiveFontSizes(theme);
export default theme;
