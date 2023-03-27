import React, { useState, useContext } from "react";
import Datepicker from "react-tailwindcss-datepicker";

import { ProductContext } from "../../contexts/ProductContext";
import { CartContext } from "../../contexts/CartContext";
import priceConverter from "../../helpers/priceConverter";
import getDaysDifference from "../../helpers/getDayDifference";

export default function ProductRentCalendar({ product }) {
	const [value, setValue] = useState({
		startDate: new Date(),
		endDate: new Date(),
	});
	const { updateProductContextQuantity } = useContext(ProductContext);
	// const randomFacts = [
	// 	"Standard tubas have approximately 16 feet of tubing",
	// 	"While in Germany in the first few years of the 60s George Harrison was deported because German authorities realized he was too young to be performing in nightclubs.",
	// ];

	const handleValueChange = (newValue) => {
		if (typeof newValue.startDate === "string") {
			// Convert the startDate string to a Date object
			newValue.startDate = new Date(newValue.startDate);
		}

		if (typeof newValue.endDate === "string") {
			// Convert the endDate string to a Date object
			newValue.endDate = new Date(newValue.endDate);
		}
		console.log(newValue);
		setValue(newValue);
	};
	const { setRent } = useContext(CartContext);

	return (
		<>
			<input type="checkbox" id="calendar" className="modal-toggle" />
			<div className="modal">
				<div className="modal-box w-10/12 max-w-5xl h-4/6">
					<Datepicker
						placeholder={"Please Click Here"}
						value={value}
						onChange={handleValueChange}
					/>
					<div className="flex justify-center mt-3">
						<img
							className="w-2/3"
							src="https://cdn.pixabay.com/photo/2017/06/21/22/40/guitar-2428921_1280.jpg"
							alt="band here"
						/>
					</div>
					{/* <div className='modal-action mt-80 flex justify-between'> */}
					<div className="modal-action mt-7 flex justify-between align-baseline">
						<button
							disabled={product.stock_quantity === 0}
							type="button"
							className="btn btn-success"
							onClick={() => {
								console.log(value);
								setRent(value.startDate, value.endDate, product);
								updateProductContextQuantity(
									product,
									"decrement",
									"Added to cart! Woohoo!"
								);
							}}
						>
							Submit
						</button>
						<span className="badge badge-lg self-center">
							{value.startDate
								? `Rental Cost: 	${priceConverter(
										getDaysDifference(value.startDate, value.endDate) *
											product.rent_rate_in_cents
								  )}`
								: "Please Select Dates"}
						</span>

						<label htmlFor="calendar" className="btn btn-error">
							Close
						</label>
					</div>
				</div>
			</div>
		</>
	);
}
