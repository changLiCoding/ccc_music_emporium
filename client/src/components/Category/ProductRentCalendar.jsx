import React, { useState, useContext } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import { CartContext } from "../../contexts/CartContext";
import priceConverter from "../../helpers/priceConverter";
import getDaysDifference from "../../helpers/getDayDifference";

export default function ProductRentCalendar({ product }) {
	const [value, setValue] = useState({
		startDate: new Date(),
		endDate: new Date(),
	});

	const randomFacts = [
		"Standard tubas have approximately 16 feet of tubing",
		"While in Germany in the first few years of the 60s George Harrison was deported because German authorities realized he was too young to be performing in nightclubs.",
	];

	const handleValueChange = (newValue) => {
		if (typeof newValue.startDate === "string") {
			// Convert the startDate string to a Date object
			newValue.startDate = new Date(newValue.startDate);
		}

		if (typeof newValue.endDate === "string") {
			// Convert the endDate string to a Date object
			newValue.endDate = new Date(newValue.endDate);
		}

		setValue(newValue);
	};

	const { setRent } = useContext(CartContext);

	return (
		<>
			<input type="checkbox" id="calendar" className="modal-toggle" />
			<div className="modal">
				<div className="modal-box w-10/12 max-w-4xl h-4/6">
					<Datepicker
						placeholder={"Please Click Here"}
						value={value}
						onChange={handleValueChange}
					/>
					<div className="modal-action mt-40 flex justify-between">
						<div className="scale-100">
							<p className="transition delay-150 duration-300 ease-in text-4xl">
								{randomFacts[1]}
							</p>
						</div>
						<div>
							<div>
								<span className="text-lg">
									{value.startDate &&
										value.endDate &&
										priceConverter(
											getDaysDifference(value.startDate, value.endDate) *
												product.rent_rate_in_cents
										)}
								</span>
							</div>
							<button
								type="button"
								className="btn btn-secondary"
								onClick={() => {
									setRent(value.startDate, value.endDate, product);
								}}
							>
								Submit
							</button>
							<label htmlFor="calendar" className="btn">
								Close
							</label>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
