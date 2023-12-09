import { IMenuItem } from '@/interfaces/IMenuItem';
import Product from '@/models/Product';
import { dbConnect } from '../db';

export const getAllProducts = async (): Promise<IMenuItem[]> => {
  await dbConnect();
  const result = await Product.find().sort({ name: 1 }).lean();
  const products = await JSON.parse(JSON.stringify(result));
  return products;
};

export const apiTrial = () => {
  return Math.random();
};
