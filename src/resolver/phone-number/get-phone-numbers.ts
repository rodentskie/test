import { Request, Response } from 'express';
import PhonesModel from '../../models/phone';

const getPhoneNumber = async (req: Request, res: Response) => {
  const data = await PhonesModel.find({}).sort({ seq: 1 });
  return res.status(200).send({
    data,
  });
};

export default getPhoneNumber;
