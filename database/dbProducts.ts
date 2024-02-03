import { IMenuItem } from '@/interfaces/IMenuItem';
import Product from '@/models/Product';
import { dbConnect, dbDisconnect } from './db';
import { unstable_noStore } from 'next/cache';

export const getAllProducts = async ({
  cache = false,
}: {
  cache: boolean;
  }): Promise<IMenuItem[] | []> => {
  
  if (!cache) {
    unstable_noStore();
  }
  
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
    if (!cache) {
      await dbDisconnect();
    }
  }
};

export const apiTrial = () => {
  return Math.random();
};
