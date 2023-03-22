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
		const response = await axios.post("http://localhost:8080/api/checkout", {
			amount_in_cents,
			products,
		});
		const { clientSecret: client_secret, order, userName } = response.data;

		// Use the client secret to confirm the payment on the client-side

		const { error } = await stripe.confirmCardPayment(
			client_secret.client_secret,
			{
				payment_method: {
					card: elements.getElement(CardElement),
				},
			}
		);
		if (error) {
			setError(error.message);
			setProcessing(false);
		} else {
			// Payment succeeded, call onSuccess callback
			setProcessing(false);

			onSuccess(amount_in_cents, order.id, userName);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<CardElement
				className='mt-8 mb-8'
				options={{
					style: {
						base: {
							fontSize: "16px",
							color: "#fc5900",
							"::placeholder": {
								color: "#B3B3B3",
							},
						},
					},
				}}
			/>
			{error && <div>{error}</div>}
			<div className='container flex justify-between'>
				<button
					className='btn flex-initial w-32 justify-around'
					disabled={processing}>
					{processing ? "Processing..." : `Pay ${totalInString}`}
				</button>
				<label
					htmlFor='my-modal-5'
					className='btn flex-initial w-32 justify-around'>
					Never Mind
				</label>
			</div>
		</form>
	);
}
