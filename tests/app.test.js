const request = require('supertest');
const app = require('../src/app');

describe('GET /', () => {
  it('returns status 200', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
  });

  it('responds with "Hello World"', async () => {
    const res = await request(app).get('/');
    expect(res.text).toBe('Hello World');
  });
});
