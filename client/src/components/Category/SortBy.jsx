import React from "react";

export default function SortBy({ setProducts }) {
	const handleSortChange = (event) => {
		switch (event.target.value) {
			case "make-a-to-z":
				setProducts((state) => {
					console.log(state);
					return [...state].sort((a, b) => a.make.localeCompare(b.make));
				});
				break;
			case "make-z-to-a":
				setProducts((state) => {
					console.log(state);
					return [...state].sort((a, b) => b.make.localeCompare(a.make));
				});
				break;
			case "price-high-to-low":
				setProducts((state) => {
					console.log(state);
					return [...state].sort((a, b) => b.price_in_cents - a.price_in_cents);
				});
				break;
			case "price-low-to-high":
				setProducts((state) => {
					console.log(state);
					return [...state].sort((a, b) => a.price_in_cents - b.price_in_cents);
				});
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
					console.log(e.target.value);
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
