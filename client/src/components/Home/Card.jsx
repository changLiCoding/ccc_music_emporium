import React from "react";
import { Link } from "react-router-dom";

export default function Card(props) {
  const {category, paragraph, image } = props 

  return (
    <div className="card w-96 bg-base-100 shadow hover:shadow-3xl transition-all">
					<Link to={`/categories/${category}`}>
						<div className="card-body">
							<h2 className="card-title">I am {category}</h2>
							<p>{paragraph}</p>
						</div>
						<figure>
							<img
								src={image}
								alt="Keyboard"
							/>
						</figure>
					</Link>
				</div>
    
  )
}