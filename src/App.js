import React, { useState, useEffect, useLayoutEffect } from 'react';
import blogService from './services/blogs';
import loginService from './services/login';
import userService from './services/users';
import LoginForm from './components/LoginForm';
import Blogs from './components/Blogs';
import Blog from './components/Blog';
import Notification from './components/Notification';
import Users from './components/Users';
import User from './components/User';
import DrawerComponent from './components/DrawerComponent';
import './Index.css';
import ErrorMessage from './components/Error';
import {
	Button,
	AppBar,
	Toolbar,
	Typography,
	Container,
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Redirect,
} from 'react-router-dom';

const App = () => {
	const [blogs, setBlogs] = useState([]);
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [user, setUser] = useState(null);
	const [errorMessage, setErrorMessage] = useState(null);
	const [notificationMessage, setNotificationMessage] = useState(null);
	const [users, setUsers] = useState([]);

	useEffect(() => {
		blogService.getAll().then((blogs) => setBlogs(blogs));
	}, []);

	useEffect(() => {
		userService.getUsers().then((users) => setUsers(users));
	}, []);

	useEffect(() => {
		const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser');
		if (loggedUserJSON) {
			const user = JSON.parse(loggedUserJSON);
			setUser(user);
			blogService.setToken(user.token);
		}
	}, []);

	const handleLogin = async (event) => {
		event.preventDefault();
		try {
			const user = await loginService.login({
				username,
				password,
			});

			window.localStorage.setItem('loggedBlogappUser', JSON.stringify(user));
			blogService.setToken(user.token);
			setUser(user);
			setUsername('');
			setPassword('');
		} catch (exception) {
			setErrorMessage('Invalid username or password.');
			setTimeout(() => {
				setErrorMessage(null);
			}, 5000);
		}
	};

	const addBlog = (blogObject) => {
		blogService //
			.create(blogObject)
			.then((returnedBlog) => {
				setBlogs(blogs.concat(returnedBlog));
				console.log(`added${returnedBlog.title}`);
				setNotificationMessage(`Added ${returnedBlog.title}`);
				timeout();
			})

			.catch((error) => {
				console.log(error.response.data);
			});
	};

	const addComment = async (blog) => {
		await blogService.comment(blog.id, {
			comments: blog.comment,
		});
		const blogs = await blogService.getAll();
		setBlogs(blogs);
	};

	// const addComment = (blog) => {
	// 	console.log(blog);
	// 	blogService //
	// 		.comment(blog.id, {
	// 			comments: blog.comment,
	// 		})
	// 		.then((returnedBlog) => {
	// 			setBlogs(blogs.concat(returnedBlog));
	// 		})

	// 		.catch((error) => {
	// 			console.log(error.response.data);
	// 		});
	// };

	const handleLike = async (blog) => {
		await blogService.update(blog.id, {
			title: blog.title,
			author: blog.author,
			url: blog.url,
			likes: blog.likes + 1,
		});

		const blogs = await blogService.getAll();
		setBlogs(blogs);
	};

	const handleDelete = async (blog) => {
		if (window.confirm(`Delete ${blog.title}?`)) {
			await blogService.remove(blog.id);

			let blogs = await blogService.getAll();
			setBlogs(blogs);

			setNotificationMessage(`Deleted ${blog.title}`);
			timeout();
		}
	};

	const handleLogout = () => {
		console.log(`logging out`, user.name);
		setUser(null);
		window.localStorage.clear();
	};

	const timeout = () => {
		setTimeout(() => {
			setNotificationMessage(null);
		}, 5000);
	};

	const theme = useTheme();
	const isMatch = useMediaQuery(theme.breakpoints.down('xs'));

	return (
		<Router>
			<Container>
				<AppBar position="static">
					<Toolbar>
						{isMatch ? (
							<DrawerComponent />
						) : (
							<div>
								<Button color="inherit" component={Link} to="/">
									home
								</Button>
								<Button color="inherit" component={Link} to="/blogs">
									blogs
								</Button>
								<Button color="inherit" component={Link} to="/users">
									users
								</Button>
								{user ? (
									<div>
										<em>{user.name} logged in</em>{' '}
										<Button
											size="small"
											variant="contained"
											color="secondary"
											onClick={handleLogout}
										>
											logout
										</Button>
									</div>
								) : (
									<Button color="inherit" component={Link} to="/login">
										login
									</Button>
								)}
							</div>
						)}
					</Toolbar>
				</AppBar>
				<Typography variant="h2">Cat Blogs app</Typography>
				<Switch>
					<Route path="/users/:id">
						<User users={users} />
					</Route>
					<Route path="/blogs/:id">
						<Blog
							handleDelete={handleDelete}
							blogs={blogs}
							createComment={addComment}
							handleLike={handleLike}
						></Blog>
					</Route>
					<Route path="/users">
						<Users users={users} />
					</Route>
					<Route path="/blogs">
						<Blogs
							blogs={blogs}
							handleLike={handleLike}
							handleDelete={handleDelete}
						/>
					</Route>
					<Route path="/login">
						{!user ? (
							<LoginForm
								username={username}
								password={password}
								handleUserNameChange={({ target }) => setUsername(target.value)}
								handlePasswordChange={({ target }) => setPassword(target.value)}
								handleLogin={handleLogin}
							/>
						) : (
							<Redirect to="/" />
						)}
					</Route>
				</Switch>
				<Notification message={notificationMessage} />
				<ErrorMessage message={errorMessage} />
				{/* {user === null ? (
						loginForm()
					) : (
						<div>
							<p>
								{user.name} logged in{' '}
								<Button
									size="small"
									variant="contained"
									color="secondary"
									onClick={handleLogout}
								>
									logout
								</Button>
							</p>
							{blogForm()} */}
				{/* </div> */}
				{/* )} */}
			</Container>
		</Router>
	);
};

export default App;
