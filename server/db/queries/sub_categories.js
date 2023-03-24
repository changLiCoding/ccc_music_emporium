const db = require("../connection");

// GET ALL PRODUCTS FROM SUB_CATEGORIES NAME
const getProductsBySubCategoryName = (subCategoryName) => {
	const queryTemplate = `
    SELECT make, model, image_url, description, rent_rate_in_cents, price_in_cents, products.id as id, categories.name as category_name, sub_categories.name as sub_category_name, stock_quantity
		FROM categories
		JOIN sub_categories ON sub_categories.category_id = categories.id
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
