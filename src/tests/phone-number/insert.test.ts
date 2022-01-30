import request from 'supertest';
import dotenv from 'dotenv';

dotenv.config();

const URL = `${process.env.BASE_URL}:${process.env.PORT}`;

describe('Insert phone test suite', () => {
  test('[POST] Successful insert of phone number prefix is 09.', async () => {
    const random = Math.random().toString().slice(2, 11);
    const phone = `09${random}`;
    const res = await request(URL).post('/phone-number').send({
      phone,
    });
    expect(res.status).toBe(200);
  });

  test('[POST] Error on insert of phone number prefix is 09; less than 11 digit.', async () => {
    const random = Math.random().toString().slice(2, 5);
    const phone = `09${random}`;
    const res = await request(URL).post('/phone-number').send({
      phone,
    });
    expect(res.status).toBe(422);
  });

  test('[POST] Error on insert of phone number prefix is 09; more than 11 digit.', async () => {
    const random = Math.random().toString().slice(2, 13);
    const phone = `09${random}`;
    const res = await request(URL).post('/phone-number').send({
      phone,
    });
    expect(res.status).toBe(422);
  });

  test('[POST] Successful insert of phone number prefix is +639.', async () => {
    const random = Math.random().toString().slice(2, 11);
    const phone = `+639${random}`;
    const res = await request(URL).post('/phone-number').send({
      phone,
    });
    expect(res.status).toBe(200);
  });

  test('[POST] Error insert of phone number prefix is +639; less than 11 digit.', async () => {
    const random = Math.random().toString().slice(2, 8);
    const phone = `+639${random}`;
    const res = await request(URL).post('/phone-number').send({
      phone,
    });
    expect(res.status).toBe(422);
  });

  test('[POST] Error insert of phone number prefix is +639; more than 11 digit.', async () => {
    const random = Math.random().toString().slice(2, 12);
    const phone = `+639${random}`;
    const res = await request(URL).post('/phone-number').send({
      phone,
    });
    expect(res.status).toBe(422);
  });

  test('[POST] Successful insert of phone number prefix is 639.', async () => {
    const random = Math.random().toString().slice(2, 11);
    const phone = `639${random}`;
    const res = await request(URL).post('/phone-number').send({
      phone,
    });
    expect(res.status).toBe(200);
  });

  test('[POST] Error insert of phone number prefix is 639; less than 11 digit.', async () => {
    const random = Math.random().toString().slice(2, 8);
    const phone = `639${random}`;
    const res = await request(URL).post('/phone-number').send({
      phone,
    });
    expect(res.status).toBe(422);
  });

  test('[POST] Error insert of phone number prefix is 639; more than 11 digit.', async () => {
    const random = Math.random().toString().slice(2, 12);
    const phone = `639${random}`;
    const res = await request(URL).post('/phone-number').send({
      phone,
    });
    expect(res.status).toBe(422);
  });

  test('[POST] Error insert of phone number; phone number provided is empty string.', async () => {
    const res = await request(URL).post('/phone-number').send({
      phone: '',
    });
    expect(res.status).toBe(422);
  });

  test('[POST] Error insert of phone number; no phone number provided.', async () => {
    const res = await request(URL).post('/phone-number');
    expect(res.status).toBe(422);
  });

  test('[POST] Error insert of phone number; Invalid format.', async () => {
    const random = Math.random().toString().slice(2, 12);
    const phone = `154${random}`;
    const res = await request(URL).post('/phone-number').send({
      phone,
    });
    expect(res.status).toBe(422);
  });
});
