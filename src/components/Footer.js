import Link from "@mui/material/Link";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

function Copyright() {
  return (
    <Typography variant="body2" color="secondary">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "primary.main",
        position: "fixed",
        bottom: 0,
        left: 0,
        mt: 4,
        width: "100%",
        py: 2,
      }}
    >
      <Container maxWidth="sm">
        <Link component="button">
          <Typography variant="body1" color="inherit">
            Link
          </Typography>
        </Link>
        <Link component="button">
          <Typography>Terms</Typography>
        </Link>
        <Link component="button">
          <Typography>Privacy</Typography>
        </Link>
        <Copyright />
      </Container>
    </Box>
  );
}
