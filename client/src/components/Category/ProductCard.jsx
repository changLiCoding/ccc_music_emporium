import React from "react";
import stringCapitalGenerator from "../../helpers/stringCapitalGenerator";
import priceConverter from "../../helpers/priceConverter";

import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { ProductContext } from "../../contexts/ProductContext";

export default function Card(props) {
	const { product, category, openModal, setCurrentProductModal } = props;

	const { updateProductContextQuantity } = useContext(ProductContext);

	// const [isModalOpen, setIsModalOpen] = useState(false)
	const { addCart } = useContext(CartContext);
	const openModalWithProduct = () => {
		setCurrentProductModal(product);
		openModal();
	};
	const handleBuyButtonClick = async (e) => {
		e.stopPropagation();
		addCart(product);
		updateProductContextQuantity(
			product,
			"decrement",
			"Added to cart! Woohoo!"
		);
	};

	return (
		<div
			onClick={openModalWithProduct}
			className="card w-96 w-96 bg-white shadow hover:shadow-3xl transition-all h-full space-x-4 border border-primary"
		>
			<figure className="max-w-52 max-h-52">
				<img
					className="object-contain h-48"
					src={product.image_url}
					alt={product.model}
				/>
			</figure>
			<div className="card-body">
				<h2 className="card-title font-bold text-lg">{product.make}</h2>
				<p className="text-gray-500">{product.model}</p>
				<div className="flex flex-wrap justify-between mt-4">
					<div className="badge btn-sm btn-outline hover:bg-white hover:text-black text-md">
						{stringCapitalGenerator(product.sub_category_name)}
					</div>
					<div className="badge btn-sm border-black btn-accent bg-amber-500 hover:bg-amber-500 hover:border-black text-lg font-bold">
						{priceConverter(product.price_in_cents)}
					</div>
				</div>
				<button
					disabled={product.stock_quantity <= 0}
					type="button"
					className={`btn btn-primary btn-sm ${
						product.stock_quantity <= 0 ? "cursor-not-allowed" : ""
					}`}
					onClick={handleBuyButtonClick}
				>
					{product.stock_quantity <= 0 ? "Sold Out!" : "Buy Now"}
				</button>
			</div>
		</div>
		// )
		// <div className="card w-full sm:w-72 md:w-96 bg-white rounded-lg shadow overflow-hidden hover:shadow-3xl transition-all duration-200 cursor-pointer h-full">
		// 	<div onClick={openModalWithProduct} className="h-full">
		// 		<figure className="relative h-40 md:h-52">
		// 			<img
		// 				className="object-contain h-48"
		// 				src={product.image_url}
		// 				alt={product.model}
		// 			/>
		// 		</figure>
		// 		<div className="card-body p-4">
		// 			<h2 className="card-title font-bold text-lg">{product.make}</h2>
		// 			<p className="text-gray-500">{product.model}</p>
		// 			<div className="flex flex-wrap justify-between mt-4">
		// 				<div className="badge badge-secondary text-xs">NEW</div>
		// 				<div className="flex">
		// 					<div className="badge badge-outline text-xs ml-2">
		// 						{stringCapitalGenerator(product.sub_category_name)}
		// 					</div>
		// 					<div className="badge badge-outline bg-amber-500 text-xs">
		// 						{priceConverter(product.price_in_cents)}
		// 					</div>
		// 				</div>
		// 				<button
		// 					disabled={product.stock_quantity <= 0}
		// 					type="button"
		// 					className={`btn btn-primary btn-sm ${
		// 						product.stock_quantity <= 0
		// 							? "opacity-50 cursor-not-allowed"
		// 							: ""
		// 					}`}
		// 					onClick={handleBuyButtonClick}
		// 				>
		// 					{product.stock_quantity <= 0 ? "Out Stock" : "Buy Now"}
		// 				</button>
		// 			</div>
		// 		</div>
		// 	</div>
		// </div>
	);
}
