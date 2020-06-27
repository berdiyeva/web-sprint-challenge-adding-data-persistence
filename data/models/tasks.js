const db = require("../config");

function get() {
	return db("tasks");
}

function getById(id) {
	return db("tasks").where("id", id).first();
}

module.exports = {
	get,
	getById,
};
