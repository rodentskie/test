import { Request, Response } from 'express';
import validateNumber from '../../functions/phone-validate';
import PhonesModel from '../../models/phone';

async function getNextSequence() {
  let seq = 1;

  const data = await PhonesModel.findOne({}, 'seq')
    .sort({ createdAt: -1 })
    .limit(1);

  if (!data) return seq;

  seq = data.seq + 1;
  return seq;
}

const insertPhoneNumber = async (req: Request, res: Response) => {
  const { phone } = req.body;

  if (!phone || phone === '')
    return res.status(422).send({
      message: 'Please enter a phone number.',
    });

  const { check, newNumber } = validateNumber(phone);

  if (!check)
    return res.status(422).send({
      message: 'Phone number must be a valid format',
    });

  const seq = await getNextSequence();
  const data = await PhonesModel.create({
    phone: newNumber,
    seq,
  });

  return res.status(200).send({
    message: 'Inserted successfully.',
    data,
  });
};

export default insertPhoneNumber;
