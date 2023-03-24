import React from "react";
import stringCapitalGenerator from "../../helpers/stringCapitalGenerator";

import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

import handleAddToCartNotify from "../../helpers/handleAddToCartNotify";

export default function Card(props) {
	const { product, category, openModal, setCurrentProductModal } = props;
	// const [isModalOpen, setIsModalOpen] = useState(false)
	const { addCart } = useContext(CartContext);
	const openModalWithProduct = () => {
		setCurrentProductModal(product);
		openModal();
	};
	const handleBuyButtonClick = (e) => {
		e.stopPropagation();
		handleAddToCartNotify("Added to cart! Woohoo!");
		addCart(product);
	};

	return category === "guitars" ? (
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
							disabled={product.stock_quantity === 0}
							type='button'
							className='btn btn-xs'
							onClick={handleBuyButtonClick}>
							{product.stock_quantity === 0 ? "Out Stock" : "Buy Now"}
						</button>
					</div>
				</div>
			</div>
		</div>
	) : (
		<div
			onClick={openModalWithProduct}
			className='card w-96 bg-white shadow hover:shadow-3xl 	transition-all h-full space-x-4'>
			<figure className='max-w-52 max-h-52'>
				<img
					className='object-contain h-48'
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
				<button
					type='button'
					className='btn btn-xs'
					onClick={handleBuyButtonClick}>
					buy now
				</button>
				<div className='card-actions justify-end'>
					<div className='badge badge-outline'>
						{category.charAt(0).toUpperCase() + category.slice(1)}
					</div>
					<div className='badge badge-outline'>
						{product.sub_category_name.charAt(0).toUpperCase() +
							product.sub_category_name.slice(1)}
					</div>
				</div>
			</div>
		</div>
	);
}
