const jwt = require("jsonwebtoken");

// middleware to verify JWT token
const jwtVerification = function (req, res, next) {
	if (!req.headers.authorization) {
		// handle no headers
		res.status(401).json({ error: "Token not found" });
		return;
	}
	// get token from header

	const [authType, token] = req.headers.authorization.split(" ");
	if (!token || authType !== "Bearer") {
		// unauthorized
		res.status(401).json({ error: "Token not found" });
		return;
	}

	try {
		// verify token
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		req.user = decoded;
		next();
	} catch (err) {
		// invalid token
		res.status(401).json({ error: "Invalid token" });
	}
};

module.exports = {
	jwtVerification,
};
