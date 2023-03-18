import "./App.css";

import useCategories from "./hooks/useCategories";

function App() {
	let { categories } = useCategories();
	console.log(categories);
	console.log(categories.categories);
	categories = categories.categories;
	return (
		<div>
			{categories &&
				categories.map((category) => (
					<article key={category.id}> {category.name} </article>
				))}
		</div>
	);
}

export default App;
