const bcrypt = require("bcryptjs")
const db = require("../database/dbConfig")

async function add(user) {

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