import React from "react";
import { Link } from "react-router-dom";

export default function SubCategoryLinks(props) {
	const { subCategoryNames } = props;
	console.log(subCategoryNames);
	return (
		<ul>
			{subCategoryNames &&
				subCategoryNames.map((subCategory) => {
					const linkUrl = `/categories/${subCategory}`;
					return (
						<li>
							<Link to={linkUrl}>{subCategory}</Link>
						</li>
					);
				})}
		</ul>
	);
}
