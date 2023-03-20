import React from "react";

import Logo from "./Logo";
import NavLinks from "./NavLinks";
import Dropdown from "./Dropdown";
import Card from "../Cards";

export default function NavBar(props) {
	const { categories } = props;

	return (
		<nav className='bg-coffee-dark py-4'>
			<div className='max-w-7xl mx-auto px-4'>
				<Logo />
				<NavLinks categories={categories} />

				<Dropdown />
				<Card />
			</div>
		</nav>
	);
}
