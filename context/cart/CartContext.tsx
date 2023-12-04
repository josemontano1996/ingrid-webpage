import { ICartItem } from '@/interfaces/ICartItem';
import { createContext } from 'react';

interface ContextProps {
  isLoaded: boolean;
  cart: ICartItem[];
  numberOfItems: number;
  subTotal: number;
  tax: number;
  total: number;

  updateCart: (cartItem: ICartItem) => void;
}

export const CartContext = createContext({} as ContextProps);
