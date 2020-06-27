const db = require("../config");

function get() {
	return db("resources");
}

function getById(id) {
	return db("resources").where("id", id).first();
}

module.exports = {
	get,
	getById,
};
