const db = require("../config");

function get() {
	return db("tasks");
}

function getById(id) {
	return db("tasks").where("id", id).first();
}

function add(task) {
	return db("task")
		.insert(task)
		.then((id) => {
			return getById(id[0]);
		});
}

module.exports = {
	get,
	getById,
	add
};
