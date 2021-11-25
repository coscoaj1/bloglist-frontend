import Link from "@mui/material/Link";
import * as React from "react";
import Stack from "@mui/material/Stack";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Toolbar } from "@mui/material";
import { AppBar } from "@mui/material";

function Copyright() {
  return (
    <Typography variant="body2" sx={{ color: `common.white` }}>
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        BlogReviews
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
export default function Footer() {
  return (
    <Toolbar
      component="footer"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "primary.main",
        maxWidth: "100vw",
        zIndex: 10,
      }}
    >
      <Stack direction="row" justifyContent="center" spacing={4}>
        <Link component="button" sx={{ color: `common.white` }}>
          <Facebook fontSize="medium" />
        </Link>
        <Link component="button" sx={{ color: `common.white` }}>
          <Instagram fontSize="medium" />
        </Link>
        <Link component="button" sx={{ color: `common.white` }}>
          <Twitter fontSize="medium" />
        </Link>
      </Stack>
      <Copyright />
    </Toolbar>
  );
}
