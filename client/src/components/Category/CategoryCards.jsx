import React from "react";
import ProductCard from "./ProductCard";

export default function CategoryCards(props) {
	const { products } = props;
	return (
		<article className='flex-1'>
			{products &&
				products.map((product) => {
					return (
						<div key={product.id}>
							<ProductCard
								product={product}
								category={product.category_name}
							/>
						</div>
					);
				})}
		</article>
	);
}
