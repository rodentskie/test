import { Request, Response } from 'express';
import PhonesModel from '../../models/phone';

const deletePhoneNumber = async (req: Request, res: Response) => {
  const { id } = req.params;
  const seq = parseInt(id);

  const data = await PhonesModel.findOne({ seq });

  if (!data)
    return res.status(422).send({
      message: "Data doesn't exist.",
    });

  data.delete();

  return res.status(200).send({
    message: 'Deleted successfully.',
    data,
  });
};

export default deletePhoneNumber;
