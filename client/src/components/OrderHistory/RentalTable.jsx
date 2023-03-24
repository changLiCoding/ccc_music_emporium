import React from "react";
import RentalLineItems from "./RentalLineItems";
import priceConverter from "../../helpers/priceConverter";

export default function RentalTable(props) {
	const { rentalHistory } = props;

	return (
		<div>
			<table className="table mb-16">
				{/* head */}
				<thead>
					<tr className="border-[#d1cdcd] border-2">
						<th className="w-6">
							<span></span>
						</th>
						<th>Product</th>
						<th>Rental Dates</th>
						<th></th>
						<th>Price</th>
					</tr>
				</thead>
				{/* table rows */}
				{rentalHistory &&
					rentalHistory.map((item) => {
						return (
							<RentalLineItems
								key={item.id}
								imageUrl={item.image}
								make={item.make}
								model={item.model}
								price={priceConverter(item.price_per_day * item.days_rent)}
								startDate={item.rent_start.slice(0, 10)}
								endDate={item.rent_end.slice(0, 10)}
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
