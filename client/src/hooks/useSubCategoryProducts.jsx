import { useState, useEffect } from "react";
import axios from "axios";

export default function useSubCategoryProducts(subCategoryName) {
	const [products, setProducts] = useState({});

	useEffect(() => {
		axios
			.get(
				`http://localhost:8080/api/categories/:name/sub_categories/${subCategoryName}`
			)
			.then((response) => {
				setProducts((prevProducts) => {
					return { ...prevProducts, ...response.data };
				});
			})
			.catch((err) => console.error("123", err));
	}, [subCategoryName]);

	return { products };
}
