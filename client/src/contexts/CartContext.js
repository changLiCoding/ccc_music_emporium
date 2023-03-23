import { createContext, useState } from "react";
import priceConverter from "../helpers/priceConverter";

export const CartContext = createContext();

export function CartProvider(props) {
	const [cart, setCart] = useState(
		localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
	);

	function addCart(product) {
		// [ product, product , product ].map((product, i))

		setCart((prevCart) => {
			const newCart = [...prevCart, product];
			prevCart.push(product);
			localStorage.setItem("cart", JSON.stringify(prevCart));
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

	function setRent() {}

	function totalCartPrice() {
		let total = 0;
		cart.forEach((item) => {
			total += item.price_in_cents;
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
