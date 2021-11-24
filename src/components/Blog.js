import { React, useState } from "react";
import "../Index.css";
import { useParams } from "react-router";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
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
import Coffee from "../assets/coffee-2511065_640.jpg";
import Business from "../assets/business-5475283_640.jpg";
import Cat from "../assets/cat-963931_640.jpg";
import Laptop from "../assets/laptop-3087585_640.jpg";
import StartUp from "../assets/startup-594090_640.jpg";
import Code from "../assets/code-1839406_640.jpg";
import Wordpress from "../assets/wordpress-265132_640.jpg";
import Word from "../assets/wordpress-923188_640.jpg";
import LaptopTwo from "../assets/laptop-3087585_640.jpg";
import Despaired from "../assets/despaired-2261021_640.jpg";
import Computer from "../assets/computer-2982270_640.jpg";
import Pencils from "../assets/pencils-762555_640.jpg";
import CssBaseline from "@mui/material/CssBaseline";

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

const Blog = ({ blogs, handleLike, createComment, handleDelete }) => {
  const [expanded, setExpanded] = useState(false);
  const [newComment, setNewComment] = useState([]);

  const pic = pics[Math.floor(Math.random() * pics.length)];
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
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Card
        sx={{
          maxWidth: "90vw",
          flexDirection: "row",
          display: "flex",
          marginTop: 4,
          padding: 0,
          justifyContent: "flex-end",
          alignItems: "center",
        }}
        elevation={1}
      >
        <CardContent sx={{ display: "flex", flexDirection: "column" }}>
          <Typography fontWeight="bold" variant="h5">
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
        <CardContent sx={{ p: 0 }}>
          <CardMedia component="img" height="375" src={pic} alt="" />{" "}
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
  );
};

export default Blog;
