import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";
import Category from "./components/Category";
import NotFound from "./components/NotFound";
import SubCategory from "./components/SubCategory";
import { Fragment } from "react";
import NavBar from "./components/NavBar";

import useHomeCategories from "./hooks/useHomeCategories";

import categoryNamesGenerator from "./helpers/categoryNamesGenerator";
import subCategoryNamesGenerator from "./helpers/subCategoryNamesGenerator";

function App() {
	const { categories } = useHomeCategories();

	const categoryNames = categoryNamesGenerator(categories.categories);
	return (
		<Fragment>
			<NavBar categories={categoryNames} />

			<Routes>
				<Route
					path='/'
					element={<Home categories={categoryNames} />}
				/>
				<Route
					path='/categories/:name/sub_categories/:sub_categories_name'
					element={<SubCategory />}
				/>
				<Route path='/categories'>
					<Route
						index
						element={<Home categories={categoryNames} />}
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
