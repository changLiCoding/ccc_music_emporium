import React, { useState } from "react";

import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";

export default function CategoryCards({ products, dispatch }) {
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
			className='
		grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
		2xl:grid-cols-4
		 gap-6'>
			{products &&
				products.map((product) => {
					return (
						<div
							className='h-full'
							key={product.id}>
							<ProductCard
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
