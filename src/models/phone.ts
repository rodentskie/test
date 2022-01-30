import { Schema, model } from 'mongoose';

interface Phones {
  phone: string;
}

const schema = new Schema<Phones>(
  {
    phone: String,
  },
  {
    timestamps: true,
  },
);

const PhonesModel = model<Phones>('Phones', schema);

export default PhonesModel;
