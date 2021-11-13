import { Container, Grid } from "@mui/material";
import { ReactComponent as MySvg } from "../assets/undraw_blog_post_re_fy5x.svg";
import Typography from "@mui/material/Typography";
const AboutSection = () => {
  return (
    <Container component="section" maxWidth="md" sx={{ mb: 15 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <MySvg width={600} height={400} />
        </Grid>
        <Grid item xs={12} sm={6}>
          {" "}
          <Typography
            component="h2"
            variant="h4"
            textAlign="center"
            gutterBottom
          >
            Welcome to BlogReviews!
          </Typography>
          <Typography textAlign="center">
            {`Feel free to share your favorite blog posts. You may also like and comment on other posts.`}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutSection;
