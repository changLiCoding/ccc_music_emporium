const express = require("express");
const { postOrderAfterPay } = require("../db/queries/orders");
const router = express.Router();

const yourSuperSecretKey = process.env.STRIPE_SECRET_KEY;
const stripe = require("stripe")(yourSuperSecretKey);

router.get("/", (req, res) => {
	res.status(200).json({ msg: "SHOW ME YOUR MONEY!" });
});

router.post("/", async (req, res) => {
	try {
		const userID = req.session.user_id;

		const amount = req.body.amount;
		const currency = req.body.currency;
		const charge = await stripe.charge.create({
			amount: amount,
			currency: currency,
			source: req.body.token,
		});

		const orderInfo = await postOrderAfterPay(userID, amount);
		console.log(orderInfo);
		res.status(200).json({ success: true, order: orderInfo });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

module.exports = router;
