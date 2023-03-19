import React from "react";
import { useParams } from "react-router-dom";
import useCategoryProducts from "../hooks/useCategoryProducts";

export default function Category() {
	const { name } = useParams();
	const { products } = useCategoryProducts(name);

	return (
		<div>
			CATEGORY PAGE
			<div>This the the page for {name.toUpperCase()} products</div>
			{products.products &&
				products.products.map((product) => {
					return (
						<div key={product.id}>
							<ul>
								<li> {product.make}</li>
								<li>{product.model}</li>
								<li>{product.description}</li>
								<li>{product.price_in_cents} Cents</li>
							</ul>
						</div>
					);
				})}
		</div>
	);
}
