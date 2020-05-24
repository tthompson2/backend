const supertest = require("supertest");
const server = require("../index");
const db = require("../database/dbConfig");

beforeEach(async () => {
    await db.seed.run()
})

afterAll(async () => {
    await db.destroy()
})

describe("user endpoint unit tests", () => {
    it("Get /register ", async () => {
        const res = await supertest(server).get("/api/auth/register")
        expect(res.statusCode).toBe(400);
    })

    it("Get /login", async () => {
        const res = await supertest(server).get("/api/auth/login")
        expect(res.statusCode).toBe(400);
    })
})

describe("registration endpoint testing", () => {

    beforeEach(async () => {
        await db("user").truncate()
    })

    it("POST register add new user", async () => {
        const data = { username: "trev108", password: "8888888" }
        const res = await supertest(server).post("/api/auth/register").send(data)
        expect(res.status).toBe(201);
    })

})

describe("login endpoint testing", () => {

    beforeEach(async () => {
        await db("user").truncate();
    })

    it("POST /login failure", async () => {
        const data = { username: "trev51", password: "123456" }
        const res = await supertest(server).post("/api/auth/login").send(data);
        expect(res.statusCode).toBe(401);
    })

    it("POST successful login", async () => {
        try {
            const data = { username: "trev4", password: "4155478713" }
            await supertest(server).post("/api/auth/register").send(data)
            const res = await (await supertest(server).post("/api/auth/login")).send(data);
            expect(res.statusCode).toBe(200)
        } catch (err) {
            throw (err)
        }
    })
})