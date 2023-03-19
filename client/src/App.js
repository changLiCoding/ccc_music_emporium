import { Link, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";
import Categories from "./components/Categories";
import Category from "./components/Category";
import NotFound from "./components/NotFound";
import { Fragment } from "react";

function App() {
	return (
		<Fragment>
			<nav>
				<ul>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/categories'>Categories</Link>
					</li>
				</ul>
			</nav>
			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					path='/categories'
					element={<Categories />}
				/>
				<Route
					path='/categories/:name'
					element={<Category />}
				/>
				<Route
					path='*'
					element={<NotFound />}
				/>
			</Routes>
		</Fragment>
	);
}

export default App;
