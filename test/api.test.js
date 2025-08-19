// test/api.test.js
const request = require('supertest');
const app = require('../src/index');

describe('GET /', () => {
  it('responde 200 y un JSON con message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('message');
  });
});

describe('GET /health', () => {
  it('responde 200 y texto ok', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('ok');
  });
});
