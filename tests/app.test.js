const request = require('supertest');
const app = require('../src/app');

describe('GET /', () => {
  it('should return 200 status code', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
  });

  it('should return a Hello World message', async () => {
    const res = await request(app).get('/');
    expect(res.body.message).toBe('Hello World');
  });
});
