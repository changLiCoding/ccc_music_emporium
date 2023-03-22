import { createContext, useState } from "react";

export const ThemeContext = createContext({
	theme: "garden",
	toggleTheme: () => {},
});

export function ThemeProvider(props) {
	const [theme, setTheme] = useState("garden");

	function toggleTheme() {
		setTheme(theme === "garden" ? "luxury" : "garden");
	}

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{props.children}
		</ThemeContext.Provider>
	);
}
