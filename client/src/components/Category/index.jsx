import React, { useEffect, useContext, useReducer } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import InfoBar from "./InfoBar";
import SideBars from "./SideBars";
import CategoryCards from "./CategoryCards";
// import { ProductContext } from "../../contexts/ProductContext";
import {
	fetchProducts,
	selectByCategory,
} from "../../features/product/productSlice";
import reducer from "../../reducers/category";

export default function Category() {
	const { name } = useParams();
	// const { products } = useContext(ProductContext);

	const dispatchReduxt = useDispatch();
	const { products, isLoading, error } = useSelector((store) => store.products);
	console.log(products);
	// const isLoading = useSelector((state) => state.products.isLoading);
	// const error = useSelector((state) => state.products.error);

	useEffect(() => {
		dispatchReduxt(fetchProducts());
	}, [dispatchReduxt, name]);
	useEffect(() => {
		dispatchReduxt(selectByCategory(name));
	}, [isLoading, dispatchReduxt, name]);
	// const [localProducts, dispatch] = useReducer(
	// 	reducer,
	// 	products ? [...products] : []
	// );
	// useEffect(() => {
	// 	products &&
	// 		dispatch({
	// 			type: "query-product-by-category",
	// 			products: [
	// 				...products.filter((product) => product.category_name === name),
	// 			],
	// 		});
	// }, [name, products]);
	return isLoading ? (
		<div>
			<button className='btn loading'>Loading</button>
		</div>
	) : (
		<main className='flex flex-col mx-auto max-w-auto mb-12 min-h-[80vh]'>
			<InfoBar
				// dispatch={dispatch}
				products={products}
				category={name}></InfoBar>
			<div className='flex justify-center'>
				<SideBars></SideBars>
				<CategoryCards
					products={products}
					// dispatch={dispatch}
				/>
			</div>
		</main>
	);
}
