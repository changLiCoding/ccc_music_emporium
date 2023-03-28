import { createContext, useState } from "react";

import getDaysDifference from "../helpers/getDayDifference";
import priceConverter from "../helpers/priceConverter";

export const CartContext = createContext();

export function CartProvider(props) {
	const [cart, setCart] = useState(
		localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
	);

	function addCart(product) {
		setCart((prevCart) => {
			const newCart = [...prevCart, product];
			localStorage.setItem("cart", JSON.stringify(newCart));
			return newCart;
		});
	}

	function removeFromCart(i) {
		const newCartArr = cart.filter((product, index) => {
			return index !== i;
		});
		localStorage.setItem("cart", JSON.stringify(newCartArr));

		setCart(newCartArr);
	}

	function emptyCart() {
		setCart((prevCart) => {
			localStorage.removeItem("cart");
			return [];
		});
	}

	function setRent(startAt, endAt, product) {
		setCart((prevCart) => {
			const daysRent = getDaysDifference(startAt, endAt);
			const newCart = [...prevCart, { ...product, daysRent, startAt, endAt }];
			localStorage.setItem("cart", JSON.stringify(newCart));
			return newCart;
		});
	}

	function totalCartPrice() {
		let total = 0;
		cart.forEach((item) => {
			if (item.daysRent) {
				total = total + item.daysRent * item.rent_rate_in_cents;
			} else {
				total += item.price_in_cents;
			}
		});
		return priceConverter(total);
	}

	return (
		<CartContext.Provider
			value={{
				cart,
				addCart,
				emptyCart,
				removeFromCart,
				totalCartPrice,
				setRent,
			}}>
			{props.children}
		</CartContext.Provider>
	);
}
