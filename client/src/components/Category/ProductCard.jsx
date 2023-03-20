import React from "react";

export default function Card(props) {
	const { product, category } = props;
	return (	
		<div className='card card-side w-96 bg-white shadow hover:shadow-3xl transition-all justify-self-center border 1px flex items-stretch'>
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
