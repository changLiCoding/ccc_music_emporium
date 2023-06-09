const db = require("../connection");

// GET ALL PRODUCTS FROM CATEGORIES NAME

const getAllCategories = () => {
	const queryTemplate = `
		SELECT categories.id as category_id, sub_categories.id as sub_category_id, categories.name as category_name, sub_categories.name as sub_category_name from categories JOIN sub_categories ON sub_categories.category_id = categories.id
  `;

	return db
		.query(queryTemplate, [])
		.then((results) => results.rows)
		.catch((err) => console.error(err));
};

const getProductsByCategoryName = (categoryName) => {
	const queryTemplate = `
    SELECT make, model, image_url, description, rent_rate_in_cents, price_in_cents, products.id as id, categories.name as category_name, sub_categories.name as sub_category_name, stock_quantity
    FROM categories
    JOIN sub_categories ON sub_categories.category_id = categories.id
    JOIN products ON products.sub_category_id = sub_categories.id
    WHERE categories.name = $1

  `;

	const queryParams = [categoryName];

	return db
		.query(queryTemplate, queryParams)
		.then((res) => res.rows)
		.catch((err) => console.error(err.message));
};

module.exports = {
	getAllCategories,
	getProductsByCategoryName,
};
