const request = require("supertest");
const {server,app} = require("../index");
const mongoose = require("mongoose");

describe('GET api/tasks',()=>{
    it('it should return 200 ok',async()=>{
     const res = await request(app).get('/api/tasks')
     expect(res.statusCode).toBe(200);
     expect(Array.isArray(res.body)).toBe(true);
        })
})

afterAll(async()=>{
    await mongoose.conection.close();
    await server.close();
})