import request from 'supertest';
import dotenv from 'dotenv';

dotenv.config();

const URL = `${process.env.BASE_URL}:${process.env.PORT}`;

describe('Insert phone test suite', () => {
  test('[DELETE] Successful delete of phone number.', async () => {
    const random = Math.random().toString().slice(2, 11);
    const phone = `09${random}`;
    const insert = await request(URL).post('/phone-number').send({
      phone,
    });
    expect(insert.status).toBe(200);

    const id = insert.body.data.seq;

    const res = await request(URL).delete(`/phone-number/${id}`);

    expect(res.status).toBe(200);
  });

  test("[DELETE] Error delete of phone number; data doesn't exist.", async () => {
    const random = Math.random().toString().slice(2, 11);
    const phone = `09${random}`;
    const insert = await request(URL).post('/phone-number').send({
      phone,
    });
    expect(insert.status).toBe(200);

    const id = parseInt(insert.body.data.seq, 10) + 1;

    const res = await request(URL).delete(`/phone-number/${id}`);

    expect(res.status).toBe(422);
  });
});
