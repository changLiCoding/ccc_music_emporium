import React from "react";
import useOrderHistory from "../../hooks/useOrderHistory";
import RentalTable from "./RentalTable";
import PurchaseTable from "./PurchaseTable";

export default function OrderHistory() {
	const userID = localStorage.getItem("user_id");

	const { purchaseHistory, rentalHistory } = useOrderHistory(userID);

	return (
		<div className="w-full min-h-screen flex flex-col items-center">
			<header className="text-5xl text-center my-10">
				<h1 className="font-bold">Your Order History</h1>
			</header>
			<span className="text-3xl mb-4">
				<h1>Purchases</h1>
			</span>
			<PurchaseTable purchaseHistory={purchaseHistory.purchaseHistory} />
			<span className="text-3xl mb-4">
				<h1>Rentals</h1>
			</span>
			<RentalTable rentalHistory={rentalHistory.rentalHistory} />
		</div>
	);
}
