import React, { useState, useEffect } from 'react';
import Blog from './components/Blog';
import blogService from './services/blogs';
import loginService from './services/login';
import userService from './services/users';
import LoginForm from './components/LoginForm';
import BlogForm from './components/BlogForm';
import Notification from './components/Notification';
import Users from './components/Users';
import './Index.css';
import ErrorMessage from './components/Error';
import Togglable from './components/Togglable';
import { Button } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

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
		console.log('logging in with', username, password);

		try {
			const user = await loginService.login({
				username,
				password,
			});

			window.localStorage.setItem('loggedBlogappUser', JSON.stringify(user));
			blogService.setToken(user.token);
			console.log(user.token);
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

	const handleLikeChange = async (blog) => {
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

	const loginForm = () => (
		<Togglable buttonLabel="log in">
			<h2> Login</h2>
			<LoginForm
				username={username}
				password={password}
				handleUserNameChange={({ target }) => setUsername(target.value)}
				handlePasswordChange={({ target }) => setPassword(target.value)}
				handleLogin={handleLogin}
			/>
		</Togglable>
	);

	const blogForm = () => (
		<Togglable buttonLabel="add new">
			<BlogForm createBlog={addBlog} />
		</Togglable>
	);

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
			<div className="container">
				<div>
					<Link to="/">home</Link>
					<Link to="blogs">blogs</Link>
					<Link to="users">users</Link>
				</div>
				<Switch>
					<Route path="/users">
						<Users users={users} />
					</Route>
				</Switch>
				<h2>Cat Blogs app</h2>
				<Notification message={notificationMessage} />
				<ErrorMessage message={errorMessage} />
				{user === null ? (
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
						{blogForm()}
					</div>
				)}
				<div>
					<h2>blogs</h2>
					{blogs
						.sort((a, b) => b.likes - a.likes)
						.map((blog) => (
							<div key={blog.id}>
								<Blog
									handleLike={handleLikeChange}
									handleDelete={handleDelete}
									key={blog.title}
									blog={blog}
								/>
							</div>
						))}
				</div>
			</div>
		</Router>
	);
};

export default App;
