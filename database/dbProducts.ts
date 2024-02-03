import { IMenuItem } from '@/interfaces/IMenuItem';
import Product from '@/models/Product';
import { dbConnect, dbDisconnect } from './db';

export const getAllProducts = async (): Promise<IMenuItem[] | []> => {
  let products = [];
  try {
    await dbConnect();
    const result = await Product.find().sort({ name: 1 }).lean();
    products = await JSON.parse(JSON.stringify(result));
    return products;
  } catch (error) {
    console.log(error);
    return products;
  } finally {
    await dbDisconnect();
  }
};

export const apiTrial = () => {
  return Math.random();
};
