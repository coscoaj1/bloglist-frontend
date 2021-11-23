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
          .map((blog) => (
            <Grid item xs={2} sm={4} md={4} button="true" key={blog.id}>
              <Card>
                <CardContent>
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
          ))}
      </Grid>
    </Container>
  );
};

export default Blogs;
