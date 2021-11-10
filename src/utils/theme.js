import { createTheme } from "@mui/material/styles";
import { purple, teal } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: purple,
    secondary: teal,
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

export default theme;

//["002500","355070","dadff7","870058","a4303f"]
