import React, { useState, useContext } from "react";
import Datepicker from "react-tailwindcss-datepicker";

import { CartContext } from "../../contexts/CartContext";
import priceConverter from "../../helpers/priceConverter";
import getDaysDifference from "../../helpers/getDayDifference";
import useCategoryProducts from "../../hooks/useCategoryProducts";

export default function ProductRentCalendar({ product, setProducts }) {
	const [value, setValue] = useState({
		startDate: new Date(),
		endDate: new Date().setMonth(11),
	});

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

		setValue(newValue);
	};
	const { handleStateAndDatabaseChange } = useCategoryProducts();
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
					/>
					<div className='flex justify-center mt-3'>
						<img
							className='w-2/3'
							src='https://cdn.pixabay.com/photo/2017/06/21/22/40/guitar-2428921_1280.jpg'
							alt='band here'
						/>
					</div>
					{/* <div className='modal-action mt-80 flex justify-between'> */}
					<div className='modal-action mt-7 flex justify-between align-baseline'>
						<button
							disabled={product.stock_quantity === 0}
							type='button'
							className='btn btn-secondary'
							onClick={() => {
								setRent(value.startDate, value.endDate, product);
								handleStateAndDatabaseChange(
									product,
									"decrement",
									setProducts,
									"Added to cart! Woohoo!"
								);
							}}>
							Submit
						</button>
						<span className='badge badge-lg self-center'>
							{value.startDate
								? `Rent Spend: 	${priceConverter(
										getDaysDifference(value.startDate, value.endDate) *
											product.rent_rate_in_cents
								  )}`
								: "Please Select Dates"}
						</span>

						<label
							htmlFor='calendar'
							className='btn'>
							Close
						</label>
					</div>
				</div>
			</div>
		</>
	);
}
