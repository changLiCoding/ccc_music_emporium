import React, { useState, useContext } from "react";
import Datepicker from "react-tailwindcss-datepicker";

import { ProductContext } from "../../contexts/ProductContext";
import { CartContext } from "../../contexts/CartContext";
import priceConverter from "../../helpers/priceConverter";
import getDaysDifference from "../../helpers/getDayDifference";
import handleLogErrNotify from "../../helpers/handleLogErrNotify";

export default function ProductRentCalendar({ product }) {
	const initalDate = new Date();
	initalDate.setDate(initalDate.getDate() + 1);

	const [value, setValue] = useState({
		startDate: new Date(),
		endDate: initalDate,
	});
	const { updateProductContextQuantity } = useContext(ProductContext);

	const handleValueChange = (newValue) => {
		if (typeof newValue.startDate === "string") {
			// Convert the startDate string to a Date object
			newValue.startDate = new Date(newValue.startDate);
			newValue.startDate.setDate(newValue.startDate.getDate() + 1);
		}

		if (typeof newValue.endDate === "string") {
			// Convert the endDate string to a Date object
			newValue.endDate = new Date(newValue.endDate);
			newValue.endDate.setDate(newValue.endDate.getDate() + 1);
		}
		setValue(newValue);
	};
	const { setRent } = useContext(CartContext);

	return (
		<>
			<input
				type='checkbox'
				id='calendar'
				className='modal-toggle'
			/>
			<div className='modal'>
				<div className='modal-box w-10/12 max-w-5xl h-4/6'>
					<Datepicker
						placeholder={"Please Click Here"}
						value={value}
						onChange={handleValueChange}
						minDate={new Date().setDate(new Date().getDate() - 1)}
					/>
					<div className='flex justify-center mt-3'>
						<img
							className='w-2/3'
							src='https://cdn.pixabay.com/photo/2017/06/21/22/40/guitar-2428921_1280.jpg'
							alt='band here'
						/>
					</div>

					<div className='modal-action mt-7 flex justify-between align-baseline'>
						<label
							htmlFor='calendar'
							disabled={product.stock_quantity === 0}
							// type='button'
							className='btn btn-success'
							onClick={() => {
								// Product can only be rent more than a day. Error message will be shown when same day selected.
								if (
									value.startDate.getFullYear() ===
										value.endDate.getFullYear() &&
									value.startDate.getMonth() === value.endDate.getMonth() &&
									value.startDate.getDate() === value.endDate.getDate()
								) {
									handleLogErrNotify(
										`Sorry, have to rent out for more than a day.`
									);
								} else {
									// Make changes to CartContext, ProductContext, and also backend database.
									setRent(value.startDate, value.endDate, product);
									updateProductContextQuantity(
										product,
										"decrement",
										"Added to cart! Woohoo!"
									);
								}
							}}>
							Submit
						</label>
						<span className='badge badge-lg self-center'>
							{value.startDate
								? `Rental Cost: 	${priceConverter(
										getDaysDifference(value.startDate, value.endDate) *
											product.rent_rate_in_cents
								  )}`
								: "Please Select Dates"}
						</span>

						<label
							htmlFor='calendar'
							className='btn btn-error'>
							Close
						</label>
					</div>
				</div>
			</div>
		</>
	);
}
