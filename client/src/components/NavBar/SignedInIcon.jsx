import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceGrinStars } from "@fortawesome/free-solid-svg-icons";

function SignedInIcon(props) {
	const { username, handleLogout } = props;

	return (
		<div className="dropdown dropdown-end mr-3">
			<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
				<div className="w-15 rounded">
					<img
						src={`https://robohash.org/${username}.png?set=set2`}
						alt="avatar"
					/>
				</div>
			</label>
			<ul
				tabIndex={0}
				className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
			>
				<li className="">
					<p>Logged in as: {username}</p>
				</li>
				<li>
					<Link to="/my_orders">View Order History</Link>
				</li>
				<li>
					<button className=" link" onClick={handleLogout}>
						Logout
					</button>
				</li>
			</ul>
		</div>
	);
}

export default SignedInIcon;
