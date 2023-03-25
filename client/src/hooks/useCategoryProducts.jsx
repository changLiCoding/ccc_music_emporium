import { useState, useEffect } from "react";
import axios from "axios";
import handleAddToCartNotify from "../helpers/handleAddToCartNotify";

export default function useCategoryProducts(categoryName) {
	const [products, setProducts] = useState({});

	const updateProductStockQuantity = (
		product,
		updatedType,
		setLocalProducts
	) => {
		setLocalProducts((prevProducts) => {
			console.log("here is the changed Array of products:   ", prevProducts);
			const updatedProducts = [...prevProducts];

			const productToUpdate = updatedProducts.find(
				(element) => element.model === product.model
			);
			if (updatedType === "increment") {
				productToUpdate.stock_quantity = productToUpdate.stock_quantity + 1;
			} else if (updatedType === "decrement") {
				productToUpdate.stock_quantity = productToUpdate.stock_quantity - 1;
			}
			console.log("Here is changed products object ::", updatedProducts);

			return updatedProducts;
		});
	};

	useEffect(() => {
		axios
			.get(`http://localhost:8080/api/categories/${categoryName}`)
			.then((response) => {
				setProducts((prevProducts) => {
					return { ...prevProducts, ...response.data };
				});
			})
			.catch((err) => console.error("123", err));
	}, [categoryName]);

	const handleStateAndDatabaseChange = async (
		product,
		updateType,
		setLocalProducts,
		message
	) => {
		handleAddToCartNotify(message);
		try {
			const response = await axios.post(
				`http://localhost:8080/api/categories/${product.category_name}`,
				{
					product,
					updateType,
				}
			);
			console.log(response.data.returnedNewProduct[0]);
			updateProductStockQuantity(product, updateType, setLocalProducts);
			return response.data;
		} catch (error) {
			console.error(error);
		}
	};

	return {
		products,
		updateProductStockQuantity,
		handleStateAndDatabaseChange,
	};
}
