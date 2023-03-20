import React from "react";

export default function SortBy() {
	return (
		<div className='flex items-center'>
			<label
				htmlFor='sort-by'
				className='text-white font-medium mr-2'>
				Sort by:
			</label>
			<select
				name='sort-by'
				id='sort-by'
				className='px-2 py-1 rounded-md bg-white text-gray-700 font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent'>
				<option value='price-high-to-low'>Price: High to Low</option>
				<option value='price-low-to-high'>Price: Low to High</option>
				<option value='name-a-to-z'>Name: A to Z</option>
				<option value='name-z-to-a'>Name: Z to A</option>
			</select>
		</div>
	);
}
