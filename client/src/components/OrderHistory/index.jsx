import React from "react";
import useOrderHistory from "../../hooks/useOrderHistory";
import RentalTable from "./RentalTable";
import PurchaseTable from "./PurchaseTable";
import NoContentError from "./NoContentError";

export default function OrderHistory() {
	const userID = localStorage.getItem("user_id");

	const { purchaseHistory, rentalHistory } = useOrderHistory(userID);

	return (
		<div className="w-full min-h-screen flex flex-col items-center">
			<header className="text-5xl text-center my-10">
				<h1 className="font-bold">Your Order History</h1>
			</header>
			<span className="text-3xl mb-4 font-bold divider">
				<h1>Purchases</h1>
			</span>
			{purchaseHistory.purchaseHistory &&
			purchaseHistory.purchaseHistory.length === 0 ? (
				<NoContentError errorType={"purchase"} />
			) : (
				<PurchaseTable purchaseHistory={purchaseHistory.purchaseHistory} />
			)}
			<span className="text-3xl mb-4 font-bold divider">
				<h1>Rentals</h1>
			</span>
			{rentalHistory.rentalHistory &&
			rentalHistory.rentalHistory.length === 0 ? (
				<NoContentError errorType={"rental"} />
			) : (
				<RentalTable rentalHistory={rentalHistory.rentalHistory} />
			)}
		</div>
	);
}
