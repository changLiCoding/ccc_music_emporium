import React from "react";
import ProductCard from "./ProductCard";

export default function CategoryCards(props) {
	const { products } = props;
	return (
		<article className='items-center flex-nowrap justify-center mx-20 mb-10 grid grid-cols-3 gap-10'>
			{products &&
				products.map((product) => {
					return (
						<div key={product.id}>
							<ProductCard product={product} />
						</div>
					);
				})}
		</article>
	);
}
