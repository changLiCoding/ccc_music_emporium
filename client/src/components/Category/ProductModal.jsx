import React, { useRef, useEffect, useContext } from "react";

import { CartContext } from "../../contexts/CartContext";
import { ProductContext } from "../../contexts/ProductContext";

import ProductRentCalendar from "./ProductRentCalendar";

export default function ProductModal(props) {
	const ref = useRef(null);

	const { updateProductContextQuantity } = useContext(ProductContext);
	const { product, closeModal } = props;
	const { addCart } = useContext(CartContext);

	useEffect(() => {
		function handleClickOutside(event) {
			if (ref.current && !ref.current.contains(event.target)) {
				closeModal();
			}
		}
		// Bind the event listener
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			// Unbind the event listener on clean up
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [closeModal]);

	const addCartCloseModal = (product) => {
		addCart(product);
		updateProductContextQuantity(
			product,
			"decrement",
			"Added to cart! Woohoo!"
		);
		closeModal();
	};

	return (
		<div id="modal-container" className="custom-modal">
			<div
				className="card card-compact w-3/5 h-9/12 bg-base-100 shadow-xl"
				ref={ref}
			>
				<div className="card-actions bg-white rounded-lg justify-end">
					<button onClick={closeModal} className="btn btn-sm btn-error">
						X
					</button>
				</div>
				<figure className="bg-white">
					<img
						className="bg-white object-contain  h-96"
						src={product.image_url}
						alt={product.model}
					/>
				</figure>
				<div className="card-body bg-white">
					<h2 className="card-title">{product.model}</h2>
					<p className="overflow-y-auto">{product.description}</p>
					<div></div>
					<div className="card-actions justify-between">
						<div className="badge btn-md text-xl">
							${product.price_in_cents / 100}
						</div>
						<div className="space-x-1">
							<button
								disabled={product.stock_quantity === 0}
								onClick={() => addCartCloseModal(product)}
								className="btn btn-primary border-accent"
							>
								{product.stock_quantity === 0 ? "Sold Out!" : "Add to Cart"}
							</button>
							<label
								disabled={product.stock_quantity === 0}
								htmlFor="calendar"
								className="btn btn-accent border-primary"
							>
								Or Rent
							</label>
						</div>
						<ProductRentCalendar product={product} />
					</div>
				</div>
			</div>
		</div>
	);
}
