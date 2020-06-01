const db = require("../database/dbConfig")

async function add(user) {

	const [id] = await db("userInfo").insert(user)
	return findById(id)
}

function find() {
    return db("userInfo").select("date", "mood_id")
}

function findBy(filter) {
	return db("userInfo")
		.select("date", "mood_id")
		.where(filter)
}

function findById(id) {
    return db("userInfo")
		.select("date", "mood_id")
		.where({ id })
		.first()
}

module.exports = {
	add,
	find,
	findBy,
	findById,
}