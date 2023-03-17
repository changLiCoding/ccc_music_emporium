import React, { useState, useEffect } from "react";
import axios from "axios";

export default function useHomeDataFetch() {
	const [data, setData] = useState({});

	useEffect(function () {
		console.log("Customized Hock Worked!");
		axios
			.get("http://localhost:8080/api")
			.then((response) => {
				setData({ ...response.data });
			})
			.catch((err) => console.error("123", err));
	}, []);
	return { data };
}
