import React, { useContext } from "react";
import CartItems from "./CartItems";
import { CartContext } from "../../contexts/CartContext";
import priceConverter from "../../helpers/priceConverter";

export default function Checkout() {
	const { cart } = useContext(CartContext);

	return (
		<div className="overflow-x-auto w-full h-screen">
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
				{cart.length !== 0 && (
					<CartItems
						imageUrl={cart[0].image_url}
						make={cart[0].make}
						model={cart[0].model}
						price={priceConverter(cart[0].price_in_cents)}
					/>
				)}

				{/* foot */}
				<tfoot>
					<tr>
						<th></th>
						<th>Product</th>
						<th>Quantity</th>
						<th>Total Price</th>
					</tr>
				</tfoot>
			</table>
		</div>
	);
}
