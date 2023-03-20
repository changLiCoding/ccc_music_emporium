import React from "react";

import SortBy from "./SortBy";

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
				<FontAwesomeIcon
					icon={faChevronRight}
					color='white'
				/>
				<h2 className='text-white font-bold text-lg mx-3'>
					<Link
						to={`/categories/${categoryName}`}
						className='text-white font-bold text-lg'>
						{categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}
					</Link>
				</h2>
			</div>
			<SortBy />
		</div>
	);
}
