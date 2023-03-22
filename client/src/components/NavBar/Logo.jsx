import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGuitar } from "@fortawesome/free-solid-svg-icons";
import { faDrum } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Logo() {
	return (
		<div className="flex-1 navbar-start">
			<FontAwesomeIcon icon={faGuitar} size="2x" />
			<Link to="/" className="btn btn-ghost normal-case text-2xl">
				CCC MUSIC EMPORIUM
			</Link>
			<FontAwesomeIcon icon={faDrum} size="2x" />
		</div>
	);
}

export default Logo;
