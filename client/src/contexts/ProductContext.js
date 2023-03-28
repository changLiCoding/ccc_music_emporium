import { createContext } from "react";
import axios from "axios";

import handleAddToCartNotify from "../helpers/handleAddToCartNotify";
import useAllProducts from "../hooks/useAllProducts";

export const ProductContext = createContext({});

export function ProductProvider(props) {
	const { products, setProducts } = useAllProducts();

	// const [productState, setProductState] = useState({});

	async function updateProductContextQuantity(
		cartProduct,
		updatedType,
		message
	) {
		try {
			let productToUpdate = {};
			await setProducts((prevProducts) => {
				const updatedProducts = { ...prevProducts };
				productToUpdate = updatedProducts.products.find(
					(product) => product.model === cartProduct.model
				);
				if (updatedType === "increment") {
					productToUpdate.stock_quantity = productToUpdate.stock_quantity + 1;
				} else if (updatedType === "decrement") {
					productToUpdate.stock_quantity = productToUpdate.stock_quantity - 1;
				}
				return updatedProducts;
			});
			const response = await axios.post(
				`http://localhost:8080/api/categories/${productToUpdate.category_name}`,
				{
					product: {
						...productToUpdate,
						stock_quantity:
							updatedType === "increment"
								? productToUpdate.stock_quantity - 1
								: productToUpdate.stock_quantity + 1,
					},
					updateType: updatedType,
				}
			);
			message && handleAddToCartNotify(message);

			return response.data;
		} catch (error) {
			console.error(error);
		}
	}

	return (
		<ProductContext.Provider
			value={{ products, setProducts, updateProductContextQuantity }}>
			{props.children}
		</ProductContext.Provider>
	);
}
