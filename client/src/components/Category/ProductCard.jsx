import React from "react";
import { useParams } from "react-router-dom";
import stringCapitalGenerator from "../../helpers/stringCapitalGenerator";

import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import useCategoryProducts from "../../hooks/useCategoryProducts";

export default function Card(props) {
	const { product, setProducts, category, openModal, setCurrentProductModal } =
		props;

	const { name } = useParams();
	const { handleStateAndDatabaseChange } = useCategoryProducts(name);

	// const [isModalOpen, setIsModalOpen] = useState(false)
	const { addCart } = useContext(CartContext);
	const openModalWithProduct = () => {
		setCurrentProductModal(product);
		openModal();
	};
	const handleBuyButtonClick = async (e) => {
		e.stopPropagation();
		addCart(product);
		// updateProductStockQuantity(product, "decrement");
		handleStateAndDatabaseChange(
			product,
			"decrement",
			setProducts,
			"Added to cart! Woohoo!"
		);
	};

	return (
		<div className='container mx-auto p-6 grid grid-cols-3 gap-4 h-full space-x-4'>
			<div
				onClick={openModalWithProduct}
				className='card flex card-side w-96 bg-white shadow hover:shadow-3xl transition-all'>
				<figure>
					<img
						className={category === "guitars" ? "-rotate-90" : null}
						src={product.image_url}
						alt={product.model}
					/>
				</figure>
				<div className='card-body'>
					<h2 className='card-title'>
						{product.model}
						<div className='badge badge-secondary'>NEW</div>
					</h2>
					<p>{product.make}</p>
					<div className='card-actions justify-end'>
						<div className='badge badge-outline'>
							{stringCapitalGenerator(category)}
						</div>
						<div className='badge badge-outline'>
							{stringCapitalGenerator(product.sub_category_name)}
						</div>
						<button
							disabled={product.stock_quantity <= 0}
							type='button'
							className='btn btn-xs'
							onClick={handleBuyButtonClick}>
							{product.stock_quantity <= 0 ? "Out Stock" : "Buy Now"}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
