const request = require('supertest');
const mongoose = require('mongoose');
const { app, server } = require('../index');

describe('GET api/tasks', () => {
  it('should return 200 OK', async () => {
    const res = await request(app).get('/api/tasks');
    expect(res.statusCode).toEqual(200);
  });
});

afterAll(async () => {
  await server.close();               // ✅ Wait for server to close
  await mongoose.connection.close();  // ✅ Close MongoDB connection
});