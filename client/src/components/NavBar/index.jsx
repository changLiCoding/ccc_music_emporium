import React from "react";

import Logo from "./Logo";
import NavLinks from "./NavLinks";
import Dropdown from "./Dropdown";

export default function NavBar(props) {
	const { categories } = props;

	return (
		<nav>
			<Logo />
			<NavLinks categories={categories} />

			<Dropdown />
		</nav>
	);
}
