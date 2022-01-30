import request from 'supertest';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 5000;
const url = process.env.BASE_URL || 'http://localhost';

const URL = `${url}:${port}`;

describe('Insert phone test suite', () => {
  test('[PUT] Successful update of phone number prefix is 09.', async () => {
    const random = Math.random().toString().slice(2, 11);
    const phone = `09${random}`;
    const insert = await request(URL).post('/phone-number').send({
      phone,
    });
    expect(insert.status).toBe(200);

    const id = insert.body.data.seq;
    const newRandom = Math.random().toString().slice(2, 11);
    const newPhone = `09${newRandom}`;

    const res = await request(URL).put(`/phone-number/${id}`).send({
      phone: newPhone,
    });

    expect(res.status).toBe(200);
  });

  test('[POST] Error on update of phone number prefix is 09; less than 11 digit.', async () => {
    const random = Math.random().toString().slice(2, 11);
    const phone = `09${random}`;
    const insert = await request(URL).post('/phone-number').send({
      phone,
    });
    expect(insert.status).toBe(200);

    const id = insert.body.data.seq;
    const newRandom = Math.random().toString().slice(2, 5);
    const newPhone = `09${newRandom}`;

    const res = await request(URL).put(`/phone-number/${id}`).send({
      phone: newPhone,
    });

    expect(res.status).toBe(422);
  });

  test('[POST] Error on update of phone number prefix is 09; more than 11 digit.', async () => {
    const random = Math.random().toString().slice(2, 11);
    const phone = `09${random}`;
    const insert = await request(URL).post('/phone-number').send({
      phone,
    });
    expect(insert.status).toBe(200);

    const id = insert.body.data.seq;
    const newRandom = Math.random().toString().slice(2, 13);
    const newPhone = `09${newRandom}`;

    const res = await request(URL).put(`/phone-number/${id}`).send({
      phone: newPhone,
    });

    expect(res.status).toBe(422);
  });

  test('[PUT] Successful update of phone number prefix is +639.', async () => {
    const random = Math.random().toString().slice(2, 11);
    const phone = `+639${random}`;
    const insert = await request(URL).post('/phone-number').send({
      phone,
    });
    expect(insert.status).toBe(200);

    const id = insert.body.data.seq;
    const newRandom = Math.random().toString().slice(2, 11);
    const newPhone = `+639${newRandom}`;

    const res = await request(URL).put(`/phone-number/${id}`).send({
      phone: newPhone,
    });

    expect(res.status).toBe(200);
  });

  test('[POST] Error on update of phone number prefix is +639; less than 11 digit.', async () => {
    const random = Math.random().toString().slice(2, 11);
    const phone = `+639${random}`;
    const insert = await request(URL).post('/phone-number').send({
      phone,
    });
    expect(insert.status).toBe(200);

    const id = insert.body.data.seq;
    const newRandom = Math.random().toString().slice(2, 5);
    const newPhone = `+639${newRandom}`;

    const res = await request(URL).put(`/phone-number/${id}`).send({
      phone: newPhone,
    });

    expect(res.status).toBe(422);
  });

  test('[POST] Error on update of phone number prefix is +639; more than 11 digit.', async () => {
    const random = Math.random().toString().slice(2, 11);
    const phone = `+639${random}`;
    const insert = await request(URL).post('/phone-number').send({
      phone,
    });
    expect(insert.status).toBe(200);

    const id = insert.body.data.seq;
    const newRandom = Math.random().toString().slice(2, 13);
    const newPhone = `+639${newRandom}`;

    const res = await request(URL).put(`/phone-number/${id}`).send({
      phone: newPhone,
    });

    expect(res.status).toBe(422);
  });

  test('[PUT] Successful update of phone number prefix is 639.', async () => {
    const random = Math.random().toString().slice(2, 11);
    const phone = `639${random}`;
    const insert = await request(URL).post('/phone-number').send({
      phone,
    });
    expect(insert.status).toBe(200);

    const id = insert.body.data.seq;
    const newRandom = Math.random().toString().slice(2, 11);
    const newPhone = `639${newRandom}`;

    const res = await request(URL).put(`/phone-number/${id}`).send({
      phone: newPhone,
    });

    expect(res.status).toBe(200);
  });

  test('[POST] Error on update of phone number prefix is 639; less than 11 digit.', async () => {
    const random = Math.random().toString().slice(2, 11);
    const phone = `639${random}`;
    const insert = await request(URL).post('/phone-number').send({
      phone,
    });
    expect(insert.status).toBe(200);

    const id = insert.body.data.seq;
    const newRandom = Math.random().toString().slice(2, 5);
    const newPhone = `639${newRandom}`;

    const res = await request(URL).put(`/phone-number/${id}`).send({
      phone: newPhone,
    });

    expect(res.status).toBe(422);
  });

  test('[POST] Error on update of phone number prefix is 639; more than 11 digit.', async () => {
    const random = Math.random().toString().slice(2, 11);
    const phone = `639${random}`;
    const insert = await request(URL).post('/phone-number').send({
      phone,
    });
    expect(insert.status).toBe(200);

    const id = insert.body.data.seq;
    const newRandom = Math.random().toString().slice(2, 13);
    const newPhone = `639${newRandom}`;

    const res = await request(URL).put(`/phone-number/${id}`).send({
      phone: newPhone,
    });

    expect(res.status).toBe(422);
  });

  test('[PUT] Error on update of phone number; phone number provided is empty string.', async () => {
    const random = Math.random().toString().slice(2, 11);
    const phone = `09${random}`;
    const insert = await request(URL).post('/phone-number').send({
      phone,
    });
    expect(insert.status).toBe(200);

    const id = insert.body.data.seq;

    const res = await request(URL).put(`/phone-number/${id}`).send({
      phone: '',
    });

    expect(res.status).toBe(422);
  });

  test('[PUT] Error on update of phone number; no phone number provided.', async () => {
    const random = Math.random().toString().slice(2, 11);
    const phone = `09${random}`;
    const insert = await request(URL).post('/phone-number').send({
      phone,
    });
    expect(insert.status).toBe(200);

    const id = insert.body.data.seq;

    const res = await request(URL).put(`/phone-number/${id}`);

    expect(res.status).toBe(422);
  });

  test('[PUT] Error on update of phone; Invalid format.', async () => {
    const random = Math.random().toString().slice(2, 11);
    const phone = `639${random}`;
    const insert = await request(URL).post('/phone-number').send({
      phone,
    });
    expect(insert.status).toBe(200);

    const id = insert.body.data.seq;
    const newRandom = Math.random().toString().slice(2, 11);
    const newPhone = `6585${newRandom}`;

    const res = await request(URL).put(`/phone-number/${id}`).send({
      phone: newPhone,
    });

    expect(res.status).toBe(422);
  });
});
