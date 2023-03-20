export default function categoryNamesGenerator(categoriesArr) {
	const res = [];
	if (categoriesArr) {
		categoriesArr.forEach((subCategory) => {
			if (!res.includes(subCategory.category_name)) {
				res.push(subCategory.category_name);
			}
		});
	}
	return res;
}
