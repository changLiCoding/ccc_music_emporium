import React from "react";
import stringCapitalGenerator from "../../helpers/stringCapitalGenerator";
import priceConverter from "../../helpers/priceConverter";
// import { useContext } from "react";
// import { useDispatch } from "react-redux";

// import { CartContext } from "../../contexts/CartContext";
import { addCart } from "../../features/cart/cartSlice";
import { updateProductReduxQuantity } from "../../features/product/productSlice";
// import { ProductContext } from "../../contexts/ProductContext";

export default function Card(props) {
	const { product, openModal, setCurrentProductModal, dispatch } = props;
	// const dispatch = useDispatch();
	// const { updateProductContextQuantity } = useContext(ProductContext);

	// const [isModalOpen, setIsModalOpen] = useState(false)
	// const { addCart } = useContext(CartContext);
	const openModalWithProduct = () => {
		setCurrentProductModal(product);
		openModal();
	};
	const handleBuyButtonClick = async (e) => {
		e.preventDefault();
		e.stopPropagation();
		dispatch(addCart({ product }));
		// updateProductContextQuantity(
		// 	product,
		// 	"decrement",
		// 	"Added to cart! Woohoo!"
		// );
		dispatch(
			updateProductReduxQuantity({
				cartProduct: product,
				updatedType: "decrement",
				message: "Added to cart! Woohoo!",
			})
		);
		return false;
	};

	return (
		<div
			onClick={openModalWithProduct}
			className='card w-96 max-h-[28rem] bg-white shadow hover:shadow-3xl transition-all h-full space-x-4 border border-primary'>
			<figure className='max-w-52 max-h-52 mt-4'>
				<img
					className='object-contain h-48'
					src={product.image_url}
					alt={product.model}
				/>
			</figure>
			{/* <form onSubmit={(e) => e.preventDefault()}> */}
			<div className='card-body'>
				<h2 className='card-title font-bold text-lg'>{product.make}</h2>
				<p className='text-gray-500'>{product.model}</p>
				<div className='flex flex-wrap justify-between mt-4'>
					<div className='badge btn-sm btn-outline hover:bg-white hover:text-black text-md'>
						{stringCapitalGenerator(product.sub_category_name)}
					</div>
					<div className='badge btn-sm border-black btn-accent bg-amber-500 hover:bg-amber-500 hover:border-black text-lg font-bold'>
						{priceConverter(product.price_in_cents)}
					</div>
				</div>
				<button
					disabled={product.stock_quantity <= 0}
					type='button'
					className={`btn btn-primary btn-sm ${
						product.stock_quantity <= 0 ? "cursor-not-allowed" : ""
					}`}
					onClick={handleBuyButtonClick}>
					{product.stock_quantity <= 0 ? "Sold Out!" : "Buy Now"}
				</button>
			</div>
			{/* </form> */}
		</div>
	);
}
