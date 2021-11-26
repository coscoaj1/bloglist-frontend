import { Link } from "react-router-dom";
import React from "react";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Links from "@mui/material/Link";
import Coffee from "../assets/coffee.webp";
import Business from "../assets/business.webp";
import Cat from "../assets/cat.webp";
import Laptop from "../assets/laptop.webp";
import StartUp from "../assets/startup.webp";
import Code from "../assets/code.webp";
import Wordpress from "../assets/wordpress.webp";
import Word from "../assets/wordpress-2.webp";
import LaptopTwo from "../assets/laptop-2.webp";
import Despaired from "../assets/despaired.webp";
import Computer from "../assets/computer.webp";
import Pencils from "../assets/pencils.webp";

import Stack from "@mui/material/Stack";

const pics = [
  Despaired,
  Pencils,
  Computer,
  Laptop,
  LaptopTwo,
  Wordpress,
  Word,
  Business,
  Cat,
  Coffee,
  StartUp,
  Code,
];

const chipList = ["Themes", "Blog", "Posts", "Trending"];

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

const Blogs = ({ blogs, handleDelete, handleLike }) => {
  return (
    <Container sx={{ minHeight: "100vh" }}>
      <Typography gutterBottom fontWeight="bold" variant="h5" sx={{ mt: 2 }}>
        Latest Blogs
      </Typography>
      <Typography variant="h6" gutterBottom sx={{ color: "gray" }}>
        Here's what users have shared recently
      </Typography>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        {blogs
          .sort((a, b) => b.likes - a.likes)
          .map((blog) => {
            const pic = pics[Math.floor(Math.random() * pics.length)];

            return (
              <Grid item xs={12} sm={6} md={4} button="true" key={blog.id}>
                <Links
                  underline="none"
                  component={Link}
                  to={`blogs/${blog.id}`}
                >
                  <Card
                    sx={{
                      my: "8px",
                      borderRadius: "8px",
                      transition: "transform",
                      transitionDuration: "250ms",
                      "&:hover": {
                        transform: "translate(0px, -5px)",
                      },
                    }}
                  >
                    <CardMedia component="img" height="300" src={pic} alt="" />
                    <CardContent
                      sx={{
                        minHeight: "175px",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Stack
                        direction="row"
                        sx={{
                          display: "flex",

                          justifyContent: "center",
                          flexWrap: "wrap",
                          listStyle: "none",
                          px: 0.5,
                          mb: 1,
                          mt: -1,
                        }}
                        component="ul"
                      >
                        {chipList.map((item) => (
                          <ListItem key={item}>
                            <Chip label={item} variant="filled" />
                          </ListItem>
                        ))}
                      </Stack>
                      <Typography
                        sx={{
                          textDecoration: "none",
                          textTransform: "uppercase",
                          letterSpacing: "1px",
                          color: "black",
                          textAlign: "center",
                          px: 2,
                          mb: 2,
                        }}
                        variant="h6"
                        fontWeight="bold"
                      >
                        {blog.title}
                      </Typography>
                      <Typography
                        sx={{
                          display: "inline",
                          color: "gray",
                          textAlign: "center",
                        }}
                        component="span"
                        variant="body2"
                        gutterBottom
                      >
                        {blog.author}
                      </Typography>
                    </CardContent>
                  </Card>
                </Links>
              </Grid>
            );
          })}
      </Grid>
    </Container>
  );
};

export default Blogs;
