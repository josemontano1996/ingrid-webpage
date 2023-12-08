
import { IMenuItem } from '@/interfaces/IMenuItem';
import Product from '@/models/Product';
import { dbConnect } from './dbConntect';


export const getAllProducts = async (): Promise<IMenuItem[]> => {

  await dbConnect();
  const products = await Product.find().sort({ name: 1 }).lean();

  return JSON.parse(JSON.stringify(products));
};

export const apiTrial = () => {
  return Math.random();
};
