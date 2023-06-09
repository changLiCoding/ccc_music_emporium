import React from "react";

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
import Register from "./components/Register";
import Checkout from "./components/Checkout";
import Contact from "./components/Contact";

import { ThemeProvider } from "./contexts/ThemeContext";
import { CategoryNamesProvider } from "./contexts/CategoryNameContext";
import { CartProvider } from "./contexts/CartContext";
import { ProductProvider } from "./contexts/ProductContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "mapbox-gl/dist/mapbox-gl.css";
import AboutUs from "./components/AboutUs";
import OrderHistory from "./components/OrderHistory";

function App() {
	return (
		<Fragment>
			<CartProvider>
				<ProductProvider>
					<ThemeProvider>
						<CategoryNamesProvider>
							<NavBar />
							<Routes>
								<Route
									path='/sign_in'
									element={<SignIn />}
								/>
								<Route
									path='/sign_up'
									element={<Register />}
								/>
								<Route
									path='/'
									element={<Home />}
								/>
								<Route
									path='/contact'
									element={<Contact />}
								/>
								<Route
									path='/about'
									element={<AboutUs />}
								/>
								<Route
									path='/my_orders'
									element={<OrderHistory />}
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
									path='/checkout'
									element={<Checkout />}
								/>
								<Route
									path='*'
									element={<NotFound />}
								/>
							</Routes>

							<Footer />
						</CategoryNamesProvider>
					</ThemeProvider>
				</ProductProvider>
			</CartProvider>
			<ToastContainer />
		</Fragment>
	);
}

export default App;
