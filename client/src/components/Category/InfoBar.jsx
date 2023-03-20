import React from "react";

import { Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function InfoBar(props) {
	const { categoryName } = props;
	library.add(faChevronRight);
	return (
		<div className='bg-green-500 py-2 px-4 flex justify-between items-center'>
			<div className='flex items-center'>
				<Link
					to='/'
					className='text-white font-medium mr-2'>
					Home
				</Link>
				<FontAwesomeIcon icon='fa-regular fa-arrow-right' />
				<h2 className='text-white font-bold text-lg'>
					<Link
						to={`/categories/${categoryName}`}
						className='text-white font-bold text-lg'>
						{categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}
					</Link>
				</h2>
			</div>
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
		</div>
	);
}
