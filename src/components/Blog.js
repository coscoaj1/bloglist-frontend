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

// const useStyles = makeStyles(() => ({
// 	root: {
// 		minWidth: 275,
// 		maxWidth: 345,
// 		backgroundColor: '#424242',
// 		color: 'white',
// 	},
// 	title: {
// 		fontSize: 22,

// 	},
// 	field: {
// 		marginTop: 20,
// 	},
// 	grid: {
// 		width: '100%',
// 		justifyContent: 'center',
// 	},
// }));
const Blog = ({ blogs, handleLike, createComment, handleDelete }) => {
  const [expanded, setExpanded] = useState(false);
  const [newComment, setNewComment] = useState([]);

  const handleExpandedClick = () => {
    setExpanded(!expanded);
  };

  const handleChange = (event) => {
    setNewComment(event.target.value);
  };

  //   const classes = useStyles();
  const id = useParams().id;
  const blog = blogs.find((b) => b.id === String(id));

  const addComment = (event) => {
    console.log(blog);
    event.preventDefault();
    console.log(newComment);
    createComment({
      comment: newComment,
      id: blog.id,
    });
  };
  if (!blog) {
    return null;
  }

  return (
    <div>
      <div>
        <Grid container direction="row" justifyContent="center">
          <Card elevation={12}>
            <CardContent>
              <Typography>{blog.title}</Typography>{" "}
              <Typography>{blog.author}</Typography>
              <Typography>{blog.url}</Typography>
              <Typography>{blog.likes} likes</Typography>
              <CardActions>
                <IconButton
                  id="likeButton"
                  size="small"
                  onClick={() => handleLike(blog)}
                >
                  <ThumbUpIcon />
                </IconButton>
                <IconButton onClick={() => handleDelete(blog)}>
                  <DeleteIcon />
                </IconButton>
                <IconButton onClick={handleExpandedClick}>
                  <ModeCommentIcon />
                </IconButton>
              </CardActions>
            </CardContent>
          </Card>
        </Grid>
        {expanded ? (
          <form noValidate autoComplete="off" onSubmit={addComment}>
            <TextField
              className={classes.field}
              onChange={handleChange}
              value={newComment}
              color="secondary"
              variant="outlined"
              label="enter comment"
              fullWidth
            />
          </form>
        ) : null}
      </div>
      <div>
        <Typography variant="h4">comments</Typography>
        {blog.comments.map((comment) => {
          return <div key={comment.comments}>{comment.comments}</div>;
        })}
      </div>
    </div>
  );
};

export default Blog;

// 	like
// <Button
// 	id="removeButton"
// 	size="small"
// 	color="primary"
// 	onClick={() => handleDelete(blog)}
// >
// 	remove
// </Button>
