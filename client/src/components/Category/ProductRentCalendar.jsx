import React, { useState, useContext } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import { CartContext } from "../../contexts/CartContext";

export default function ProductRentCalendar({ product }) {
	const [value, setValue] = useState({
		startDate: new Date(),
		endDate: new Date().setMonth(11),
	});

	const handleValueChange = (newValue) => {
		// console.log("newValue:", newValue);
		setValue(newValue);
	};

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
					<div className='modal-action mt-80 flex justify-between'>
						<button
							type='button'
							className='btn btn-secondary'
							onClick={() => {
								console.log(
									value.startDate,
									value.endDate,
									value.endDate - value.startDate
								);
							}}>
							Submit
						</button>
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
