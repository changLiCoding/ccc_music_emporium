import React, { useContext } from "react";
import CartItems from "./CartItems";
import CheckoutForm from "./CheckoutForm";

// import { CartContext } from "../../contexts/CartContext";
// import { ProductContext } from "../../contexts/ProductContext";
import priceConverter from "../../helpers/priceConverter";
import { emptyCart, removeFromCart } from "../../features/cart/cartSlice";
import { updateProductReduxQuantity } from "../../features/product/productSlice";

import handleSuccessPay from "../../helpers/handleSuccessPay";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import EmptyCartAlert from "./EmptyCartAlert";
import NotLoggedInAlert from "./NotLoggedInAlert";

const stripePromise = loadStripe(
	"pk_test_51LffVFEcCevwDBwZtOSgdKTjniGR3VywPsW5EeJNMf9GUMXZp3TVdV5OEHR2ASoB9gvZvBoFGATjhU94PyykNQM800oZNqUDyx"
);
export default function Checkout() {
	const dispatch = useDispatch();
	// const {
	// cart, totalCartPrice,
	// emptyCart,
	// removeFromCart,
	// } = useContext(CartContext);

	const { totalCartPrice, cart } = useSelector((state) => state.cart);
	// const { ContextQuantity } = useContext(ProductContext);
	const navigate = useNavigate();
	const user = localStorage.getItem("user_name");

	const onSuccess = (amountInCents, orderId, customer) => {
		const message = `Thank you ${customer}! Your order ID is ${orderId} for a total payment of ${priceConverter(
			amountInCents
		)}.`;

		handleSuccessPay(
			message,
			// emptyCart,
			dispatch(emptyCart()),
			navigate
		);
	};

	const handleRemove = async (index) => {
		// updateProductContextQuantity(
		// 	cart[index],
		// 	"increment",
		// 	"Product removed from cart"
		// );
		console.log("Let see what got removed from cart!!!", cart[index]);
		await dispatch(
			updateProductReduxQuantity({
				cartProduct: cart[index],
				updatedType: "increment",
				message: "Product removed from cart",
			})
		);
		// removeFromCart(index);
		dispatch(removeFromCart(index));
	};

	const handleEmptyCart = async () => {
		for (const product of cart) {
			try {
				await dispatch(
					updateProductReduxQuantity({
						cartProduct: product,
						updatedType: "increment",
					})
				);
			} catch (error) {
				console.error("Error emptying cart:", error);
			}
		}
		// try {
		// 	const promises = cart.map((product) =>
		// 		dispatch(
		// 			updateProductReduxQuantity({
		// 				cartProduct: product,
		// 				updatedType: "increment",
		// 			})
		// 		)
		// 	);
		// 	await Promise.all(promises);
		// 	dispatch(emptyCart());
		// } catch (error) {
		// 	console.error("Error emptying cart:", error);
		// }
		dispatch(emptyCart());
	};

	// Populate Cart Page
	// Make sure key uniqueness
	const cartItemArray = cart.map((item, index) => {
		if (item.daysRent) {
			let startAt = item.startAt.toString().slice(0, 10);
			let endAt = item.endAt.toString().slice(0, 10);
			return (
				<CartItems
					key={Math.random()}
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
					key={Math.random()}
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
		<div className='w-full min-h-[78vh] flex flex-col items-center mb-14'>
			<header className='text-5xl text-center my-16 divider'>
				<h1 className='font-bold'>Review Your Order</h1>
			</header>
			{cart.length === 0 && <EmptyCartAlert />}

			<table className='table w-10/12'>
				{/* head */}
				<thead>
					<tr className='border-[#d1cdcd] border-2'>
						<th>Product</th>
						<th>Type</th>
						<th></th>
						<th>Price</th>
						<th className='w-40'>
							<span>
								<button
									className='btn btn-sm btn-error'
									onClick={handleEmptyCart}>
									Remove All
								</button>
							</span>
						</th>
					</tr>
				</thead>
				{/* table rows */}
				{cart.length !== 0 ? (
					cartItemArray
				) : (
					<tbody>
						<tr>
							<th>-</th>
						</tr>
					</tbody>
				)}
				{/* foot */}
				<tfoot>
					<tr className='border-[#d1cdcd] border-2'>
						<th></th>
						<th></th>
						<th>Subtotal:</th>
						<th>
							<p className='text-xl'>{priceConverter(totalCartPrice)}</p>
						</th>
						<th>
							<label
								htmlFor='my-modal-5'
								className='btn btn-primary'>
								$ PAY NOW! $
							</label>
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
				<div className='modal-box mx-auto max-w-4xl p-10 border border-primary'>
					{user ? (
						<>
							<h2 className='divider text-3xl font-bold text-center underline'>
								Checkout
							</h2>
							<Elements stripe={stripePromise}>
								<CheckoutForm
									onSuccess={onSuccess}
									products={cart}
									totalInString={priceConverter(totalCartPrice)}
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
