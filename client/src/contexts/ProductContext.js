import { createContext, useState } from "react";
import useAllProducts from "../hooks/useAllProducts";
export const ProductContext = createContext({});

export function ProductProvider(props) {
	const { products, setProducts } = useAllProducts();

	const [productState, setProductState] = useState({});

	return (
		<ProductContext.Provider value={{ products, setProducts }}>
			{props.children}
		</ProductContext.Provider>
	);
}
