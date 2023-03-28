const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");

const { jwtVerification } = require("../middlewares/jwtVerification");

// DATABASE QUERY
const { getUserByEmail, createNewUser } = require("../db/queries/users");
const {
	GetPurchasesByUser,
	GetRentalsByUser,
} = require("../db/queries/orders");

const router = express.Router();

// Sign up route
router.post(
	"/sign_up",
	[
		// Validate request body using express-validator
		body("email").isEmail().withMessage("Invalid email address"),
		body("firstName").not().isEmpty().withMessage("First name is required"),
		body("lastName").not().isEmpty().withMessage("Last name is required"),
		body("password")
			.isLength({ min: 6 })
			.withMessage("Password must be at least 6 characters long"),
		body("passwordConfirm").custom((value, { req }) => {
			if (value !== req.body.password) {
				throw new Error("Password confirmation does not match password");
			}
			return true;
		}),
	],
	async (req, res) => {
		// Check for validation errors and return error response if found
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { email, firstName, lastName, password } = req.body;

		try {
			// Check if user already exists
			const existingUser = await getUserByEmail(email);
			if (existingUser) {
				return res.status(409).json({
					message:
						"User already exists with this email address! Please try again.",
				});
			}

			// Hash password and create new user
			const hashedPassword = await bcrypt.hash(password, 10);
			const newUser = await createNewUser({
				email,
				firstName,
				lastName,
				password: hashedPassword,
			});
			delete newUser.password;
			console.log(newUser);
			const token = jwt.sign(
				{ id: newUser.id, user_name: newUser.first_name },
				process.env.JWT_SECRET
			);
			return res.status(201).json({ message: "User authenticated", token });
		} catch (err) {
			console.error(err);
			return res.status(500).json({ message: "Server error" });
		}
	}
);

// Validation middleware for user sign in
const validateSignIn = [
	body("email").isEmail().withMessage("Invalid email"),
	body("password")
		.isLength({ min: 6 })
		.withMessage("Password must be at least 6 characters"),
];

// Sign in route
router.post("/sign_in", validateSignIn, async (req, res) => {
	const errors = validationResult(req);
	// Check validation errors
	if (!errors.isEmpty()) {
		return res.status(422).json({ errors: errors.array() });
	}

	const { email, password } = req.body;

	try {
		const user = await getUserByEmail(email);
		// Check if the user exists
		if (!user) {
			return res
				.status(401)
				.json({ message: "Invalid email or password! Please try again." });
		}
		// Check if user password is correct
		const passwordMatch = await bcrypt.compare(password, user.password);
		if (!passwordMatch) {
			return res
				.status(401)
				.json({ message: "Invalid email or password! Please try again." });
		}
		console.log(user);

		delete user.password;
		const token = jwt.sign(
			{ id: user.id, user_name: user.first_name },
			process.env.JWT_SECRET
		);
		return res.status(200).json({ message: "User authenticated", token });
	} catch (error) {
		console.error(error);
		return res
			.status(500)
			.json({ message: "Internal server error from server !!!!!!!!!" });
	}
});

// User Order History
router.get("/:user_id/my_purchases", jwtVerification, (req, res) => {
	const userId = req.params.user_id;
	GetPurchasesByUser(userId)
		.then((purchaseHistory) => res.status(200).json({ purchaseHistory }))
		.catch((err) => {
			res.status(500).json({ error: err.message });
		});
});

router.get("/:user_id/my_rentals", jwtVerification, (req, res) => {
	const userId = req.params.user_id;
	GetRentalsByUser(userId)
		.then((rentalHistory) => res.status(200).json({ rentalHistory }))
		.catch((err) => {
			res.status(500).json({ error: err.message });
		});
});

module.exports = router;
