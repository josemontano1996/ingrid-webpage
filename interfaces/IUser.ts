import { ICartItem } from './ICartItem';

export interface IUser {
  name: string;
  email: string;
  cart?: ICartItem[];
  role: 'admin' | 'client';

  createdAt?: string;
  updatedAt?: string;
}
