const db = require("../connection");

const updateProductStockByModel = (product) => {
	const queryTemplate = `
    UPDATE products
    SET stock_quantity = ${product.stock_quantity}
    WHERE model = ${product.model}
    RETURNING *
  `;
	const queryParams = [product];

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
