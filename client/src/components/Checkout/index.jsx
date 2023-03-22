import React, { useContext } from "react";
import CartItems from "./CartItems";
import CheckoutForm from "./CheckoutForm";

import { CartContext } from "../../contexts/CartContext";
import priceConverter from "../../helpers/priceConverter";

import handleSuccessPay from "../../helpers/handleSuccessPay";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useNavigate } from "react-router-dom";

const stripePromise = loadStripe(
	"pk_test_51LffVFEcCevwDBwZtOSgdKTjniGR3VywPsW5EeJNMf9GUMXZp3TVdV5OEHR2ASoB9gvZvBoFGATjhU94PyykNQM800oZNqUDyx"
);
export default function Checkout() {
	const { cart, totalCartPrice, emptyCart } = useContext(CartContext);

	const navigate = useNavigate();
	const onSuccess = (amountInCents, orderId, customer) => {
		const message = `Thank you ${customer}, the order ID is ${orderId} for payment of ${priceConverter(
			amountInCents
		)}.`;

		handleSuccessPay(message, emptyCart, navigate);
	};
	// Make sure key uniqueness
	let makeKeyUniq = 0;
	const cartItemArray = cart.map((item) => {
		makeKeyUniq++;
		return (
			<CartItems
				key={item.id + makeKeyUniq}
				imageUrl={item.image_url}
				make={item.make}
				model={item.model}
				price={priceConverter(item.price_in_cents)}
			/>
		);
	});

	return (
		<div className='w-full h-screen'>
			<table className='table w-full'>
				{/* head */}
				<thead>
					<tr>
						<th></th>
						<th>Product</th>
						<th>Quantity</th>
						<th>Total Price</th>
					</tr>
				</thead>
				{/* table rows */}
				{cart.length !== 0 && cartItemArray}

				{/* foot */}
				<tfoot>
					<tr>
						<th></th>
						<th>
							<label
								htmlFor='my-modal-5'
								className='btn'>
								SHUTUP AND TAKE MY MONEY!
							</label>
						</th>
						<th>Subtotal:</th>
						<th>
							<p className='text-xl'>{totalCartPrice()}</p>
						</th>
					</tr>
				</tfoot>
			</table>
			<input
				type='checkbox'
				id='my-modal-5'
				className='modal-toggle'
			/>
			<div className='modal'>
				<div className='modal-box mx-auto max-w-4xl p-12'>
					<h2 className='text-lg font-bold mb-6 text-center'>Checkout</h2>
					<Elements stripe={stripePromise}>
						<CheckoutForm
							onSuccess={onSuccess}
							products={cart}
							totalInString={totalCartPrice()}
							className='w-full'
						/>
					</Elements>
				</div>

				<div className='modal-action'></div>
			</div>
		</div>
	);
}
