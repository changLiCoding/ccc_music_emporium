import React from "react";
import { Link } from "react-router-dom";

export default function Card(props) {
	const { category, paragraph, image } = props;

	return (
		<div className="card w-full bg-white shadow hover:shadow-3xl transition-all">
			<Link to={`/categories/${category}`}>
				<div className="card-body p-6 flex items-center">
					<h2 className="card-title text-3xl font-bold underline">
						{category.charAt(0).toUpperCase() + category.slice(1)}
					</h2>
					<p className="mt-3 italic">{paragraph}</p>
				</div>
				<figure className="relative h-60">
					<img
						className="object-cover w-full h-full"
						src={image}
						alt="Keyboard"
					/>
				</figure>
			</Link>
		</div>
	);
}
