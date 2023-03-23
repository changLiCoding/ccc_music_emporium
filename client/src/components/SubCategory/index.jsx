import React from "react";
import { useParams } from "react-router-dom";
import useSubCategoryProducts from "../../hooks/useSubCategoryProducts";

import InfoBar from "../Category/InfoBar";
import SideBars from "../Category/SideBars";
import CategoryCards from "../Category/CategoryCards";

export default function SubCategory() {
	const { sub_categories_name, name } = useParams();
	const { products } = useSubCategoryProducts(sub_categories_name);

	return (
		<main className='flex flex-col container mx-auto'>
			<InfoBar
				category={name}
				subcategory={sub_categories_name}></InfoBar>
			<div className='flex'>
				<SideBars></SideBars>
				<CategoryCards products={products.products} />
			</div>
		</main>
	);
}
