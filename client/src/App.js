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

import subCategoryNamesGenerator from "./helpers/subCategoryNamesGenerator";
import { ThemeProvider } from "./contexts/ThemeContext";
import { CategoryNamesProvider } from "./contexts/CategoryNameContext";

function App() {
	const { categories } = useHomeCategories();

	const subCategoryNames = subCategoryNamesGenerator(categories.categories);
	return (
		<Fragment>
			<ThemeProvider>
				<CategoryNamesProvider>
					<NavBar />
					<Routes>
						<Route
							path='/sign_in'
							element={<SignIn />}
						/>
						<Route
							path='/'
							element={<Home />}
						/>
						<Route
							path='/categories/:name/sub_categories/:sub_categories_name'
							element={<SubCategory />}
						/>
						<Route path='/categories'>
							<Route
								index
								element={<Home />}
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

					<Footer />
				</CategoryNamesProvider>
			</ThemeProvider>
		</Fragment>
	);
}

export default App;
