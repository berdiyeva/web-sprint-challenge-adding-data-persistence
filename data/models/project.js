const db = require("../config");

function get() {
	return db("project");
}

function getById(id) {
	return db("project").where("id", id).first();
}

function add(project) {
	return db("project")
		.insert(project)
		.then((id) => {
			return getById(id[0]);
		});
}

function getResourceByProject(id) {
	return db("project as p")
		.where("p.id", id)
		.join("resources as r", "r.project_id", "p.id")
		.select("r.name", "r.description");
}

module.exports = {
	get,
	getById,
	add,
	getResourceByProject,
};
