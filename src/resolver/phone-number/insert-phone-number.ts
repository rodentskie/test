import { Request, Response } from 'express';
import validateNumber from '../../functions/phone-validate';
import PhonesModel from '../../models/phone';

const insertPhoneNumber = async (req: Request, res: Response) => {
  const { phone } = req.body;

  const { check, newNumber } = validateNumber(phone);

  if (!check)
    return res.status(422).send({
      message: 'Phone number must be a valid format',
    });

  const data = await PhonesModel.create({
    phone: newNumber,
  });

  return res.status(200).send({
    message: 'Inserted successfully.',
    data,
  });
};

export default insertPhoneNumber;
