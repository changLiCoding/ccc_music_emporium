const express = require("express");
const router = express.Router();
const { getAllStores } = require("../db/queries/stores");

// STORE API ROUTE FOR RETURN ALL STORES
router.get("/", (req, res) => {
	getAllStores()
		.then((stores) => res.status(200).json({ stores: stores }))
		.catch((err) => {
			res.status(500).json({ error: err.message });
		});
});
module.exports = router;
