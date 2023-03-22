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
		const { user_id } = req.cookies;
		const { products } = req.body;

		const lineItems = products.map((product) => ({
			product_id: product.id,
			price_data: {
				currency: "usd",
				product_data: {
					name: `${product.make} ${product.model}`,
				},
				unit_amount: product.price_in_cents,
			},
			quantity: 1,
		}));
		const orderInfo = await postOrderAfterPay(user_id, amount_in_cents);
		console.log(orderInfo);
		console.log(lineItems);
		const amount_in_cents = products.reduce(
			(prev, curv) => prev + curv.price_in_cents.parseInt(),
			0
		);
		console.log(amount_in_cents);
		const session = await stripe.checkout.sessions.create({
			payment_method_types: ["card"],
			line_items: lineItems,
			mode: "payment",
			success_url: "https://example.com/success",
			cancel_url: "https://example.com/cancel",
			metadata: {
				user_id: user_id,
			},
		});
		res.status(200).json({ sessionId: session.id, order: orderInfo });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

module.exports = router;
