import { Link } from "react-router-dom";
import React from "react";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Links from "@mui/material/Link";
import Coffee from "../assets/coffee-2511065_640.jpg";
import Animal from "../assets/animal-4701318_640.jpg";
import Business from "../assets/business-5475283_640.jpg";
import Cat from "../assets/cat-963931_640.jpg";
import Salt from "../assets/salt-6728600_640.jpg";
import Laptop from "../assets/laptop-3087585_640.jpg";
import SpringRoll from "../assets/spring-roll-6760871_640.jpg";
import StartUp from "../assets/startup-594090_640.jpg";
import Child from "../assets/child-6808043_640.png";
import Code from "../assets/code-1839406_640.jpg";

const pics = [
  Animal,
  Business,
  Cat,
  Salt,
  Coffee,
  Laptop,
  SpringRoll,
  StartUp,
  Child,
  Code,
];
const pic = pics[Math.floor(Math.random() * pics.length)];

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Blogs = ({ blogs, handleDelete, handleLike }) => {
  return (
    <Container>
      <Typography gutterBottom fontWeight="bold" variant="h5" sx={{ mt: 2 }}>
        Latest Blogs
      </Typography>
      <Typography variant="h6" gutterBottom sx={{ color: "gray" }}>
        Here's what users have shared recently
      </Typography>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {blogs
          .sort((a, b) => b.likes - a.likes)
          .map((blog) => {
            const pic = pics[Math.floor(Math.random() * pics.length)];

            return (
              <Grid item xs={2} sm={4} md={4} button="true" key={blog.id}>
                <Card>
                  <CardMedia component="img" height="300" src={pic} alt="" />
                  <CardContent sx={{ minHeight: "100px" }}>
                    <Links
                      underline="none"
                      component={Link}
                      to={`blogs/${blog.id}`}
                    >
                      <Typography sx={{ textDecoration: "none" }} variant="h6">
                        {blog.title}
                      </Typography>
                    </Links>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      - By {blog.author}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
      </Grid>
    </Container>
  );
};

export default Blogs;
