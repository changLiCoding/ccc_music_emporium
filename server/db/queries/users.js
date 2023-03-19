const db = require("../connection");

const getUserByEmail = (email) => {
	const emailQuery = `
    SELECT *
    FROM users
    WHERE users.email = $1
  ;
  `;
	const sqlParams = [email];
	return db
		.query(emailQuery, sqlParams)
		.then((res) => {
			const user = res.rows[0];
			return user;
		})
		.catch((err) => console.error(err.message));
};

const getUserByID = (id) => {
	const idQuery = `
    SELECT *
    FROM users
    WHERE users.id = $1
  ;
  `;
	const sqlParams = [id];
	return db
		.query(idQuery, sqlParams)
		.then((res) => {
			const user = res.rows[0];
			return user;
		})
		.catch((err) => console.error(err.message));
};

// CREATE NEW USER BY REGISTER
const createNewUser = (user) => {
	const queryTemplate = `
    INSERT INTO users (name, email, password, first_name, last_name)
    VALUES
    ($1, $2, $3, $4, $5)
    RETURNING *
  ;
  `;

	const { name, email, password, firstName, lastName } = user;

	const sqlParams = [name, email, password, firstName, lastName];

	return db
		.query(queryTemplate, sqlParams)
		.then((res) => {
			console.log(res.rows[0]);
			return res.rows[0];
		})
		.catch((err) => console.error(err.message));
};

module.exports = {
	getUserByEmail,
	getUserByID,
	createNewUser,
};
