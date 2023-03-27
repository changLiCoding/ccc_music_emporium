import React from "react";
// import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import NotSignedInIcon from "./NotSignedInIcon";
import SignedInIcon from "./SignedInIcon";
import CartIcon from "./CartIcon";
import PageLinks from "./PageLinks";
import Logo from "./Logo";

export default function NavBar() {
	// const [cookies, setCookie, removeCookie] = useCookies([
	// 	"user_id",
	// 	"user_name",
	// ]);
	// const user_id = localStorage.getItem("user_id");
	const user_name = localStorage.getItem("user_name");

	const navigate = useNavigate();

	const handleLogout = (e) => {
		e.preventDefault();

		localStorage.removeItem("user_name");
		localStorage.removeItem("user_id");
		localStorage.removeItem("user");
		navigate("/");
	};

	return (
		<div className='navbar h-24 bg-primary border-solid border-2 border-black '>
			<div className='navbar-start'>
				<div className='dropdown'>
					<label
						tabIndex={0}
						className='btn btn-ghost lg:hidden'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-5 w-5'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M4 6h16M4 12h8m-8 6h16'
							/>
						</svg>
					</label>
					<ul className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box'>
						<PageLinks />
					</ul>
				</div>
				<Logo />
			</div>
			<div className='navbar-center hidden lg:flex'>
				<ul className='menu menu-horizontal px-1'>
					<PageLinks />
				</ul>
			</div>
			<div className='navbar-end'>
				<CartIcon />
				{!user_name && <NotSignedInIcon />}
				{user_name && (
					<SignedInIcon
						username={user_name}
						handleLogout={handleLogout}
					/>
				)}
			</div>
		</div>
	);
}
