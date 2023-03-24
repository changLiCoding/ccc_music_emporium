import React from "react";
import { Link } from "react-router-dom";
import stringCapitalGenerator from "../../helpers/stringCapitalGenerator";

export default function SubCategoryLinks(props) {
	const { category, subCategoryNames } = props;
	return (
		<>
			{subCategoryNames &&
				subCategoryNames.map((subCategory) => {
					const linkUrl = `/categories/${category}/sub_categories/${subCategory}`;
					return (
						
						<li  className='leading-4'key={subCategory}>
							<Link to={linkUrl}>{stringCapitalGenerator(subCategory)}</Link>
						</li>
					);
				})}
		</>
	);
}
