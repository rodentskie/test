import { Request, Response } from 'express';
import validateNumber from '../../functions/phone-validate';
import PhonesModel from '../../models/phone';

const updatePhoneNumber = async (req: Request, res: Response) => {
  const { phone } = req.body;

  if (!phone || phone === '')
    return res.status(422).send({
      message: 'Please enter a phone number.',
    });

  const { id } = req.params;
  const seq = parseInt(id);

  const { check, newNumber } = validateNumber(phone);

  if (!check)
    return res.status(422).send({
      message: 'Phone number must be a valid format',
    });

  const data = await PhonesModel.findOne({ seq });

  if (!data)
    return res.status(422).send({
      message: "Data doesn't exist.",
    });

  data.phone = newNumber;
  data.save();

  return res.status(200).send({
    message: 'Updated successfully.',
    data,
  });
};

export default updatePhoneNumber;
