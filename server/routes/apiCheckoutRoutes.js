const express = require("express");
const { createLintItem } = require("../db/queries/line_items");
const { createOrderAfterPay } = require("../db/queries/orders");
const router = express.Router();

const yourSuperSecretKey = process.env.STRIPE_SECRET_KEY;
const stripe = require("stripe")(yourSuperSecretKey);

router.get("/", (req, res) => {
	res.status(200).json({ msg: "SHOW ME YOUR MONEY!" });
});

router.post("/", async (req, res) => {
	try {
		const { user_id } = req.cookies;
		const { products, amount_in_cents } = req.body;

		const orderInfo = await createOrderAfterPay(user_id, amount_in_cents);

		await products.forEach((product) => {
			const order_id = orderInfo[0].id;
			createLintItem(order_id, product.id);
		});

		// Create a payment intent with the total amount and currency
		const paymentIntent = await stripe.paymentIntents.create({
			amount: orderInfo[0].total_in_cents,
			currency: "usd",
			receipt_id: orderInfo.user_id, //May want to change this to email for sending order infomation
		});

		res.status(200).json({ clientSecret: paymentIntent, order: orderInfo });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

module.exports = router;
