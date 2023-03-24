import React from "react";
import { useParams } from "react-router-dom";
import useCategoryProducts from "../../hooks/useCategoryProducts";

import InfoBar from "./InfoBar";
import SideBars from "./SideBars";
import CategoryCards from "./CategoryCards";

export default function Category() {
	const { name } = useParams();
	const { products } = useCategoryProducts(name);
	return (
		<main className='flex flex-col mx-auto max-w-auto'>
			<InfoBar category={name}></InfoBar>
			<div className='flex'>
				<SideBars></SideBars>
				<CategoryCards products={products.products} />
			</div>
		</main>
	);
}
