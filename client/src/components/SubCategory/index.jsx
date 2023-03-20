import React from "react";
import { useParams } from "react-router-dom";
import useSubCategoryProducts from "../../hooks/useSubCategoryProducts";

export default function SubCategory() {
	const { sub_categories_name } = useParams();
	console.log(sub_categories_name);
	const { products } = useSubCategoryProducts(sub_categories_name);
	console.log(products, sub_categories_name);

	
	return (
		<div>
			SUB CATEGORY PAGE
			<div>
				This the the page for {sub_categories_name.toUpperCase()} products
			</div>
			{products.products &&
				products.products.map((product) => {
					return (
						<div key={product.id}>
							<ul>
								<li> {product.make}</li>
								<li>{product.model}</li>
								<li>{product.description}</li>
								<img
									src={product.image_url}
									alt={product.make}
								/>
								<li>{product.price_in_cents} Cents</li>
							</ul>
						</div>
					);
				})}
		</div>
	);
}
