const supertest = require("supertest");
const server = require("../index");
const db = require("../database/dbConfig");

beforeEach(async () => {
    await db.seed.run()
})

afterAll(async () => {
    await db.destroy()
})

describe("/api/auth endpoint unit tests | Expected to fail without information being posted to them", () => {
    it("Get /register ", async () => {
        const res = await supertest(server).post("/api/auth/register")
        expect(res.statusCode).toBe(404);
    })

    it("Get /login", async () => {
        const res = await supertest(server).post("/api/auth/login")
        expect(res.statusCode).toBe(404);
    })

})

describe("/api/auth endpoint unit tests", () => {

    beforeEach(async () => {
        await db("user").truncate()
    })

    it("Test basic /api/user endpoint availability", async() => {
        const data = {username: "trevthom", password: "4155478713", name: "trevorT", age: 28}
        const res = await supertest(server).post("/api/auth/login").send(data)
        const get = await supertest(server).get("/api/user/").set('Authorization', res.token)
        expect(get.statusCode).toBe(200)
    })

})

describe("registration endpoint testing", () => {

    beforeEach(async () => {
        await db("user").truncate()
    })

    it("POST register add new user", async () => {
        const data = { username: "trev108", password: "8888888", name:"trevorA", age: 28}
        const res = await supertest(server).post("/api/auth/register").send(data)
        expect(res.status).toBe(201);
    })

    it("POST register add second new user", async () => {
        const data = { username: "trev151", password: "8888888", name:"trevorB", age: 28}
        const res = await supertest(server).post("/api/auth/register").send(data)
        expect(res.status).toBe(201);
    })

    it("POST register add third new user", async () => {
        const data = { username: "trev53", password: "8888888", name:"trevorC", age: 28}
        const res = await supertest(server).post("/api/auth/register").send(data)
        expect(res.status).toBe(201);
    })

    it("POST register add fourth new user", async () => {
        const data = { username: "trev54", password: "8888888", name:"trevorD", age: 28}
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
        expect(res.statusCode).toBe(500);
    })

    it("POST successful login", async () => {
        try {
            const data = { username: "cflor", password: "4155478713", "name": "flores", age: 23}
            await supertest(server).post("/api/auth/register").send(data)
            const res = await supertest(server).post("/api/auth/login").send(data);
            expect(res.statusCode).toBe(200)
        } catch (err) {
            throw (err)
        }
    })

    it("Get user", async() => {
        const data = {username: "trevthom", password: "4155478713", name: "trevorT", age: 28}
        const res = await supertest(server).post("/api/auth/login").send(data)
        const get = await supertest(server).get("/api/user/").set('Authorization', res.token)
        expect(get.statusCode).toBe(200)
    })

    it("Get failed /user/:id", async() => {
        const data = {username: "trevor", password: "4155478713", name: "trevorT", age: 28}
        const res = await supertest(server).post("/api/auth/login").send(data)
        const get = await supertest(server).get("/api/user/").set('Authorization', res.token)
        expect(get.statusCode).toBe(500)
    })

    it("Get successful /user/:id", async() => {
        const data = {username: "trevthom", password: "4155478713", name: "trevorT", age: 28}
        const res = await supertest(server).post("/api/auth/login").send(data)
        const get = await supertest(server).get("/api/user/").set('Authorization', res.token)
        expect(get.statusCode).toBe(401);
    })

    it("Get successful /user/:id with a different username", async() => {
        const data = { username: "cflor", password: "4155478713", "name": "flores", age: 23}
            await supertest(server).post("/api/auth/register").send(data)
            const res = await supertest(server).post("/api/auth/login").send(data);
            const get = await supertest(server).get("/api/user/2").set('Authorization', res.token)
            expect(get.statusCode).toBe(200)
    })

    it("Get successful /user/:id at id /1 with a different username", async() => {
        const data = { username: "cflor", password: "4155478713", "name": "flores", age: 23}
            await supertest(server).post("/api/auth/register").send(data)
            const res = await supertest(server).post("/api/auth/login").send(data);
            const get = await supertest(server).get("/api/user/").set('Authorization', res.token)
            expect(get.statusCode).toBe(500)
    })    
})