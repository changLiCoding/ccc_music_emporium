import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGuitar } from "@fortawesome/free-solid-svg-icons";
import { faDrum } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Logo() {
	return (
		<div className='flex-1 navbar-start'>
			<FontAwesomeIcon
				icon={faGuitar}
				size='2x'
				className='hidden md:inline lg:inline'
			/>
			<Link
				to='/'
				className='btn btn-ghost normal-case font-bold font-mono sm:text-lg md:text-xl lg:text-2xl 2xl:text-3xl'>
				CCC MUSIC EMPORIUM
			</Link>
			<FontAwesomeIcon
				icon={faDrum}
				size='2x'
				className='hidden xl:inline'
			/>
		</div>
	);
}

export default Logo;
