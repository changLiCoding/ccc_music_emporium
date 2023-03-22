import { createContext } from "react";

import useHomeCategories from "../hooks/useHomeCategories";
import categoryNamesGenerator from "../helpers/categoryNamesGenerator";

import subCategoryNamesGenerator from "../helpers/subCategoryNamesGenerator";

export const CategoryNameContext = createContext();
export const SubCategoryNameContext = createContext();

export function CategoryNamesProvider(props) {
	const { categories } = useHomeCategories();
	const categoryNames = categoryNamesGenerator(categories.categories);
	const subCategoryNames = subCategoryNamesGenerator(categories.categories);

	return (
		<CategoryNameContext.Provider value={{ categoryNames }}>
			<SubCategoryNameContext.Provider value={{ subCategoryNames }}>
				{props.children}
			</SubCategoryNameContext.Provider>
		</CategoryNameContext.Provider>
	);
}
