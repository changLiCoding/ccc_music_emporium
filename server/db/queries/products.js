const db = require("../connection");

const updateProductStockByModel = (product, updatedType) => {
	const queryTemplateIncrement = `
    UPDATE products
    SET stock_quantity = stock_quantity + 1
    WHERE model = $1
    RETURNING *
  `;
	const queryTemplateDecrement = `
    UPDATE products
    SET stock_quantity = stock_quantity - 1
    WHERE model = $1
    RETURNING *
  `;
	const queryParams = [product.model];
	console.log("Product to update in server:", product);
	return updatedType === "increment"
		? db
				.query(queryTemplateIncrement, queryParams)
				.then((res) => {
					return res.rows;
				})
				.catch((err) => console.error(err.message))
		: db
				.query(queryTemplateDecrement, queryParams)
				.then((res) => {
					return res.rows;
				})
				.catch((err) => console.error(err.message));
};

const getAllProducts = () => {
	const queryTemplate = `
    SELECT make, model, image_url, description, rent_rate_in_cents, price_in_cents, products.id as id, categories.name as category_name, sub_categories.name as sub_category_name, stock_quantity
		FROM categories
		JOIN sub_categories ON sub_categories.category_id = categories.id
    JOIN products ON products.sub_category_id = sub_categories.id
  `;

	return db
		.query(queryTemplate, [])
		.then((res) => res.rows)
		.catch((err) => console.error(err.message));
};

module.exports = {
	updateProductStockByModel,
	getAllProducts,
};
