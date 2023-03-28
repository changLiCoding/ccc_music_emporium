import { useState, useEffect } from "react";
import axios from "axios";

export default function useOrderHistory(userID) {
	const [purchaseHistory, setPurchaseHistory] = useState({});
	const [rentalHistory, setRentalHistory] = useState({});

	const token = localStorage.getItem("jwt");
	useEffect(() => {
		axios
			.get(`http://localhost:8080/api/users/${userID}/my_purchases`, {
				headers: {
					authorization: `Bearer ${token}`,
				},
			})
			.then((response) => {
				setPurchaseHistory({ ...response.data });
			})
			.catch((err) => console.error("123", err));
	}, [token, userID]);

	useEffect(() => {
		axios
			.get(`http://localhost:8080/api/users/${userID}/my_rentals`, {
				headers: {
					authorization: `Bearer ${token}`,
				},
			})
			.then((response) => {
				setRentalHistory({ ...response.data });
			})
			.catch((err) => console.error("123", err));
	}, [token, userID]);

	return { purchaseHistory, rentalHistory };
}
