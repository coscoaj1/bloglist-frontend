import { Container, Grid } from "@mui/material";
import { ReactComponent as MySvg } from "../assets/undraw_blog_post_re_fy5x.svg";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
const AboutSection = ({ user }) => {
  return (
    <Container
      component="section"
      maxWidth="lg"
      sx={{
        backgroundColor: "#F6F9FC",
        mb: 15,
        borderRadius: "8px",
        boxShadow: "2px 2px 2px 2px rgba(0, 0, 0, .2)",
      }}
    >
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
          <MySvg width={400} height={500} />
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
            variant="h4"
            fontWeight="bold"
            textAlign="center"
            gutterBottom
          >
            Welcome to Blog Reviews!
          </Typography>
          <Typography variant="h5" textAlign="center" sx={{ color: "gray" }}>
            {user
              ? `Submit your favorite blogs below. Also like and comment on other blogs.`
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
