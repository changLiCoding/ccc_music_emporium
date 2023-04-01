import React, { useEffect, useState, useContext, useReducer } from "react";
import { useParams } from "react-router-dom";

import InfoBar from "./InfoBar";
import SideBars from "./SideBars";
import CategoryCards from "./CategoryCards";
import { ProductContext } from "../../contexts/ProductContext";
import reducer from "../../reducers/category";

export default function Category() {
	const { name } = useParams();
	const { products } = useContext(ProductContext);
	// const [localProducts, setLocalProducts] = useState([]);
	const [localProducts, dispatch] = useReducer(
		reducer,
		products.products ? [...products.products] : []
	);
	useEffect(() => {
		products.products &&
			dispatch({
				type: "query-product-by-category",
				products: [
					...products.products.filter(
						(product) => product.category_name === name
					),
				],
			});
		// setLocalProducts((prveProducts) => {
		// 	prveProducts = [];

		// 	return [
		// 		...prveProducts,
		// 		...products.products.filter(
		// 			(product) => product.category_name === name
		// 		),
		// 	];
		// });
	}, [name, products.products]);
	return (
		<main className='flex flex-col mx-auto max-w-auto mb-12 min-h-[80vh]'>
			<InfoBar
				dispatch={dispatch}
				products={localProducts}
				category={name}></InfoBar>
			<div className='flex justify-center'>
				<SideBars></SideBars>
				<CategoryCards
					products={localProducts}
					dispatch={dispatch}
				/>
			</div>
		</main>
	);
}
