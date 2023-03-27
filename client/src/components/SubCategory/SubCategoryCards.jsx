import React, { useState } from "react";

import ProductCard from "../Category/ProductCard";
import ProductModal from "../Category/ProductModal";

export default function SubCategoryCards({ products, setProducts }) {
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
			{products &&
				products.map((product) => {
					return (
						<div
							className='h-full'
							key={product.id}>
							<ProductCard
								setProducts={setProducts}
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
					setProducts={setProducts}
					closeModal={closeModal}
					product={currentProductModal}
				/>
			)}
		</article>
	);
}
