import React from "react";
import { Link } from "react-router-dom";
import stringCapitalGenerator from "../../helpers/stringCapitalGenerator";

export default function SubCategoryLinks(props) {
	const { subCategoryNames } = props;
	console.log(subCategoryNames);
	return (
		<>
			{subCategoryNames &&
				subCategoryNames.map((subCategory) => {
					const linkUrl = `/categories/${subCategory}`;
					return (
						<li key={subCategory}>
							<Link to={linkUrl}>{stringCapitalGenerator(subCategory)}</Link>
						</li>
					);
				})}
		</>
	);
}
