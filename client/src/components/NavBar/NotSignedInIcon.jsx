import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceMeh } from "@fortawesome/free-solid-svg-icons";

function NotSignedInIcon() {
	return (
		<div className="dropdown dropdown-end mr-3">
			<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
				<div className="w-10 rounded-full">
					<FontAwesomeIcon icon={faFaceMeh} size="3x" />
				</div>
			</label>
			<ul
				tabIndex={0}
				className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
			>
				<li>
					<Link to="/sign_up">Login</Link>
				</li>
				<li>
					<Link to="/sign_in">Login</Link>
				</li>
			</ul>
		</div>
	);
}

export default NotSignedInIcon;
