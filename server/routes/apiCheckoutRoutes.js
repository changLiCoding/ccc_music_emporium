const express = require("express");
const { createLintItem } = require("../db/queries/line_items");
const { createOrderAfterPay } = require("../db/queries/orders");
const { createRentLineItem } = require("../db/queries/rent_line_items");
const { jwtVerification } = require("../middlewares/jwtVerification");
const router = express.Router();

const yourSuperSecretKey = process.env.STRIPE_SECRET_KEY;
const stripe = require("stripe")(yourSuperSecretKey);

router.get("/", (req, res) => {
	res.status(200).json({ msg: "SHOW ME YOUR MONEY!" });
});

router.post("/", jwtVerification, async (req, res) => {
	try {
		const { user_id, user_name } = req.query;
		const { products, amount_in_cents } = req.body;

		const orderInfo = await createOrderAfterPay(user_id, amount_in_cents);

		await products.forEach((product) => {
			const order_id = orderInfo[0].id;
			console.log("Days rent: ", product);
			product.daysRent
				? createRentLineItem(
						order_id,
						product.id,
						product.startAt,
						product.endAt,
						product.daysRent
				  )
				: createLintItem(order_id, product.id);
		});

		// const lineItems = products.map((product) => ({
		// 	price_data: {
		// 		currency: "usd",
		// 		product_data: {
		// 			name: `${product.make} ${product.model}`,
		// 		},
		// 		unit_amount: product.price_in_cents,
		// 	},
		// 	quantity: 1,
		// }));
		// Create a payment intent with the total amount and currency
		const paymentIntent = await stripe.paymentIntents.create({
			amount: orderInfo[0].total_in_cents,
			currency: "usd",
			receipt_id: orderInfo.user_id, //May want to change this to email for sending order infomation
		});

		res.status(200).json({
			userName: user_name,
			clientSecret: paymentIntent,
			order: orderInfo[0],
		});
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

module.exports = router;
