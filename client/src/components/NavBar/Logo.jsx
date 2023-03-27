import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGuitar } from "@fortawesome/free-solid-svg-icons";
import { faDrum } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Logo() {
	return (
		<div className="flex-1 navbar-start">
			<FontAwesomeIcon
				icon={faGuitar}
				size="2x"
				className="hidden md:inline lg:inline"
			/>
			<Link
				to="/"
				className="btn btn-ghost normal-case font-bold font-mono sm:text-xl md:text-2xl lg:text-3xl 2xl:text-3xl logo-font"
			>
				CCC Music Emporium
			</Link>
			<FontAwesomeIcon icon={faDrum} size="2x" className="hidden xl:inline" />
		</div>
	);
}

export default Logo;
