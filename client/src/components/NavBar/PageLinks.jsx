import React from "react";
import { Link } from "react-router-dom";

function PageLinks() {
	return (
		<div className="navbar-center">
			<ul className="menu menu-horizontal px-5 ml-20 text-xl font-bold">
				<li>
					<Link to="/">Shop</Link>
				</li>
				<li>
					<Link to="/about">About Us</Link>
				</li>
				<li>
					<a>Contact</a>
				</li>
			</ul>
		</div>
	);
}

export default PageLinks;
