import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import SubCategoryLinks from "./SubCategoryLinks";
import stringCapitalGenerator from "../../helpers/stringCapitalGenerator";

export default function SideBars(props) {
	const { subCategories } = props;
	const categoryNames = Object.keys(subCategories);
	const subCategoryNames = Object.values(subCategories);
	return (
		<div className='container flex-1'>
			<ul className='menu bg-base-100 w-56 p-2 rounded-box'>
				{/* <!-- Sidebar content here --> */}
				{categoryNames.map((category, index) => {
					const linkUrl = `/categories/${category}`;
					return (
						<Fragment key={category}>
							<li className='menu-title text-'>
								<Link to={linkUrl}>{stringCapitalGenerator(category)}</Link>{" "}
							</li>
							{subCategoryNames[index] && (
								<SubCategoryLinks subCategoryNames={subCategoryNames[index]} />
							)}
						</Fragment>
					);
				})}
			</ul>
		</div>
	);
}
