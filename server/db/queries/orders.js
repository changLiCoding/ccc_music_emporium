const db = require("../connection");

const postOrderAfterPay = (userId, totalInCents, storeId = 1) => {
	const queryTemplate = `
    INSERT INTO orders (user_id, store_id, total_in_cents)
    VALUES ($1, $2, $3)
    RETURNING *
  `;
	const queryParams = [userId, storeId, totalInCents];

	return db
		.query(queryTemplate, queryParams)
		.then((res) => {
			console.log(res.rows[0]);
			return res.rows;
		})
		.catch((err) => console.error(err.message));
};

module.exports = {
	postOrderAfterPay,
};
