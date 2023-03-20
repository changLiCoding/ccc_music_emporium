import React from "react";
import ProductCard from "./ProductCard";

export default function CategoryCards(props) {
	const { products } = props;
	return (
		<article className='flex items-center flex-nowrap justify-center mx-20 mb-10 grid grid-cols-3 gap-4'>
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
