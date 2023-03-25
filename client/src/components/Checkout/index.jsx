import React, { useContext } from "react";
import CartItems from "./CartItems";
import CheckoutForm from "./CheckoutForm";

import { CartContext } from "../../contexts/CartContext";
import { ProductContext } from "../../contexts/ProductContext";
import priceConverter from "../../helpers/priceConverter";

import handleSuccessPay from "../../helpers/handleSuccessPay";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useNavigate } from "react-router-dom";
import EmptyCartAlert from "./EmptyCartAlert";
import NotLoggedInAlert from "./NotLoggedInAlert";

const stripePromise = loadStripe(
	"pk_test_51LffVFEcCevwDBwZtOSgdKTjniGR3VywPsW5EeJNMf9GUMXZp3TVdV5OEHR2ASoB9gvZvBoFGATjhU94PyykNQM800oZNqUDyx"
);
export default function Checkout() {
	const { cart, totalCartPrice, emptyCart, removeFromCart } =
		useContext(CartContext);
	const { updateProductContextQuantity } = useContext(ProductContext);

	const navigate = useNavigate();
	const user = localStorage.getItem("user");
	const onSuccess = (amountInCents, orderId, customer) => {
		const message = `Thank you ${customer}, the order ID is ${orderId} for payment of ${priceConverter(
			amountInCents
		)}.`;

		handleSuccessPay(message, emptyCart, navigate);
	};

	const handleRemove = (index) => {
		removeFromCart(index);
		updateProductContextQuantity(
			cart[index],
			"increment",
			"Product removed from cart"
		);
	};

	// Populate Cart Page
	// Make sure key uniqueness
	let makeKeyUniq = 0;
	const cartItemArray = cart.map((item, index) => {
		makeKeyUniq++;
		if (item.daysRent) {
			let startAt = item.startAt.toString().slice(0, 10);
			let endAt = item.endAt.toString().slice(0, 10);
			return (
				<CartItems
					key={item.id + makeKeyUniq}
					index={index}
					imageUrl={item.image_url}
					make={item.make}
					model={item.model}
					startAt={startAt}
					endAt={endAt}
					type='Rent'
					pricePerDay={priceConverter(item.rent_rate_in_cents)}
					price={priceConverter(item.daysRent * item.rent_rate_in_cents)}
					handleRemove={handleRemove}
				/>
			);
		} else {
			return (
				<CartItems
					key={item.id + makeKeyUniq}
					index={index}
					imageUrl={item.image_url}
					make={item.make}
					model={item.model}
					duration='-'
					type='Buy'
					price={priceConverter(item.price_in_cents)}
					handleRemove={handleRemove}
				/>
			);
		}
	});

	return (
		<div className='w-full h-screen flex flex-col items-center'>
			<header className='text-5xl text-center my-10'>
				<h1 className='font-bold'>Review Your Order</h1>
			</header>
			{cart.length === 0 && <EmptyCartAlert />}

			<table className='table w-10/12'>
				{/* head */}
				<thead>
					<tr className='border-[#d1cdcd] border-2'>
						<th className='w-40'>
							<span>
								<button
									className='btn btn-sm btn-error'
									onClick={emptyCart}>
									Remove All
								</button>
							</span>
						</th>
						<th>Product</th>
						<th>Type</th>
						<th></th>
						<th>Price</th>
					</tr>
				</thead>
				{/* table rows */}
				{cart.length !== 0 ? cartItemArray : <td>-</td>}
				{/* foot */}
				<tfoot>
					<tr className='border-[#d1cdcd] border-2'>
						<th></th>
						<th>
							<label
								htmlFor='my-modal-5'
								className='btn btn-primary'>
								SHUTUP AND TAKE MY MONEY!
							</label>
						</th>
						<th></th>
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
				<div className='modal-box mx-auto max-w-4xl p-10'>
					{user ? (
						<>
							<h2 className='text-lg font-bold text-center'>Checkout</h2>
							<Elements stripe={stripePromise}>
								<CheckoutForm
									onSuccess={onSuccess}
									products={cart}
									totalInString={totalCartPrice()}
									className='w-full'
								/>
							</Elements>
						</>
					) : (
						<NotLoggedInAlert />
					)}
				</div>
				<div className='modal-action'></div>
			</div>
		</div>
	);
}
