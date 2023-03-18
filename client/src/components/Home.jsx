import React from "react";
import { Link } from "react-router-dom";

import useHomeCategories from "../hooks/useHomeCategories";

export default function Home() {
	let { categories } = useHomeCategories();

	return (
		<div>
			HOME PAGE
			<div>
				<ul>
					{categories.categories &&
						categories.categories.map((category) => {
							const linkUrl = `/categories/${category.name}`;
							return (
								<li key={category.id}>
									<Link to={linkUrl}>
										{category.name.toUpperCase()}
										<ul>
											<li>sub_categories</li>
											<li>sub_categories</li>
											<li>sub_categories</li>
											<li>sub_categories</li>
										</ul>
									</Link>
								</li>
							);
						})}
				</ul>
			</div>
		</div>
	);
}
