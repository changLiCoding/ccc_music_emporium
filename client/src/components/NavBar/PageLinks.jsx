import React from "react";
import { Link } from "react-router-dom";

function PageLinks() {
	return (
		<ul className='navbar-center menu menu-horizontal px-5 ml-20 text-xl font-bold'>
			<li>
				<Link to='/'>Shop</Link>
			</li>
			<li>
				<Link to='/about'>About Us</Link>
			</li>
			<li>
				<Link to='/contact'>Contact</Link>
			</li>
		</ul>
	);
}

export default PageLinks;
