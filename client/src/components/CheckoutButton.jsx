import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

const stripePromise = loadStripe(process.env.STRIPE_PUBLIC_KEY);

const api = axios.create({
	baseURL: "/api",
	withCredentials: true,
});

export default function CheckoutButton(props) {
	const { products } = props;
	const handleClick = async () => {
		const stripe = await stripePromise;
		const response = await api.post("/checkout", { products });
		const { sessionId } = response.data;
		const { error } = await stripe.redirectToCheckout({ sessionId });
		if (error) {
			console.error(error);
		}
	};

	return (
		<button
			onClick={handleClick}
			type='button'
			className='btn btn-primary'>
			ShutUp and Take My Money!
		</button>
	);
}
