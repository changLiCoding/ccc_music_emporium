const db = require("../connection");

// GET ALL PRODUCTS FROM CATEGORIES NAME
const getProductsByCategoryName = (categoryName) => {
	const queryTemplate = `
    SELECT make, model, image_url, description, price_in_cents
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
	getProductsByCategoryName,
};
