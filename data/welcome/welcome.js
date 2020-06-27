const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
	res.json({
		message: "Welcome to web sprint challenge!",
	});
});

module.exports = router;