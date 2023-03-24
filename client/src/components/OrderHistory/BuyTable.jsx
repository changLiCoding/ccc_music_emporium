import React from "react";
import OrderLineItems from "./OrderLineItems";
import priceConverter from "../../helpers/priceConverter";

export default function BuyTable(props) {
	const { purchaseHistory } = props;

	return (
		<div>
			<table className="table mb-16">
				{/* head */}
				<thead>
					<tr className="border-[#d1cdcd] border-2">
						<th className="w-5">
							<span></span>
						</th>
						<th>Product</th>
						<th>Date</th>
						<th></th>
						<th>Price</th>
					</tr>
				</thead>
				{/* table rows */}
				{purchaseHistory &&
					purchaseHistory.map((item) => {
						return (
							<OrderLineItems
								key={item.id}
								imageUrl={item.image}
								make={item.make}
								model={item.model}
								purchaseDate={item.purchase_date.slice(0, 10)}
								price={priceConverter(item.price)}
							/>
						);
					})}
				{/* foot */}
				<tfoot>
					<tr className="border-[#d1cdcd] border-2">
						<th></th>
						<th></th>
						<th></th>
						<th></th>
						<th>
							<p className="text-xl"></p>
						</th>
					</tr>
				</tfoot>
			</table>
		</div>
	);
}
