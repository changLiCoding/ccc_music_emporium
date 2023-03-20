import React from "react";
import { useParams } from "react-router-dom";
import useCategoryProducts from "../../hooks/useCategoryProducts";

import Card from "./Card";

export default function Category() {
	const { name } = useParams();
	const { products } = useCategoryProducts(name);
	console.log(`Rendering ${name} category`);
	return (
		<div>
			CATEGORY PAGE
			<div>This the the page for {name.toUpperCase()} products</div>
			{products.products &&
				products.products.map((product) => {
					return (
						<div key={product.id}>
							<Card product={product} />
						</div>
					);
				})}
		</div>
	);
}
