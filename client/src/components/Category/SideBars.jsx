import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";

import SubCategoryLinks from "./SubCategoryLinks";
import stringCapitalGenerator from "../../helpers/stringCapitalGenerator";
import { SubCategoryNameContext } from "../../contexts/CategoryNameContext";

export default function SideBars() {
	const { subCategoryNames } = useContext(SubCategoryNameContext);
	const objCategoryNames = Object.keys(subCategoryNames);
	const objSubCategoryNames = Object.values(subCategoryNames);
	return (
		<div className='flex justify-items-start w-56'>
			<ul className='menu bg-base-100 w-56 p-2 rounded-box justify-items-start'>
				{/* <!-- Sidebar content here --> */}
				{objCategoryNames.map((category, index) => {
					const linkUrl = `/categories/${category}`;
					return (
						<Fragment key={category}>
							<li className=' text-xl font-semibold leading-3 '>
								<Link to={linkUrl}>{stringCapitalGenerator(category)}</Link>
							</li>
							{objSubCategoryNames[index] && (
								<SubCategoryLinks
									category={category}
									subCategoryNames={objSubCategoryNames[index]}
								/>
							)}
						</Fragment>
					);
				})}
			</ul>
		</div>
	);
}
