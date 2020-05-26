const supertest = require("supertest")
const server = require("../index")
const db = require("../database/dbConfig")
const auth = require("../auth/auth-router");

beforeEach(async () => {
    await db.seed.run()
})

afterAll(async () => {
    await db.destroy()
})

describe("userInfo integration tests", () => {
    it("Get userinfo", async() => {
        const data = {username: "trevor", password: "4155478713"}
        const res = await supertest(server).post("/api/auth/login").send(data)
        const res = await supertest(server).get("/api/user/1")
        expect(res.statusCode).toBe(200)
    })

    it("Get /userInfo/:id", async() => {
        const data = {username: "trevor", password: "4155478713"}
        const res = await supertest(server).post("/api/auth/login").send(data)
        const res = await supertest(server).get("/api/user/100")
        expect(res.statusCode).toBe(404)
    })
})