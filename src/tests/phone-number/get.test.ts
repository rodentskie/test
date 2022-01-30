import request from 'supertest';
import dotenv from 'dotenv';

dotenv.config();

const URL = `${process.env.BASE_URL}:${process.env.PORT}`;

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
