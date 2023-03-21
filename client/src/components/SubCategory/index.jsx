import React from "react";
import { useParams } from "react-router-dom";

import InfoBar from "../Category/InfoBar";
import SideBars from "../Category/SideBars";
import CategoryCards from "../Category/CategoryCards";

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
									className='transform rotate-90'
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

// import InfoBar from "./InfoBar";
// import SideBars from "./SideBars";
// import CategoryCards from "./CategoryCards";

// export default function Category(props) {
// 	const { subCategories } = props;
// 	const { name } = useParams();
// 	const { products } = useCategoryProducts(name);
// 	return (
// 		<main className='flex flex-col container mx-auto'>
// 			<InfoBar category={name}></InfoBar>
// 			<div className='flex'>
// 				<SideBars subCategories={subCategories}></SideBars>
// 				<CategoryCards products={products.products} />
// 			</div>
// 		</main>
// 	);
// }
