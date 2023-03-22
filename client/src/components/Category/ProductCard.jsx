import React from "react";
import stringCapitalGenerator from "../../helpers/stringCapitalGenerator";

import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export default function Card(props) {
	const { product, category, openModal, setCurrentProductModal } = props;
	// const [isModalOpen, setIsModalOpen] = useState(false)
	const { addCart } = useContext(CartContext);
	const openModalWithProduct = () => {
		setCurrentProductModal(product);
		openModal();
	};

	return (
		<div
			onClick={openModalWithProduct}
			className='card card-side w-96 bg-white shadow hover:shadow-3xl 	transition-all'>
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
						type='button'
						className='btn btn-primary'
						onClick={() => addCart(product)}>
						addCart!!!!!
					</button>
				</div>
			</div>
		</div>
	);
}
