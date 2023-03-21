import { Route, Routes } from "react-router-dom";
import { Fragment } from "react";

import "./App.css";
import Home from "./components/Home";
import Category from "./components/Category";
import NotFound from "./components/NotFound";
import SubCategory from "./components/SubCategory";
import SignIn from "./components/SignIn";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import useHomeCategories from "./hooks/useHomeCategories";

import categoryNamesGenerator from "./helpers/categoryNamesGenerator";
import subCategoryNamesGenerator from "./helpers/subCategoryNamesGenerator";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
	const { categories } = useHomeCategories();

	const categoryNames = categoryNamesGenerator(categories.categories);
	const subCategoryNames = subCategoryNamesGenerator(categories.categories);
	return (
		<Fragment>
			<ThemeProvider>
				<NavBar categories={categoryNames} />
				<Routes>
					<Route
						path='/sign_in'
						element={<SignIn />}
					/>
					<Route
						path='/'
						element={<Home categories={categoryNames} />}
					/>
					<Route
						path='/categories/:name/sub_categories/:sub_categories_name'
						element={<SubCategory subCategories={subCategoryNames} />}
					/>
					<Route path='/categories'>
						<Route
							index
							element={<Home categories={categoryNames} />}
						/>
						<Route
							path=':name'
							element={<Category subCategories={subCategoryNames} />}
						/>
					</Route>
					<Route
						path='*'
						element={<NotFound />}
					/>
				</Routes>

				<Footer />
			</ThemeProvider>
		</Fragment>
	);
}

export default App;
