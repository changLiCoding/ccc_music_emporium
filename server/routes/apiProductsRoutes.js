const express = require("express");
const { getAllProducts } = require("../db/queries/products");
const router = express.Router();

router.get("/", (req, res) => {
	getAllProducts()
		.then((products) => {
			return res.status(200).json({ products });
		})
		.catch((err) => {
			res.status(500).json({ error: err.message });
		});
});

module.exports = router;
