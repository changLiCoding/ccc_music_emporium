import React, { useContext } from "react";
import CartItems from "./CartItems";
import { CartContext } from "../../contexts/CartContext";
import priceConverter from "../../helpers/priceConverter";

export default function Checkout() {
	const { cart, totalCartPrice } = useContext(CartContext);

	const cartItemArray = cart.map((item) => (
		<CartItems
			imageUrl={item.image_url}
			make={item.make}
			model={item.model}
			price={priceConverter(item.price_in_cents)}
		/>
	));

	return (
		<div className="w-full h-screen">
			<table className="table w-full">
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
							<p className="text-xl">{totalCartPrice()}</p>
						</th>
					</tr>
				</tfoot>
			</table>
		</div>
	);
}
