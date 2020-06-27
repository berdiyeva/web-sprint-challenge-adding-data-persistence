const express = require("express");
const Project = require("../models/project");
const project = require("../models/project");

const router = express.Router();

router.get("/", async (req, res, next) => {
	try {
		const projects = await Project.get();
		res.json(projects);
	} catch (err) {
		next(err);
	}
});

router.get("/:id", async (req, res, next) => {
	try {
		const project = await Project.getById(req.params.id);
		if (!project) {
			return res.status(404).json({
				message: "The project not found.",
			});
		}
		res.json(project);
	} catch (err) {
		next(err);
	}
});

router.post("/", async (req, res, next) => {
	try {
		// const pojectData = req.body;
		const newProject = await Project.add(req.body);
		res.json(newProject);
	} catch (err) {
		next(err);
	}
});

router.get("/:id/resources", async (req, res, next) => {
	try {
		const resource = await Project.getResourceByProject(id);
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

module.exports = router;
