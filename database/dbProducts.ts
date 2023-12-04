import { db } from '.';
import { IMenuItem } from '@/interfaces/IMenuItem';
import Product from '@/models/Product';

export const getAllProducts = async (): Promise<IMenuItem[]> => {
  await db.connect();
  const products = await Product.find().sort({ name: 1 }).lean();
  await db.disconnect();

  return JSON.parse(JSON.stringify(products));
};