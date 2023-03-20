import React from "react";
import { Link } from "react-router-dom";

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
						const linkUrl = `/categories/${category}`;

						return (
							<li>
								<Link to={linkUrl}>{category}</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}
