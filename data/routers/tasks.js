const express = require("express");
const Tasks = require("../models/tasks");

const router = express.Router();

router.get("/", async (req, res, next) => {
	try {
		const tasks = await Tasks.get();
		res.json(tasks);
	} catch (err) {
		next(err);
	}
});

router.get("/:id", async (req, res, next) => {
	try {
		const task = await Tasks.getById(req.params.id);
		if (!task) {
			return res.status(404).json({
				message: "The task not found.",
			});
		}
		res.json(task);
	} catch (err) {
		next(err);
	}
});

module.exports = router;
