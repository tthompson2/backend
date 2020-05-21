const bcrypt = require("bcryptjs")
const db = require("../database/dbconfig")

async function add(user) {
	// hash the password with a time complexity of 14

	const [id] = await db("user").insert(user)
	return findById(id)
}

function find() {
	return db("user").select("id", "username")
}

function findBy(filter) {
	return db("user")
		.select("id", "username", "password")
		.where(filter)
}

function findById(id) {
	return db("user")
		.select("id", "username")
		.where({ id })
		.first()
}

module.exports = {
	add,
	find,
	findBy,
	findById,
}