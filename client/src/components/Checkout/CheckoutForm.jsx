import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";

export default function CheckoutForm({ products, onSuccess, totalInString }) {
	const amount_in_cents = products.reduce(
		(acc, product) => acc + parseInt(product.price_in_cents),
		0
	);

	const stripe = useStripe();
	const elements = useElements();
	const [processing, setProcessing] = useState(false);
	const [error, setError] = useState(null);
	const handleSubmit = async (event) => {
		event.preventDefault();
		setProcessing(true);

		// Create a PaymentIntent on your server
		const {
			data: { client_secret },
		} = await axios.post("/api/checkout", {
			amount_in_cents,
			products,
		});

		// Use the client secret to confirm the payment on the client-side
		const { error, paymentIntent } = await stripe.confirmCardPayment(
			client_secret,
			{
				payment_method: {
					card: elements.getElement(CardElement),
					billing_details: {
						name: "John Doe",
					},
				},
			}
		);

		if (error) {
			setError(error.message);
			setProcessing(false);
		} else {
			// Payment succeeded, call onSuccess callback
			onSuccess();
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<CardElement />
			{error && <div>{error}</div>}
			<button disabled={processing}>
				{processing ? "Processing..." : `Pay ${totalInString}`}
			</button>
		</form>
	);
}
