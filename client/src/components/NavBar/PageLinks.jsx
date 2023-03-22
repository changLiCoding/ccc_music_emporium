import React from "react";
import { Link } from "react-router-dom";

function PageLinks() {
	return (
		<div className="navbar-center">
			<ul className="menu menu-horizontal px-5 ml-20 text-xl">
				<li>
					<Link to="/">Shop</Link>
				</li>
				<li>
					<a>About Us</a>
				</li>
				<li>
					<a>Contact</a>
				</li>
			</ul>
		</div>
	);
}

export default PageLinks;
