import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";

import InfoBar from "../Category/InfoBar";
import SideBars from "../Category/SideBars";
import SubCategoryCards from "./SubCategoryCards";
import { ProductContext } from "../../contexts/ProductContext";

export default function SubCategory() {
	const { sub_categories_name, name } = useParams();
	const { products } = useContext(ProductContext);
	const [localProducts, setLocalProducts] = useState([]);
	useEffect(() => {
		products.products &&
			setLocalProducts((prveProducts) => {
				prveProducts = [];

				return [
					...prveProducts,
					...products.products.filter(
						(product) => product.sub_category_name === sub_categories_name
					),
				];
			});
	}, [sub_categories_name, products.products]);
	return (
		<main className="flex flex-col mx-auto max-w-auto mb-12 min-h-[80vh]">
			<InfoBar
				setProducts={setLocalProducts}
				products={localProducts}
				category={name}
				subcategory={sub_categories_name}
			></InfoBar>
			<div className="flex justify-center">
				<SideBars></SideBars>
				<SubCategoryCards
					products={localProducts}
					setProducts={setLocalProducts}
				/>
			</div>
		</main>
	);
}
