import React from "react";
import useOrderHistory from "../../hooks/useOrderHistory";
import RentTable from "./RentTable";
import BuyTable from "./BuyTable";

export default function OrderHistory() {
	const userID = localStorage.getItem("user_id");

	const { purchaseHistory } = useOrderHistory(userID);

	return (
		<div className="w-full min-h-screen flex flex-col items-center">
			<header className="text-5xl text-center my-10">
				<h1 className="font-bold">Your Order History</h1>
			</header>
			<span className="text-3xl mb-4">
				<h1>Purchases</h1>
			</span>
			<BuyTable purchaseHistory={purchaseHistory.purchaseHistory} />
			<span className="text-3xl mb-4">
				<h1>Rentals</h1>
			</span>
		</div>
	);
}
