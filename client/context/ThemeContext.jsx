import { createContext, useState } from "react";

const ThemeContext = createContext({
	theme: "light",
	toggleTheme: () => {},
});

export function ThemeProvider(props) {
	const [theme, setTheme] = useState("light");

	function toggleTheme() {
		setTheme(theme === "light" ? "dark" : "light");
	}

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{props.children}
		</ThemeContext.Provider>
	);
}
