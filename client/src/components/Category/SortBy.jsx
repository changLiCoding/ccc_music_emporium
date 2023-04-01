import React from "react";

export default function SortBy({ dispatch }) {
	const handleSortChange = (event) => {
		switch (event.target.value) {
			case "make-a-to-z":
				dispatch({ type: "make-a-to-z" });
				break;
			case "make-z-to-a":
				dispatch({ type: "make-z-to-a" });
				break;
			case "price-high-to-low":
				dispatch({ type: "price-high-to-low" });
				break;
			case "price-low-to-high":
				dispatch({ type: "price-low-to-high" });
				break;
			default:
				break;
		}
	};

	return (
		<div className='flex items-center'>
			<label
				htmlFor='sort-by'
				className='font-medium mr-2'>
				Sort by:
			</label>
			<select
				name='sort-by'
				id='sort-by'
				className='px-2 py-1 rounded-md bg-white text-gray-700 font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent'
				onChange={(e) => {
					handleSortChange(e);
				}}>
				<option value='make-a-to-z'>Make: A to Z</option>
				<option value='make-z-to-a'>Make: Z to A</option>
				<option value='price-high-to-low'>Price: High to Low</option>
				<option value='price-low-to-high'>Price: Low to High</option>
			</select>
		</div>
	);
}
