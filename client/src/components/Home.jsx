import React from "react";

import useHomeCategories from "../hooks/useHomeCategories";

export default function Home() {
	let { categories } = useHomeCategories();

	return (
		<div>
			HOME PAGE
			<div>
				{categories.categories &&
					categories.categories.map((category) => {
						return <div key={category.id}>{category.name}</div>;
					})}
			</div>
		</div>
	);
}
