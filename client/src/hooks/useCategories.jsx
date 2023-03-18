import { useState, useEffect } from "react";
import axios from "axios";

export default function useCategories() {
	const [categories, setCategories] = useState({});

	useEffect(() => {
		console.log("Customized Hook Worked!");
		axios
			.get("http://localhost:8080/api")
			.then((response) => {
				console.log(response.data);
				setCategories((prevCategories) => {
					return { ...prevCategories, ...response.data };
				});
			})
			.catch((err) => console.error("123", err));
	}, []);

	return { categories };
}
