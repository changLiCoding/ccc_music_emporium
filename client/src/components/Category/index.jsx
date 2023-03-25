import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import InfoBar from "./InfoBar";
import SideBars from "./SideBars";
import CategoryCards from "./CategoryCards";

export default function Category() {
	const { name } = useParams();
	// const [categoryProducts, setCategoryProducts] = useState(
	// 	products && { ...products }
	// );
	// useEffect(() => {
	// 	setCategoryProducts((preProducts) => {
	// 		return { ...preProducts, ...products };
	// 	});
	// }, [products]);
	return (
		<main className='flex flex-col mx-auto max-w-auto'>
			<InfoBar category={name}></InfoBar>
			<div className='flex'>
				<SideBars></SideBars>
				<CategoryCards />
			</div>
		</main>
	);
}
