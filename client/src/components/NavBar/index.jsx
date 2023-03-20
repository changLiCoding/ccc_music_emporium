import React from "react";

// import Logo from "./Logo";
// import NavLinks from "./NavLinks";
// import Dropdown from "./Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAstronaut } from "@fortawesome/free-solid-svg-icons";
import { faGuitar } from "@fortawesome/free-solid-svg-icons";
import { faDrum } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function NavBar(props) {
	const { categories } = props;

	return (
		// <nav className="bg-coffee-dark py-4">
		// 	<div className="max-w-7xl mx-auto px-4">
		// 		<Logo />
		// 		<NavLinks categories={categories} />

		// 		<Dropdown />
		// 	</div>
		// </nav>

		<div className="navbar h-24 bg-primary border-solid border-2 border-black">
			<div className="flex-1 navbar-start">
				<FontAwesomeIcon icon={faGuitar} size="2x" />
				<Link to="/" className="btn btn-ghost normal-case text-2xl">
					CCC MUSIC EMPORIUM
				</Link>
				<FontAwesomeIcon icon={faDrum} size={"2x"} />
			</div>
			<div className="navbar-center">
				<ul className="menu menu-horizontal px-5 ml-20 text-xl">
					<li>
          <Link to="/">
					Shop
				</Link>
					</li>
					<li>
						<a>About Us</a>
					</li>
					<li>
						<a>Contact</a>
					</li>
				</ul>
			</div>
			<div className="flex-none">
				<div className="dropdown dropdown-end mr-4">
					<label tabIndex={0} className="btn btn-ghost btn-circle">
						<div className="indicator">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-9 w-9"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
								/>
							</svg>
							<span className="badge badge-sm indicator-item">8</span>
						</div>
					</label>
					<div
						tabIndex={0}
						className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
					>
						<div className="card-body">
							<span className="font-bold text-lg">8 Items</span>
							<span className="text-info">Subtotal: $999</span>
							<div className="card-actions">
								<button className="btn btn-primary btn-block">View cart</button>
							</div>
						</div>
					</div>
				</div>
				<div className="dropdown dropdown-end mr-3">
					<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
						<div className="w-10 rounded-full">
							<FontAwesomeIcon icon={faUserAstronaut} size="3x" />
						</div>
					</label>
					<ul
						tabIndex={0}
						className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
					>
						<li>
							<a className="justify-between">
								Profile
								<span className="badge">New</span>
							</a>
						</li>
						<li>
							<a>Settings</a>
						</li>
						<li>
							<a>Logout</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
