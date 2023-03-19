import React from "react";
import { Link } from "react-router-dom";

import useHomeCategories from "../hooks/useHomeCategories";
import Card from "./Cards";

export default function Categories() {
	const { categories } = useHomeCategories();
	return (
		<div>
			CATEGORIES PAGE
			
			<div>
				<ul>
					{categories.categories &&
						categories.categories.map((category) => {
							const linkUrl = `/categories/${category.name}`;
							return (
								<li key={category.id}>
									<Link to={linkUrl}>{category.name.toUpperCase()}</Link>
								</li>
							);
						})}
				</ul>
			</div>
		</div>
	);
}
