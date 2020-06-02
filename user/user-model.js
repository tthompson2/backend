const db = require("../database/dbConfig")

async function add(user) {

	const [id] = await db("user").insert(user)
	return findById(id)
}

function find() {
	return db("user").select("id", "username", "name", "age")
}

function findBy(filter) {
	return db("user")
		.select("id", "username", "password", "name", "age")
		.where(filter)
}

function findById(id) {
	return db("user")
		.select("id", "username", "name", "age")
		.where({ id })
		.first()
}

async function remove(id) {
	return await db("user").where({id}).delete()
}

async function putData(id, input) {
	return await db("user").where({id}).update(input)
}
 
module.exports = {
	add,
	find,
	findBy,
	findById,
	remove,
	putData
}