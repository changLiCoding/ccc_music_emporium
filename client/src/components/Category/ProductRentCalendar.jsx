import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

export default function ProductRentCalendar() {
	const [value, setValue] = useState({
		startDate: new Date(),
		endDate: new Date().setMonth(11),
	});

	const handleValueChange = (newValue) => {
		console.log("newValue:", newValue);
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
				<div className='modal-box w-11/12 max-w-5xl h-4/6'>
					<Datepicker
						value={value}
						onChange={handleValueChange}
					/>
					<div className='modal-action'>
						<label
							htmlFor='calendar'
							className='btn'>
							Yay!
						</label>
					</div>
				</div>
			</div>
		</>
	);
}
