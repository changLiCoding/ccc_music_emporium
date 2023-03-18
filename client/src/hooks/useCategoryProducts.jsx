import { useState, useEffect } from "react";
import axios from "axios";

export default function useCategoryProducts(categoryName) {
	const [products, setProducts] = useState({});

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

	return { products };
}
