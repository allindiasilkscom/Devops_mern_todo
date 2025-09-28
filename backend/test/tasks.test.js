const request = require("supertest");
const { server, app } = require("../index");
const mongoose = require("mongoose");

describe("GET /api/tasks", () => {
  it("should return 200 OK and an array", async () => {
    const res = await request(app).get("/api/tasks");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});

afterAll(async () => {
  // close mongoose connection
  if (mongoose.connection.readyState !== 0) {
    await mongoose.connection.close();
  }
  // close server
  if (server && server.close) {
    await new Promise((resolve) => server.close(resolve));
  }
});
