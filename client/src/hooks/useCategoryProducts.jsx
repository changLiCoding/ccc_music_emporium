import { useState, useEffect } from "react";
import axios from "axios";
import handleProductUpdate from "../helpers/handleProductUpdate";

export default function useCategoryProducts(categoryName) {
	const [products, setProducts] = useState({});

	const updateProductStockQuantity = (product, updatedType) => {
		console.log(product);
		handleProductUpdate(product, updatedType);
		setProducts((prevProducts) => {
			console.log(prevProducts.products);
			const updatedProducts = { ...prevProducts };
			const productToUpdate = updatedProducts.products.find(
				(element) => element.model === product.model
			);
			if (updatedType === "increment") {
				productToUpdate.stock_quantity = productToUpdate.stock_quantity + 1;
			} else if (updatedType === "decrement") {
				productToUpdate.stock_quantity = productToUpdate.stock_quantity - 1;
			}

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

	return { products, updateProductStockQuantity };
}
