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
		<div className='navbar h-24 bg-primary border-solid border-2 border-black'>
			<Logo />

			<PageLinks />
			<div className='flex-none'>
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
