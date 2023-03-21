import React from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import NotSignedInIcon from "./NotSignedInIcon";
import SignedInIcon from "./SignedInIcon";
import CartIcon from "./CartIcon";
import PageLinks from "./PageLinks";
import Logo from "./Logo";

export default function NavBar() {
	const [cookies, setCookie, removeCookie] = useCookies([
		"user_id",
		"user_name",
	]);

	const navigate = useNavigate();

	const handleLogout = (e) => {
		e.preventDefault();

		removeCookie("user_name");
		removeCookie("user_id");
		navigate("/");
	};

	return (
		<div className='navbar h-24 bg-primary border-solid border-2 border-black'>
			<Logo />
			<PageLinks />
			<div className='flex-none'>
				<CartIcon />
				{!cookies.user_name && <NotSignedInIcon />}
				{cookies.user_name && (
					<SignedInIcon
						username={cookies.user_name}
						handleLogout={handleLogout}
					/>
				)}
			</div>
		</div>
	);
}
