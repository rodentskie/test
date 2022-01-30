import { Schema, model } from 'mongoose';

interface Phones {
  seq: number;
  phone: string;
}

const schema = new Schema<Phones>(
  {
    seq: { type: Number, default: 0 },
    phone: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

const PhonesModel = model<Phones>('Phones', schema);

export default PhonesModel;
