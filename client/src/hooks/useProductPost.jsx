import axios from "axios";
import { useState } from "react";

export default async function useProductPost() {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const postProduct = async (product, updateType) => {
		setIsLoading(true);
		setError(null);

		try {
			const response = await axios.post(
				`http://localhost:8080/api/categories/${product.category_name}`,
				{
					product,
					updateType,
				}
			);

			setIsLoading(false);

			return response.data;
		} catch (error) {
			setIsLoading(false);
			setError(error);
		}
	};

	return [postProduct, isLoading, error];
	// return axios
	// 	.post(`http://localhost:8080/api/categories/${product.category_name}`, {
	// 		product,
	// 		updateType,
	// 	})
	// 	.then((response) => {
	// 		// Handle successful response
	// 		console.log("Product updated to category:", response.data);
	// 	})
	// 	.catch((error) => {
	// 		// Handle error
	// 		console.error("Error updating product to category:", error);
	// 	});
}
