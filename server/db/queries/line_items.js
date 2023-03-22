const db = require("../connection");

const createLintItem = (orderId, productId) => {
	const queryTemplate = `
    INSERT INTO line_items (order_id, product_id)
    VALUES ($1, $2)
    RETURNING *
  `;
	const queryParams = [orderId, productId];

	return db
		.query(queryTemplate, queryParams)
		.then((res) => {
			return res.rows[0];
		})
		.catch((err) => console.error(err.message));
};

module.exports = {
	createLintItem,
};
