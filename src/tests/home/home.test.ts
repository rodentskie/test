import request from 'supertest';
import dotenv from 'dotenv';

dotenv.config();

const URL = `${process.env.BASE_URL}:${process.env.PORT}`;

describe('Home test suite', () => {
  test('[Get home status] must be 200', async () => {
    const res = await request(URL).get('/');
    expect(res.status).toBe(200);
  });
});
