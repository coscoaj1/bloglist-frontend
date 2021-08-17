import React, { useState, useEffect } from 'react';
import Blog from './components/Blog';
import blogService from './services/blogs';
import loginService from './services/login';
import LoginForm from './components/LoginForm';
import BlogForm from './components/BlogForm';
import Notification from './components/Notification';
import './Index.css';

const App = () => {
	const [blogs, setBlogs] = useState([]);
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [newTitle, setNewTitle] = useState('');
	const [newAuthor, setNewAuthor] = useState('');
	const [newUrl, setNewUrl] = useState('');
	const [user, setUser] = useState(null);
	const [errorMessage, setErrorMessage] = useState(null);
	const [notificationMessage, setNotificationMessage] = useState(null);

	useEffect(() => {
		blogService.getAll().then((blogs) => setBlogs(blogs));
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

			setUser(user);
			setUsername('');
			setPassword('');
		} catch (exception) {
			setErrorMessage('Wrong credentials');
			setTimeout(() => {
				setErrorMessage(null);
			}, 5000);
		}
	};

	const addBlog = (event) => {
		event.preventDefault();
		const newBlog = {
			title: newTitle,
			author: newAuthor,
			url: newUrl,
		};

		blogService //
			.create(newBlog)
			.then((returnedBlog) => {
				setBlogs(blogs.concat(returnedBlog));
				console.log(`added${returnedBlog.title}`);
				setNotificationMessage(`Added ${returnedBlog.title}`);
				timeout();
				setNewTitle('');
				setNewAuthor('');
				setNewUrl('');
			})

			.catch((error) => {
				console.log(error.response.data);
			});
	};

	const handleNameChange = (event) => {
		setUsername(event.target.value);
	};
	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};

	const handleLogout = () => {
		console.log(`logging out`, user.name);
		setUser(null);
		window.localStorage.clear();
	};

	const handleTitleChange = (event) => {
		setNewTitle(event.target.value);
	};

	const handleAuthorChange = (event) => {
		setNewAuthor(event.target.value);
	};

	const handleUrlChange = (event) => {
		setNewUrl(event.target.value);
	};

	const timeout = () => {
		setTimeout(() => {
			setNotificationMessage(null);
		}, 5000);
	};

	return (
		<div className="container">
			<h2>Login to Blogs</h2>

			<Notification message={notificationMessage} />

			{user === null ? (
				<LoginForm
					username={username}
					password={password}
					handleNameChange={handleNameChange}
					handlePasswordChange={handlePasswordChange}
					handleLogin={handleLogin}
				/>
			) : (
				<div className="container">
					<h2>blogs</h2>
					<p>
						{user.name} logged in <button onClick={handleLogout}>logout</button>
					</p>
					<BlogForm
						addBlog={addBlog}
						newTitle={newTitle}
						newAuthor={newAuthor}
						newUrl={newUrl}
						handleTitleChange={handleTitleChange}
						handleAuthorChange={handleAuthorChange}
						handleUrlChange={handleUrlChange}
					/>
					{blogs.map((blog) => (
						<Blog key={blog.id} blog={blog} />
					))}
				</div>
			)}
		</div>
	);
};

export default App;
