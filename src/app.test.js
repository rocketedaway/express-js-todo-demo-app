const request = require('supertest');
const app = require('./app');

describe('GET /', () => {
  it('returns status 200', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
  });

  it('responds with "Hello Randy!"', async () => {
    const res = await request(app).get('/');
    expect(res.text).toBe('Hello Randy!');
  });
});
