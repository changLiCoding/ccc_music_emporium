export default function subCategoryNamesGenerator(subCategorieArr) {
	const res = {};
	if (subCategorieArr) {
		subCategorieArr.forEach((subCategory) => {
			if (!res[subCategory.category_name]) {
				res[subCategory.category_name] = [];
				res[subCategory.category_name].push(subCategory.sub_category_name);
			} else {
				res[subCategory.category_name].push(subCategory.sub_category_name);
			}
		});
	}
	return res;
}
