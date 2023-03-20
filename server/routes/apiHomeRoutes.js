const express = require("express");
const router = express.Router();

const { getAllCategories } = require("../db/queries/categories");

// HOME API ROUTE FOR RETURN ALL CATEGORIES NAMES
router.get("/", (req, res) => {
	getAllCategories()
		.then((categories) => res.status(200).json({ categories }))
		.catch((err) => {
			res.status(500).json({ error: err.message });
		});
});

module.exports = router;
