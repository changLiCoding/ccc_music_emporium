import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";
import Category from "./components/Category";
import NotFound from "./components/NotFound";
import SubCategory from "./components/SubCategory";
import { Fragment } from "react";
import NavBar from "./components/NavBar";

import useHomeCategories from "./hooks/useHomeCategories";

function App() {
	const { categories } = useHomeCategories();
	return (
		<Fragment>
			<NavBar categories={categories.categories} />

			<Routes>
				<Route
					path='/'
					element={<Home categories={categories.categories} />}
				/>
				<Route
					path='/categories/:name/sub_categories/:sub_categories_name'
					element={<SubCategory />}
				/>
				<Route path='/categories'>
					<Route
						index
						element={<Home categories={categories.categories} />}
					/>
					<Route
						path=':name'
						element={<Category />}
					/>
				</Route>
				<Route
					path='*'
					element={<NotFound />}
				/>
			</Routes>
		</Fragment>
	);
}

export default App;
