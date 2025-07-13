import request from 'supertest';
import app from '../src/app';

describe('API Tests', () => {
  test('GET /api/hello should return Hello World', async () => {
    const response = await request(app).get('/api/hello');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Hello World');
  });

  test('POST /api/sum should return sum', async () => {
    const response = await request(app)
      .post('/api/sum')
      .send({ a: 10, b: 5 });
    expect(response.status).toBe(200);
    expect(response.body.result).toBe(15);
  });
});
