import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

export default function ThemeToggle() {
	const { theme, toggleTheme } = useContext(ThemeContext);
	const toTheme = theme === "garden" ? "Luxury" : "Garden";
	useEffect(() => {
		document.documentElement.setAttribute("data-theme", theme);
	}, [theme]);
	return (
		<div className='form-control w-30'>
			<label className='cursor-pointer label'>
				<span className='label-text'>{toTheme} Theme</span>
				<input
					onChange={toggleTheme}
					type='checkbox'
					className='toggle toggle-primary'
					// checked
				/>
			</label>
		</div>
	);
}
