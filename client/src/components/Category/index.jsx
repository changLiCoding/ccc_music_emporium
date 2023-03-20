import React from "react";
import { useParams } from "react-router-dom";
import useCategoryProducts from "../../hooks/useCategoryProducts";

import ProductCard from "./ProductCard";
import InfoBar from "./InfoBar";

export default function Category() {
	const { name } = useParams();
	const { products } = useCategoryProducts(name);
	console.log(`Rendering ${name} category`);
	return (
		<div className='flex flex-col container mx-auto'>
			<InfoBar categoryName={name}></InfoBar>

			<div></div>
			<div>This the the page for {name.toUpperCase()} products</div>
			{products.products &&
				products.products.map((product) => {
					return (
						<div key={product.id}>
							<ProductCard product={product} />
						</div>
					);
				})}
		</div>
	);
}
