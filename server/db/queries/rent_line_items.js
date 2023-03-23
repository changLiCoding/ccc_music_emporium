const db = require("../connection");

const createRentLineItem = (
	orderId,
	productId,
	startDate,
	endDate,
	daysRent
) => {
	const queryTemplate = `
    INSERT INTO rent_line_items (order_id, product_id, rent_start, rent_end, days_rent)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *
  `;
	const queryParams = [orderId, productId, startDate, endDate, daysRent];

	return db
		.query(queryTemplate, queryParams)
		.then((res) => {
			return res.rows[0];
		})
		.catch((err) => console.error(err.message));
};

module.exports = {
	createRentLineItem,
};
