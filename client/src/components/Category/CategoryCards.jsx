import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";

import useCategoryProducts from "../../hooks/useCategoryProducts";

export default function CategoryCards() {
	const { name } = useParams();
	const { products } = useCategoryProducts(name);

	const [localProducts, setLocalProducts] = useState([]);
	useEffect(() => {
		products.products &&
			setLocalProducts((prveProducts) => {
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
		<article className='items-center flex items-stretch flex-nowrap justify-center mx-20 mb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full'>
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
					isModalOpen={isModalOpen}
					closeModal={closeModal}
					product={currentProductModal}
				/>
			)}
		</article>
	);
}
