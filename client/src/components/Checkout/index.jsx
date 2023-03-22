import React, { useContext } from "react";
import CartItems from "./CartItems";
import CheckoutForm from "./CheckoutForm";

import { CartContext } from "../../contexts/CartContext";
import priceConverter from "../../helpers/priceConverter";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { toast } from "react-toastify";

const stripePromise = loadStripe(
	"pk_test_51LffVFEcCevwDBwZtOSgdKTjniGR3VywPsW5EeJNMf9GUMXZp3TVdV5OEHR2ASoB9gvZvBoFGATjhU94PyykNQM800oZNqUDyx"
);
export default function Checkout() {
	const { cart, totalCartPrice, emptyCart } = useContext(CartContext);

	const notify = (succeeded) => {
		return toast.success(succeeded, {
			position: "top-center",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
			onClose: () => emptyCart(),
		});
	};
	const onSuccess = () => {
		notify("success");
	};
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
						<th></th>
						<th>Subtotal:</th>
						<th>
							<p className='text-xl'>{totalCartPrice()}</p>
						</th>
					</tr>
				</tfoot>
			</table>
			<Elements stripe={stripePromise}>
				<CheckoutForm
					onSuccess={onSuccess}
					products={cart}
					totalInString={totalCartPrice()}
				/>
			</Elements>
		</div>
	);
}
