import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider(props) {
	const [cart, setCart] = useState({});

	function addCart(productModel) {
		const key = productModel;
		if (cart[productModel]) {
			setCart((prevCart) => {
				return { ...prevCart, [key]: prevCart[productModel] + 1 };
			});
		} else {
			setCart((prevCart) => {
				return { ...prevCart, [key]: 1 };
			});
		}
	}

	return (
		<CartContext.Provider value={{ cart, addCart }}>
			{props.children}
		</CartContext.Provider>
	);
}
