const express = require("express");
const Resources = require("../models/resources");

const router = express.Router();

router.get("/", async (req, res, next) => {
	try {
		const resources = await Resources.get();
		res.json(resources);
	} catch (err) {
		next(err);
	}
});

router.get("/:id", async (req, res, next) => {
	try {
		const resource = await Resources.getById(req.params.id);
		if (!resource) {
			return res.status(404).json({
				message: "The resource not found.",
			});
		}
		res.json(resource);
	} catch (err) {
		next(err);
	}
});

router.post("/", async (req, res, next) => {
	try {
		// const pojectData = req.body;
		const newResource = await Resources.add(req.body);
		res.json(newResource);
	} catch (err) {
		next(err);
	}
});

module.exports = router;
