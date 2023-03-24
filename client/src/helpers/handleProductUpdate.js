import axios from "axios";

export default function handleProductUpdate(product, updateType) {
	console.log(product, updateType);
	axios
		.post(`http://localhost:8080/api/categories/${product.category_name}`, {
			product,
			updateType,
		})
		.then((response) => {
			// Handle successful response
			console.log("Product updated to category:", response.data);
		})
		.catch((error) => {
			// Handle error
			console.error("Error updating product to category:", error);
		});
}
