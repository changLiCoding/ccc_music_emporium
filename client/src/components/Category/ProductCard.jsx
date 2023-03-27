import React from "react";
import stringCapitalGenerator from "../../helpers/stringCapitalGenerator";

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

	return category === "amps & pedals" ? (
		<div className="container mx-auto p-6 grid grid-cols-3 gap-4 h-full space-x-4">
			<div
				onClick={openModalWithProduct}
				className="card flex card-side w-96 bg-white shadow hover:shadow-3xl transition-all cursor-pointer"
			>
				<figure>
					<img src={product.image_url} alt={product.model} />
				</figure>
				<div className="card-body">
					<h2 className="card-title">
						{product.model}
						<div className="badge badge-secondary">NEW</div>
					</h2>
					<p>{product.make}</p>
					<div className="card-actions justify-end">
						<div className="badge badge-outline">
							{stringCapitalGenerator(category)}
						</div>
						<div className="badge badge-outline">
							{stringCapitalGenerator(product.sub_category_name)}
						</div>
						<button
							disabled={product.stock_quantity <= 0}
							type="button"
							className="btn  btn-primary"
							onClick={handleBuyButtonClick}
						>
							{product.stock_quantity <= 0 ? "Out Stock" : "Buy Now"}
						</button>
					</div>
				</div>
			</div>
		</div>
	) : (
		<div className="card w-full sm:w-72 md:w-96 bg-white rounded-lg shadow overflow-hidden hover:shadow-3xl transition-all duration-200 cursor-pointer h-full">
			<div onClick={openModalWithProduct} className="h-full">
				<figure className="relative h-40 md:h-52">
					<img
						className={`object-cover`}
						src={product.image_url}
						alt={product.model}
					/>
				</figure>
				<div className="card-body p-4">
					<h2 className="card-title font-bold text-lg">{product.model}</h2>
					<p className="text-gray-500">{product.make}</p>
					<div className="flex flex-wrap justify-between mt-4">
						<div className="badge badge-secondary text-xs">NEW</div>
						<div className="flex">
							<div className="badge badge-outline text-xs">
								{stringCapitalGenerator(category)}
							</div>
							<div className="badge badge-outline text-xs ml-2">
								{stringCapitalGenerator(product.sub_category_name)}
							</div>
						</div>
						<button
							disabled={product.stock_quantity <= 0}
							type="button"
							className={`btn btn-primary btn-sm ${
								product.stock_quantity <= 0
									? "opacity-50 cursor-not-allowed"
									: ""
							}`}
							onClick={handleBuyButtonClick}
						>
							{product.stock_quantity <= 0 ? "Out Stock" : "Buy Now"}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
