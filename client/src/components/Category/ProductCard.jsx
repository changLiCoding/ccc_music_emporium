import React from "react";
import { Link } from "react-router-dom";

export default function Card(props) {
	return (
		<div className='card'>
			<div className='cardbody'>
				<Link to={"/guitars"}>Guitars</Link>
				<h2 className='cardtitle'>Title Here!</h2>
				<p className='carddescription'>Description Here</p>
			</div>
			<button className='cardbutton'>
				I could be a link as "View product"
			</button>
		</div>
	);
}
