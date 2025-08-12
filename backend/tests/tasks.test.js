const request = require('supertest');
const app = require('../server'); // your Express app

describe('GET api/tasks', () => {
  it('should return 200 OK', async () => {
    const res = await request(app).get('/api/tasks');
    expect(res.statusCode).toEqual(200);
  });
});