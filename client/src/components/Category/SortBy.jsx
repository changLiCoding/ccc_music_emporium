import React from "react";

export default function SortBy() {
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
				className='px-2 py-1 rounded-md bg-white text-gray-700 font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent'>
				<option value='make-a-to-z'>Make: A to Z</option>
				<option value='make-z-to-a'>Make: Z to A</option>
				<option value='price-high-to-low'>Price: High to Low</option>
				<option value='price-low-to-high'>Price: Low to High</option>
			</select>
		</div>
	);
}
