import React from "react";
import stringCapitalGenerator from "../../helpers/stringCapitalGenerator";

export default function Card(props) {
	const { product, category } = props;
	return (
		<div className='card card-side w-96 bg-white shadow-3xl'>
			<figure>
				<img
					className='-rotate-90'
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
				</div>
			</div>
		</div>
	);
}
