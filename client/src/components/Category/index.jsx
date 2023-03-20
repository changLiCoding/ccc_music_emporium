import React from "react";
import { useParams } from "react-router-dom";
import useCategoryProducts from "../../hooks/useCategoryProducts";

import InfoBar from "./InfoBar";
import SideBars from "./SideBars";
import CategoryCards from "./CategoryCards";

export default function Category(props) {
	const { subCategories } = props;
	const { name } = useParams();
	const { products } = useCategoryProducts(name);
	return (
		<main className='flex flex-col container mx-auto'>
			<InfoBar category={name}></InfoBar>
			<div className='flex'>
				<SideBars subCategories={subCategories}></SideBars>
				<CategoryCards products={products.products} />
			</div>
		</main>
	);
}
