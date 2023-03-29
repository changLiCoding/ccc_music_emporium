import React from "react";
import RentalLineItems from "./RentalLineItems";
import priceConverter from "../../helpers/priceConverter";

export default function RentalTable(props) {
	const { rentalHistory } = props;

	return (
		<div>
			<table className='table mb-16'>
				{/* head */}
				<thead>
					<tr className='border-[#d1cdcd] border-2'>
						<th className='w-6'>
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
						const realStart = new Date(item.rent_start);
						realStart.setDate(realStart.getDate() - 1);
						const startTimestamp = realStart.toISOString();
						const realEnd = new Date(item.rent_end);
						realEnd.setDate(realEnd.getDate() - 1);
						const endTimestamp = realEnd.toISOString();

						return (
							<RentalLineItems
								key={item.id}
								imageUrl={item.image}
								make={item.make}
								model={item.model}
								price={priceConverter(item.price_per_day * item.days_rent)}
								startDate={startTimestamp.slice(0, 10)}
								endDate={endTimestamp.slice(0, 10)}
							/>
						);
					})}
				{/* foot */}
				<tfoot>
					<tr className='border-[#d1cdcd] border-2'>
						<th></th>
						<th></th>
						<th></th>
						<th></th>
						<th>
							<p className='text-xl'></p>
						</th>
					</tr>
				</tfoot>
			</table>
		</div>
	);
}
