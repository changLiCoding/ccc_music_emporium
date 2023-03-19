const express = require("express");
const router = express.Router();

const { getProductsByCategoryName } = require("../db/queries/categories");
const {
	getProductsBySubCategoryName,
} = require("../db/queries/sub_categories");

router.get("/:name/sub_categories/:sub_name", (req, res) => {
	const subCategoryName = req.params.sub_name;
	getProductsBySubCategoryName(subCategoryName)
		.then((products) => res.status(200).json({ products }))
		.catch((err) => {
			res.status(500).json({ error: err.message });
		});
});
router.get("/:name", (req, res) => {
	const categoryName = req.params.name;
	getProductsByCategoryName(categoryName)
		.then((products) => res.status(200).json({ products }))
		.catch((err) => {
			res.status(500).json({ error: err.message });
		});
});

module.exports = router;
