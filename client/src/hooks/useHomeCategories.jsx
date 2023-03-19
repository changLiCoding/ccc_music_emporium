import { useState, useEffect } from "react";
import axios from "axios";

export default function useHomeCategories() {
	const [categories, setCategories] = useState({});

	useEffect(() => {
		axios
			.get("http://localhost:8080/api")
			.then((response) => {
				setCategories((prevCategories) => {
					return { ...prevCategories, ...response.data };
				});
			})
			.catch((err) => console.error("123", err));
	}, []);

	return { categories };
}
