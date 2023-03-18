const db = require("../connection");

// GET ALL PRODUCTS FROM SUB_CATEGORIES NAME
const getProductsBySubCategoryName = (subCategoryName) => {
	const queryTemplate = `
    SELECT make, model, image_url, description, price_in_cents
    FROM sub_categories
    JOIN products ON products.sub_category_id = sub_categories.id
    WHERE sub_categories.name = $1

  `;

	const queryParams = [subCategoryName];

	return db
		.query(queryTemplate, queryParams)
		.then((res) => res.rows)
		.catch((err) => console.error(err.message));
};

module.exports = {
	getProductsBySubCategoryName,
};
