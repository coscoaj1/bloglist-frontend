import React, { useState, useEffect } from 'react';
import blogService from './services/blogs';
import loginService from './services/login';
import userService from './services/users';
import LoginForm from './components/LoginForm';
import BlogForm from './components/BlogForm';
import Blogs from './components/Blogs';
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
import Box from '@mui/material/Box';
import AboutSection from '@components/AboutSection';

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
								handleUserNameChange={({ target }) => setUsername(target.value)}
								handlePasswordChange={({ target }) => setPassword(target.value)}
								handleLogin={handleLogin}
							/>
						) : (
							<Redirect to="/" />
						)}
					</Route>
					<Route path="/">
						<Hero title="BlogReviews" subtitle="Social Blog Sharing App" />

						<Box fontSize="large" sx={{ mb: 16, mx: 12 }}>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum,
							ratione consequatur cumque distinctio excepturi iure maxime culpa,
							animi incidunt voluptas neque id atque assumenda. Sunt eos
							expedita odio molestiae. Quaerat! Sed accusantium cum dolor
							impedit. Fuga, dolorem mollitia. Voluptatibus ipsum distinctio at
							voluptate voluptas. Fuga alias pariatur in dolorem soluta
							assumenda voluptatum quidem ipsum fugit earum. Accusantium
							quibusdam maxime inventore. Cumque, molestias deleniti! Blanditiis
							numquam excepturi alias voluptate illum eos nesciunt, accusantium,
							ipsa quaerat nulla aspernatur natus commodi quae illo laudantium
							temporibus doloribus dignissimos pariatur? Veritatis ea
							consequatur ullam ex. Delectus, aperiam? Magnam cupiditate amet
							molestias natus impedit, officia odit ratione voluptas non quaerat
							nihil necessitatibus blanditiis quia alias enim reprehenderit id
							hic architecto explicabo voluptatem dignissimos. Quas, a
							dignissimos! Incidunt ut maiores magnam dignissimos tempora
							necessitatibus doloremque consequuntur neque illum saepe! Et
							aperiam, culpa consequuntur pariatur autem, dolore sit,
							reprehenderit deserunt esse corporis voluptatibus laboriosam
							beatae perferendis eos earum. Dicta atque, totam consectetur quos
							quis praesentium aut doloremque dignissimos laudantium
							voluptatibus quia iure, voluptate repellendus in voluptatum
							officiis provident corrupti perferendis officia unde
							exercitationem? Voluptates veniam temporibus dolorum incidunt.
							Libero doloribus magni praesentium ullam dolore suscipit quam,
							aperiam eum eius consequuntur minus quos, earum tenetur quis!
							Voluptates nostrum aliquam earum consequuntur, natus debitis atque
							iusto sequi quasi. Iure, nulla. Deleniti sed laudantium animi
							voluptate minus a soluta iure adipisci facere asperiores dolor
							maiores doloribus eveniet nobis, atque error id debitis at quia
							nam nihil expedita? Laborum esse animi cupiditate! Architecto,
							officia. Autem ipsum tempora error doloremque minima corrupti
							adipisci repudiandae et! Quae eaque autem consequatur. Consequatur
							iste, dolor dolore odio voluptatem deserunt, quos fuga asperiores,
							provident ea eveniet numquam. Architecto, quia vero minima sit
							nulla ad deleniti ducimus odio nisi perspiciatis velit sapiente
							accusantium blanditiis quisquam id ex quasi optio commodi
							dignissimos sint, laborum eum, soluta distinctio. Molestiae,
							sequi. Tempore, assumenda doloribus. Perferendis ab quas quo
							blanditiis optio, officiis mollitia sequi a, aliquam natus ad
							perspiciatis voluptatem ipsum sit soluta vero. Eaque libero fugit
							minima voluptatibus autem ullam mollitia. Accusamus cupiditate
							optio tempora nam dolorem inventore, numquam itaque, illum,
							facilis reprehenderit aliquid accusantium. Odit vitae aut amet
							corporis deleniti voluptatibus nam corrupti! Quae possimus
							incidunt voluptatem ducimus error molestiae. Fugiat, corporis eum.
							Similique ipsum deleniti ex sunt natus hic odit saepe doloribus
							officia eligendi culpa a repudiandae repellendus, sint distinctio,
							qui quas porro facilis possimus officiis iure. Quis, sapiente!
							Beatae sapiente quo distinctio at veritatis, id corrupti error
							mollitia maxime excepturi asperiores sunt officia! Velit commodi
							possimus repellat ab, consequatur nisi. Illo ratione ducimus quam
							debitis quod sunt fugit. Ipsum, quibusdam repellat ut eveniet hic
							aliquam velit aliquid quos architecto placeat provident vero
							facere molestiae delectus ratione similique accusantium unde sint
							modi nesciunt cupiditate doloremque rerum consequatur aut?
							Aperiam!
						</Box>
						{user ? <BlogForm createBlog={addBlog} /> : null}
					</Route>
				</Switch>
				<Notification message={notificationMessage} />
				<ErrorMessage message={errorMessage} />
			</div>
			<Footer />
		</Router>
	);
};

export default App;
