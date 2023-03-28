const db = require("../connection");

const createOrderAfterPay = (userId, totalInCents, storeId = 1) => {
	const queryTemplate = `
    INSERT INTO orders (user_id, store_id, total_in_cents)
    VALUES ($1, $2, $3)
    RETURNING *
  `;
	const queryParams = [userId, storeId, totalInCents];

	return db
		.query(queryTemplate, queryParams)
		.then((res) => {
			return res.rows;
		})
		.catch((err) => console.error(err.message));
};

const GetPurchasesByUser = (userId) => {
	const queryTemplate = `
    SELECT line_items.*, products.make as make, products.model as model, products.price_in_cents as price, products.image_url as image, orders.user_id as user_id, orders.created_at as purchase_date
    FROM line_items
    JOIN orders ON orders.id = order_id
    JOIN products ON product_id = products.id
    WHERE orders.user_id = $1;
  `;
	const queryParams = [userId];

	return db
		.query(queryTemplate, queryParams)
		.then((res) => {
			return res.rows;
		})
		.catch((err) => console.error(err.message));
};

const GetRentalsByUser = (userId) => {
	const queryTemplate = `
    SELECT rent_line_items.*, products.make as make, products.model as model, products.rent_rate_in_cents as price_per_day, products.image_url as image, orders.user_id as user_id
    FROM rent_line_items
    JOIN orders ON orders.id = order_id
    JOIN products ON product_id = products.id
    WHERE orders.user_id = $1;
  `;
	const queryParams = [userId];

	return db
		.query(queryTemplate, queryParams)
		.then((res) => {
			return res.rows;
		})
		.catch((err) => console.error(err.message));
};

module.exports = {
	createOrderAfterPay,
	GetPurchasesByUser,
	GetRentalsByUser,
};
