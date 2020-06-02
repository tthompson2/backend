const supertest = require("supertest")
const server = require("../index")
const db = require("../database/dbConfig")

beforeEach(async () => {
    await db.seed.run()
})

afterAll(async () => {
    await db.destroy()
})

describe("userInfo integration tests", () => {

    beforeEach(async () => {
        await db("userInfo").truncate();
    })    

    it("Get userinfo", async() => {
        const data = {username: "trevthom", password: "4155478713", name: "trevorT", age: 28}
        const res = await supertest(server).post("/api/auth/login").send(data)
        const get = await supertest(server).get("/api/userInfo/").set('Authorization', res.token)
        expect(get.statusCode).toBe(401)
    })

    it("Get failed /userInfo/:id", async() => {
        const data = {username: "trevor", password: "4155478713", name: "trevorT", age: 28}
        const res = await supertest(server).post("/api/auth/login").send(data)
        const get = await supertest(server).get("/api/userInfo/100").set('Authorization', res.token)
        expect(get.statusCode).toBe(401)
    })

    it("Get successful /userInfo/:id", async() => {
        const data = {username: "trevthom", password: "4155478713", name: "trevorT", age: 28}
        const res = await supertest(server).post("/api/auth/login").send(data)
        const get = await supertest(server).get("/api/userInfo/").set('Authorization', res.token)
        expect(get.statusCode).toBe(401);
    })
})
