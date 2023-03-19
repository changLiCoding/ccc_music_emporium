const express = require("express");
const bcrypt = require("bcryptjs");
const { body, validationResult } = require("express-validator");
const {
	getUserByEmail,
	getUserByID,
	createNewUser,
} = require("../db/queries/users");

const router = express.Router();

// Validation middleware for user sign up
const validateSignUp = [
	body("email").isEmail().withMessage("Invalid email"),
	body("password")
		.isLength({ min: 6 })
		.withMessage("Password must be at least 6 characters"),
	body("firstName")
		.isLength({ min: 2 })
		.withMessage("First name must be at least 2 characters"),
	body("lastName")
		.isLength({ min: 2 })
		.withMessage("Last name must be at least 2 characters"),
];

// Validation middleware for user sign in
const validateSignIn = [
	body("email").isEmail().withMessage("Invalid email"),
	body("password")
		.isLength({ min: 6 })
		.withMessage("Password must be at least 6 characters"),
];

// Sign up route
router.post("/sign_up", validateSignUp, async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(422).json({ errors: errors.array() });
	}

	const { email, firstName, lastName, password } = req.body;

	try {
		const userExists = await getUserByEmail(email);
		if (userExists) {
			return res
				.status(409)
				.json({ message: "User with this email already exists" });
		}

		const salt = await bcrypt.genSalt();
		const hashedPassword = await bcrypt.hash(password, salt);

		const newUser = await createNewUser({
			email,
			firstName,
			lastName,
			password: hashedPassword,
		});

		return res.status(201).json({ message: "User created", user: newUser });
	} catch (error) {
		console.error(error);
		return res.status(500).json({ message: "Internal server error" });
	}
});

// Sign in route
router.post("/sign_in", validateSignIn, async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(422).json({ errors: errors.array() });
	}

	const { email, password } = req.body;

	try {
		const user = await getUserByEmail(email);
		if (!user) {
			return res.status(401).json({ message: "Invalid email or password" });
		}

		const passwordMatch = await bcrypt.compare(password, user.password);
		if (!passwordMatch) {
			return res.status(401).json({ message: "Invalid email or password" });
		}

		return res.status(200).json({ message: "User authenticated", user });
	} catch (error) {
		console.error(error);
		return res.status(500).json({ message: "Internal server error" });
	}
});

module.exports = router;
