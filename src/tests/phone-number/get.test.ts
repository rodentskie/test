import request from 'supertest';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 5000;
const url = process.env.BASE_URL || 'http://localhost';

const URL = `${url}:${port}`;

describe('Get phone test suite', () => {
  test('[GET] Successful get of phone number.', async () => {
    const res = await request(URL).get('/phone-numbers');
    expect(res.status).toBe(200);
  });

  test('[GET] Successful get of phone number, data must be present.', async () => {
    const res = await request(URL).get('/phone-numbers');
    const result = res.body;
    expect(result).toHaveProperty('data');
  });
});
