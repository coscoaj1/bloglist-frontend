import { Container, Grid } from "@mui/material";
import { ReactComponent as MySvg } from "../assets/undraw_blog_post_re_fy5x.svg";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
const AboutSection = ({ user }) => {
  return (
    <Container component="section" maxWidth="md" sx={{ mb: 15 }}>
      <Grid container spacing={3}>
        <Grid
          item
          xs={12}
          sm={6}
          container
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <MySvg width={300} height={400} />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          container
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          sx={{ mx: { xs: 12, sm: 0 } }}
        >
          {" "}
          <Typography
            component="h2"
            variant="h4"
            textAlign="center"
            gutterBottom
          >
            Welcome to BlogReviews!
          </Typography>
          <Typography variant="h5" textAlign="center">
            {user
              ? `Share your favorite blogs below. Also like and comment on other blogs.`
              : `Login to share your favorite blog posts. You may also like and comment on other posts.`}
          </Typography>
          {user ? (
            <Button
              sx={{ mt: 2 }}
              component={Link}
              variant="contained"
              to="/blogs"
            >
              Blogs
            </Button>
          ) : (
            <Button
              component={Link}
              to="/login"
              sx={{ mt: 2 }}
              variant="contained"
            >
              Login
            </Button>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutSection;
