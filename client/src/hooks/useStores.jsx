import { useState, useEffect } from "react";
import axios from "axios";

export default function useStores() {
	const [stores, setStores] = useState({});

	useEffect(() => {
		axios
			.get("http://localhost:8080/api/stores")
			.then((response) => {
				setStores((prevStores) => {
					return { ...prevStores, ...response.data };
				});
			})
			.catch((err) => console.error("123", err));
	}, []);

	return { stores };
}
