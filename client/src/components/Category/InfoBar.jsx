import React from "react";

import SortBy from "./SortBy";

import { Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import stringCapitalGenerator from "../../helpers/stringCapitalGenerator";

export default function InfoBar(props) {
	const { category, subcategory, dispatch } = props;
	library.add(faChevronRight);
	return (
		<div className='bg-none my-6 py-2 px-4 flex justify-between items-center'>
			<div className='flex items-center'>
				<Link
					to='/'
					className=' font-medium mr-2'>
					Home
				</Link>
				<FontAwesomeIcon icon={faChevronRight} />
				<h2 className='font-bold text-lg mx-3'>
					<Link
						to={`/categories/${category}`}
						className='font-bold text-lg'>
						{stringCapitalGenerator(category)}
					</Link>
				</h2>
				{subcategory && (
					<>
						<FontAwesomeIcon icon={faChevronRight} />
						<h2 className='font-bold text-lg mx-3'>
							<Link
								to={`/categories/${category}/sub_categories/${subcategory}`}
								className='font-bold text-lg'>
								{stringCapitalGenerator(subcategory)}
							</Link>
						</h2>
					</>
				)}
			</div>
			<SortBy dispatch={dispatch} />
		</div>
	);
}
