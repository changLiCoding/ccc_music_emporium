import React from "react";
import { Link } from "react-router-dom";

export default function Home(props) {
	const { categories } = props;

	return (
		<div>
			HOME PAGE
			<div>
				<ul>
					{categories &&
						categories.map((category) => {
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
