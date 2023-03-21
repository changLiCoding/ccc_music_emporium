import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider(props) {
	const [cart, setCart] = useState([]);

	function addCart(product) {
		// [ product, product , product ].map((product, i))

		setCart((prevCart) => {
			return [ ...prevCart, product];
		})
		
	}

	function removeFromCart(i) {
		const newCartArr = cart.filter((product, index) => {
			return index !== i;
		})
		setCart(newCartArr);
	 }

	function emptyCart() {
		setCart((prevCart) => {
			return [];
		});
	}

	return (
		<CartContext.Provider value={{ cart, addCart, emptyCart, removeFromCart }}>
			{props.children}
		</CartContext.Provider>
	);
}
