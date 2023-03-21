import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider(props) {
	const [cart, setCart] = useState([]);

	function addCart(product) {
		// [ product, product , product ].map((product, i))

		setCart((prevCart) => {
			return [...prevCart, product];
		});
	}

	function removeFromCart(i) {
		const newCartArr = cart.filter((product, index) => {
			return index !== i;
		});
		setCart(newCartArr);
	}

	function emptyCart() {
		setCart((prevCart) => {
			return [];
		});
	}

	function totalCartPrice() {
		let total = 0;
		cart.forEach((item) => {
			total += item.price_in_cents;
		});
		return total;
	}

	return (
		<CartContext.Provider
			value={{ cart, addCart, emptyCart, removeFromCart, totalCartPrice }}
		>
			{props.children}
		</CartContext.Provider>
	);
}
