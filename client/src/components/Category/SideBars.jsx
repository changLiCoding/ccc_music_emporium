import React from "react";
import { Link } from "react-router-dom";

import SubCategoryLinks from "./SubCategoryLinks";

export default function SideBars(props) {
	const { subCategories } = props;
	console.log(subCategories);
	const categoryNames = Object.keys(subCategories);
	const subCategoryNames = Object.values(subCategories);
	console.log(categoryNames, subCategoryNames);
	return (
		<div className='drawer drawer-mobile'>
			<input
				id='my-drawer-2'
				type='checkbox'
				className='drawer-toggle'
			/>
			<div className='drawer-content flex flex-col items-center justify-center'>
				{/* <!-- Page content here --> */}
				<label
					htmlFor='my-drawer-2'
					className='btn btn-primary drawer-button lg:hidden'>
					Open drawer
				</label>
			</div>
			<div className='drawer-side'>
				<label
					htmlFor='my-drawer-2'
					className='drawer-overlay'></label>
				<ul className='menu p-4 w-80 bg-base-100 text-base-content'>
					{/* <!-- Sidebar content here --> */}
					{categoryNames.map((category, index) => {
						console.log(subCategoryNames[index]);
						const linkUrl = `/categories/${category}`;
						if (subCategoryNames[index]) {
							return (
								<li>
									<Link to={linkUrl}>{category}</Link>
									<SubCategoryLinks
										subCategoryNames={subCategoryNames[index]}
									/>
								</li>
							);
						}
						return null;
					})}
				</ul>
			</div>
		</div>
	);
}
