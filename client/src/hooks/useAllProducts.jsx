import { useState, useEffect } from "react";
import axios from "axios";

export default function useAllProducts() {
	const [products, setProducts] = useState({});

	useEffect(() => {
		axios
			.get("/api/products")
			.then((response) => {
				setProducts((prevProducts) => {
					return { ...prevProducts, ...response.data };
				});
			})
			.catch((err) => console.error("123", err));
	}, []);

	return { products, setProducts };
}
