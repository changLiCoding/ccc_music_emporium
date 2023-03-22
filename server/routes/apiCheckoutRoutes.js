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

		const lineItems = products.map((product) => ({
			price_data: {
				currency: "usd",
				product_data: {
					name: `${product.make} ${product.model}`,
				},
				unit_amount: product.price_in_cents,
			},
			quantity: 1,
		}));
		console.log(lineItems);

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
