import React from "react";
import { Link } from "react-router-dom";
import stringCapitalGenerator from "../../helpers/stringCapitalGenerator";

export default function SubCategoryLinks(props) {
	const { subCategoryNames } = props;
	return (
		<>
			{subCategoryNames &&
				subCategoryNames.map((subCategory) => {
					const linkUrl = `/categories/:name/sub_categories/${subCategory}`;
					return (
						<li key={subCategory}>
							<Link to={linkUrl}>{stringCapitalGenerator(subCategory)}</Link>
						</li>
					);
				})}
		</>
	);
}
