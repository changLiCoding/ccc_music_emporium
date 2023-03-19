require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const cookieSession = require("cookie-session");

const app = express();
const PORT = process.env.PORT || 8081;
const { getAllCategories } = require("./db/queries/categories");

// Middleware configuration
// Enable CORS for all origins
app.use(cors());
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

app.use(morgan("dev"));
app.use(
	cookieSession({
		name: "session",
		keys: [process.env.COOKIE_SESSION_SECRET],
	})
);
///////////////////////////////////////////////////////////////////////////////////////////////////
//               ROUTER MOUNTING
///////////////////////////////////////////////////////////////////////////////////////////////////

const apiUsersRoutes = require("./routes/apiUsersRoutes");
const apiCategoriesRoutes = require("./routes/apiCategoriesRoutes");
const apiCheckoutRoutes = require("./routes/apiCheckoutRoutes");
///////////////////////////////////////////////////////////////////////////////////////////////////
//               HOME PAGE ROUTING
///////////////////////////////////////////////////////////////////////////////////////////////////

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// Note: Endpoints that return data (eg. JSON) usually start with `/api`

app.use("/api/categories", apiCategoriesRoutes);
app.use("/api/checkout", apiCheckoutRoutes);
app.use("/api/users", apiUsersRoutes);

// HOME API ROUTE FOR RETURN ALL CATEGORIES NAMES
app.get("/api", (req, res) => {
	getAllCategories()
		.then((categories) => res.status(200).json({ categories }))
		.catch((err) => {
			res.status(500).json({ error: err.message });
		});
});
///////////////////////////////////////////////////////////////////////////////////////////////////
//               ERROR HANDLER
///////////////////////////////////////////////////////////////////////////////////////////////////
app.all("*", (req, res) => {
	res.status(404).json({ msg: "Route 404 Not Found" });
});

app.listen(PORT, () => {
	console.log(`Express app server listening on port ${PORT}`);
});
