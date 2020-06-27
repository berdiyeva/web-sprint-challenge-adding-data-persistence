const db = require("../config");

function get() {
	return db("resources");
}

function getById(id) {
	return db("resources").where("id", id).first();
}

function add(resource) {
	return db("resource")
		.insert(resource)
		.then((id) => {
			return getById(id[0]);
		});
}

module.exports = {
	get,
	getById,
	add,
};
