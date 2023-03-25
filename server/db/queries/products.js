const db = require("../connection");

const updateProductStockByModel = (product) => {
	const queryTemplate = `
    UPDATE products
    SET stock_quantity = $1
    WHERE model = $2
    RETURNING *
  `;
	const queryParams = [product.stock_quantity, product.model];

	return db
		.query(queryTemplate, queryParams)
		.then((res) => {
			console.log(res.rows[0]);
			return res.rows;
		})
		.catch((err) => console.error(err.message));
};

module.exports = {
	updateProductStockByModel,
};
