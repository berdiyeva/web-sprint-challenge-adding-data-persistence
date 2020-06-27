const db = require("../config");

function get() {
	return db("project");
}

function getById(id) {
	return db("project").where("id", id).first();
}

module.exports = {
	get,
	getById,
};
