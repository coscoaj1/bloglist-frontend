import { React, useState } from "react";
import { LoremIpsum } from "react-lorem-ipsum";
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
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
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
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
const chipList = ["Themes", "Blog", "Posts", "Trending"];

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

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
const pic = pics[Math.floor(Math.random() * pics.length)];
const Blog = ({ blogs, handleLike, createComment, handleDelete }) => {
  const [expanded, setExpanded] = useState(false);
  const [newComment, setNewComment] = useState([]);

  const theme = useTheme();
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

  const StyledIconButton = styled("IconButton")(({ theme }) => ({
    "& .MuiSvgIcon-root": {
      color: "#999999",
      alignItems: "center",
      paddingTop: "7px",
    },
  }));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
        "& .MuiCardContent-root:last-child, & .MuiCardContent-root": {
          padding: 0,
        },
      }}
    >
      <Card
        sx={{
          width: "90vw",
          flexDirection: "row",
          display: "flex",
          marginTop: 4,
          alignItems: "center",
          borderRadius: "8px",
          [theme.breakpoints.down("md")]: {
            flexDirection: "column-reverse",
          },
        }}
        elevation={1}
      >
        <CardContent
          sx={{
            display: "flex",
            width: "65%",
            flexDirection: "column",
            [theme.breakpoints.down("md")]: {
              width: "375px",
              textAlign: "center",
            },
          }}
        >
          <Stack sx={{ mb: 12, p: 1, maxHeight: "150px" }} spacing={2}>
            <Typography
              sx={{
                [theme.breakpoints.down("md")]: {
                  p: 2,
                },
                textDecoration: "none",
                textTransform: "uppercase",
                letterSpacing: "1px",
                color: "black",
                textAlign: "center",
                px: 1,
              }}
              variant="h6"
              fontWeight="bold"
            >
              {blog.title}
            </Typography>
            <Stack
              direction="row"
              sx={{
                display: "flex",

                justifyContent: "center",
                flexWrap: "wrap",
                listStyle: "none",
                px: 0.5,
              }}
              component="ul"
            >
              {chipList.map((item) => (
                <ListItem key={item}>
                  <Chip color="primary" label={item} variant="filled" />
                </ListItem>
              ))}
            </Stack>
            <Typography variant="subtitle2" fontStyle="italic" gutterBottom>
              {blog.author}
            </Typography>

            <a href={blog.url} target="_blank">
              <Typography sx={{ color: "darkgray" }}>
                Link to Article
              </Typography>
            </a>
            <Typography
              sx={{
                [theme.breakpoints.down("xl")]: {
                  display: "none",
                },
              }}
            >
              <LoremIpsum avgSentencesPerParagraph={4} />
            </Typography>
          </Stack>
          <CardActions
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              p: 2,
              justifyContent: "space-between",
              [theme.breakpoints.down("md")]: {
                justifyContent: "space-around",
              },
            }}
          >
            <Typography fontWeight="medium" sx={{ color: "gray" }}>
              {blog.likes} likes
            </Typography>
            <Stack direction="row" spacing={2} sx={{ pr: 3, gap: 2 }}>
              <StyledIconButton
                aria-label="like"
                id="likeButton"
                title="Like"
                size="small"
                onClick={() => handleLike(blog)}
              >
                <ThumbUpIcon />
              </StyledIconButton>

              <StyledIconButton
                aria-label="delete"
                title="Delete"
                onClick={() => {
                  handleDelete(blog), history.push("/");
                }}
              >
                <DeleteIcon />
              </StyledIconButton>
              <StyledIconButton
                aria-label="comment"
                title="Comment"
                onClick={handleExpandedClick}
              >
                <ModeCommentIcon />
              </StyledIconButton>
            </Stack>
          </CardActions>
        </CardContent>
        <CardContent
          sx={{
            p: 0,
          }}
        >
          <CardMedia
            component="img"
            src={pic}
            alt=""
            sx={{
              [theme.breakpoints.down("md")]: {
                maxWidth: "550px",
              },
              [theme.breakpoints.down("md")]: {
                maxWidth: "375px",
              },
            }}
          />{" "}
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
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4">comments</Typography>
        {blog.comments.map((comment) => {
          return <div key={comment.comments}>"{comment.comments}"</div>;
        })}
      </Box>
    </Box>
  );
};

export default Blog;
