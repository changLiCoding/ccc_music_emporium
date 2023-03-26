import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";

import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";

import { ProductContext } from "../../contexts/ProductContext";

export default function CategoryCards() {
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
	const [isModalOpen, setIsModalOpen] = useState(false);

	const [currentProductModal, setCurrentProductModal] = useState(null);

	const openModal = () => {
		setIsModalOpen(true);
	};
	const closeModal = () => {
		setIsModalOpen(false);
	};
	// items-center flex-nowrap justify-center mx-20 mb-10 w-full
	return (
		<article
			className='
		grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
		2xl:grid-cols-4
		 gap-6'>
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
					closeModal={closeModal}
					product={currentProductModal}
				/>
			)}
		</article>
	);
}
