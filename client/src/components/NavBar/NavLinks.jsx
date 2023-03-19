import React from "react";
import { Link } from "react-router-dom";

export default function NavLinks(props) {
	const { categories } = props;
	return (
		<div>
			NAVLINKS CONTAINER
			<ul>
				{categories &&
					categories.map((category) => {
						const linkUrl = `/categories/${category.name}`;

						return (
							<li key={category.id}>
								<Link
									className='btn btn-active btn-primary'
									to={linkUrl}>
									{category.name.toUpperCase()}
								</Link>
							</li>
						);
					})}
			</ul>
		</div>
	);
}
