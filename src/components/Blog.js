import { React, useState } from "react";
import "../Index.css";
import { useParams } from "react-router";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import TextField from "@mui/material/TextField";
import { IconButton, CardActions, Grid } from "@mui/material/";
import { useHistory } from "react-router-dom";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

const Blog = ({ blogs, handleLike, createComment, handleDelete }) => {
  const [expanded, setExpanded] = useState(false);
  const [newComment, setNewComment] = useState([]);

  let history = useHistory();

  const handleExpandedClick = () => {
    setExpanded(!expanded);
  };

  const handleChange = (event) => {
    setNewComment(event.target.value);
  };

  const id = useParams().id;
  const blog = blogs.find((b) => b.id === String(id));

  const addComment = (event) => {
    event.preventDefault();
    createComment({
      comment: newComment,
      id: blog.id,
    });
    setNewComment("");
  };
  if (!blog) {
    return null;
  }

  return (
    <Container id="div">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Card sx={{ maxWidth: 345 }} elevation={12}>
          <CardContent
            sx={{ display: "flex", flexDirection: "column", gap: 1 }}
          >
            <Typography fontWeight="bold" variant="h6">
              {blog.title}
            </Typography>{" "}
            <Typography fontStyle="italic">{blog.author}</Typography>
            <a href="">
              <Typography>
                <a href={blog.url} target="_blank">
                  Link to Article
                </a>
              </Typography>
            </a>
            <CardActions
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography fontWeight="medium">{blog.likes} likes</Typography>

              <Stack direction="row" spacing={2}>
                <IconButton
                  id="likeButton"
                  size="small"
                  onClick={() => handleLike(blog)}
                >
                  <ThumbUpIcon />
                </IconButton>
                <IconButton
                  onClick={() => {
                    handleDelete(blog), history.push("/");
                  }}
                >
                  <DeleteIcon />
                </IconButton>
                <IconButton onClick={handleExpandedClick}>
                  <ModeCommentIcon />
                </IconButton>
              </Stack>
            </CardActions>
          </CardContent>
        </Card>
        {expanded ? (
          <form noValidate autoComplete="off" onSubmit={addComment}>
            <TextField
              onChange={handleChange}
              value={newComment}
              variant="outlined"
              label="enter comment"
              fullWidth
              sx={{ marginTop: "2rem" }}
            />
          </form>
        ) : null}
        <Box sx={{ mt: 4 }}>
          <Typography variant="h4">comments</Typography>
          {blog.comments.map((comment) => {
            return <div key={comment.comments}>"{comment.comments}"</div>;
          })}
        </Box>
      </Box>
    </Container>
  );
};

export default Blog;
