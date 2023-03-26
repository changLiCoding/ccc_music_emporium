import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";

import ProductCard from "../Category/ProductCard";
import ProductModal from "../Category/ProductModal";

import { ProductContext } from "../../contexts/ProductContext";

export default function SubCategoryCards() {
	const { sub_categories_name } = useParams();
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
	}, [products.products, sub_categories_name]);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [currentProductModal, setCurrentProductModal] = useState(null);

	const openModal = () => {
		setIsModalOpen(true);
	};
	const closeModal = () => {
		setIsModalOpen(false);
	};

	return (
		<article
			className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
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
					setProducts={setLocalProducts}
					closeModal={closeModal}
					product={currentProductModal}
				/>
			)}
		</article>
	);
}
