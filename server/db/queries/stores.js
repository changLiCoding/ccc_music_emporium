const db = require("../connection");

const getAllStores = () => {
	const queryTemplate = `
		SELECT id, name, location, longitude, latitude FROM stores
  `;

	return db
		.query(queryTemplate, [])
		.then((results) => results.rows)
		.catch((err) => console.error(err));
};

module.exports = {
	getAllStores,
};
