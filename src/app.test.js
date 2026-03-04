const request = require('supertest');
const app = require('./app');

describe('GET /', () => {
  it('returns status 200', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
  });

  it('responds with "Hello World"', async () => {
    const res = await request(app).get('/');
    expect(res.text).toBe('Hello World');
  });
});
