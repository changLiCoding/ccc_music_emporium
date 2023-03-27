import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";

import InfoBar from "./InfoBar";
import SideBars from "./SideBars";
import CategoryCards from "./CategoryCards";
import { ProductContext } from "../../contexts/ProductContext";

export default function Category() {
	const { name } = useParams();
	const { products } = useContext(ProductContext);
	const [localProducts, setLocalProducts] = useState([]);
	useEffect(() => {
		products.products &&
			setLocalProducts((prveProducts) => {
				prveProducts = [];

				return [
					...prveProducts,
					...products.products.filter(
						(product) => product.category_name === name
					),
				];
			});
	}, [name, products.products]);
	return (
		<main className='flex flex-col mx-auto max-w-auto mb-12'>
			<InfoBar
				setProducts={setLocalProducts}
				products={localProducts}
				category={name}></InfoBar>
			<div className='flex justify-center'>
				<SideBars></SideBars>
				<CategoryCards
					products={localProducts}
					setProducts={setLocalProducts}
				/>
			</div>
		</main>
	);
}
