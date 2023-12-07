import { db } from '.';
import { IMenuItem } from '@/interfaces/IMenuItem';
import Product from '@/models/Product';
import { mongoConnection } from './db';

export const getAllProducts = async (): Promise<IMenuItem[]> => {

  console.log(mongoConnection, 'top');

  await db.connect();
  console.log(mongoConnection, 'second');
  const products = await Product.find().sort({ name: 1 }).lean();
  console.log(mongoConnection, 'third');

  await db.disconnect();
  console.log(mongoConnection, 'last');

  return JSON.parse(JSON.stringify(products));
};

export const apiTrial = () => {
  return Math.random();
};
