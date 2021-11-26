import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Image from "../assets/retro.webp";
import ArrowDownward from "@mui/icons-material/ArrowDownward";
function Hero({ title, subtitle }) {
  return (
    <Grid
      component="section"
      container
      sx={{
        position: `relative`,
        height: "100vh",
        width: "100vw",
        zIndex: -100,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url(${Image})`,
      }}
    >
      <Grid
        item
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 10,
          backgroundColor: "rgba(0,0,0, .6)",
        }}
      />
      <Grid
        container
        item
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        sx={{ zIndex: 20 }}
      >
        <Typography
          variant="h2"
          component="h1"
          align="center"
          gutterBottom
          color="common.white"
          fontWeight="bold"
        >
          {title}
        </Typography>
        <Typography
          component="h2"
          variant="h3"
          align="center"
          color="common.white"
          sx={{
            mb: 10,
          }}
        >
          {subtitle}
        </Typography>
        <Typography
          component="h3"
          variant="h4"
          color="common.white"
          gutterBottom
        >
          Scroll
        </Typography>
        <ArrowDownward fontSize="large" sx={{ color: "white" }} />
      </Grid>
    </Grid>
  );
}

export default Hero;
