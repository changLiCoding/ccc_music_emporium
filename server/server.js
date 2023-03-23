require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
// const cookieSession = require("cookie-session");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = process.env.PORT || 8081;

// Middleware configuration
// Enable CORS for all origins
app.use(cors());
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

app.use(cookieParser());
app.use(morgan("dev"));
// app.use(
// 	cookieSession({
// 		name: "session",
// 		keys: [process.env.COOKIE_SESSION_SECRET],
// 	})
// );
///////////////////////////////////////////////////////////////////////////////////////////////////
//               ROUTER MOUNTING
///////////////////////////////////////////////////////////////////////////////////////////////////

const apiUsersRoutes = require("./routes/apiUsersRoutes");
const apiCategoriesRoutes = require("./routes/apiCategoriesRoutes");
const apiCheckoutRoutes = require("./routes/apiCheckoutRoutes");
const apiHomeRoutes = require("./routes/apiHomeRoutes");
///////////////////////////////////////////////////////////////////////////////////////////////////
//               HOME PAGE ROUTING
///////////////////////////////////////////////////////////////////////////////////////////////////

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// Note: Endpoints that return data (eg. JSON) usually start with `/api`

app.use("/api/categories", apiCategoriesRoutes);
app.use("/api/checkout", apiCheckoutRoutes);
app.use("/api/users", apiUsersRoutes);
app.use("/api", apiHomeRoutes);

///////////////////////////////////////////////////////////////////////////////////////////////////
//               ERROR HANDLER
///////////////////////////////////////////////////////////////////////////////////////////////////
app.all("*", (req, res) => {
	res.status(404).json({ msg: "Route 404 Not Found" });
});

app.listen(PORT, () => {
	console.log(`Express app server listening on port ${PORT}`);
});
