import request from 'supertest';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 5000;
const url = process.env.BASE_URL || 'http://localhost';

const URL = `${url}:${port}`;

describe('Home test suite', () => {
  test('[Get home status] must be 200', async () => {
    const res = await request(URL).get('/');
    expect(res.status).toBe(200);
  });
});
