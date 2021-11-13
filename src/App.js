import React, { useState, useEffect } from 'react';
import blogService from './services/blogs';
import loginService from './services/login';
import userService from './services/users';
import LoginForm from './components/LoginForm';
import BlogForm from './components/BlogForm';
import Blogs from './components/Blogs';
import Layout from './components/Layout';
import Blog from './components/Blog';
import Notification from './components/Notification';
import Users from './components/Users';
import User from './components/User';
import Footer from './components/Footer';
import './Index.css';
import ErrorMessage from './components/Error';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Hero from './components/Hero';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import NavBar from './components/NavBar';

// const useStyles = makeStyles({
// 	root: {
// 		textAlign: 'center',
// 	},
// });

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

	return (
		<Router>
			<Layout>
				<Container sx={{ textAlign: 'center', minHeight: '100vh' }}>
					<NavBar user={user} handleLogout={handleLogout} />
					<div>
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
										handleUserNameChange={({ target }) =>
											setUsername(target.value)
										}
										handlePasswordChange={({ target }) =>
											setPassword(target.value)
										}
										handleLogin={handleLogin}
									/>
								) : (
									<Redirect to="/" />
								)}
							</Route>
							<Route path="/">
								<Hero />
								{user ? <BlogForm createBlog={addBlog} /> : null}
							</Route>
						</Switch>
						<Notification message={notificationMessage} />
						<ErrorMessage message={errorMessage} />
					</div>
					<Footer />
				</Container>
			</Layout>
		</Router>
	);
};

export default App;
