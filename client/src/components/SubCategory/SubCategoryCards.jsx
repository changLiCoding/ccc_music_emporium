import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ProductCard from "../Category/ProductCard";
import ProductModal from "../Category/ProductModal";

import useSubCategoryProducts from "../../hooks/useSubCategoryProducts";

export default function SubCategoryCards() {
	const { sub_categories_name } = useParams();
	const { products } = useSubCategoryProducts(sub_categories_name);
	const [localProducts, setLocalProducts] = useState([]);

	useEffect(() => {
		products.products &&
			setLocalProducts((prveProducts) => {
				prveProducts = [];
				return [...prveProducts, ...products.products];
			});
	}, [products.products]);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [currentProductModal, setCurrentProductModal] = useState(null);

	const openModal = () => {
		setIsModalOpen(true);
	};
	const closeModal = () => {
		setIsModalOpen(false);
	};
	return (
		<article className='items-center flex-nowrap justify-center mx-20 mb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full'>
			{localProducts &&
				localProducts.map((product) => {
					return (
						<div
							className='h-full'
							key={product.id}>
							<ProductCard
								setProducts={setLocalProducts}
								product={product}
								category={product.category_name}
								openModal={openModal}
								setCurrentProductModal={setCurrentProductModal}
							/>
						</div>
					);
				})}
			{products && isModalOpen && (
				<ProductModal
					setProducts={setLocalProducts}
					closeModal={closeModal}
					product={currentProductModal}
				/>
			)}
		</article>
	);
}
