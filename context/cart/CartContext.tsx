import { ICartItem } from '@/interfaces/ICartItem';
import { createContext } from 'react';


interface ContextProps {
  cart: ICartItem[];

  updateCart: (cartItem: ICartItem) => void;
}

export const CartContext = createContext({} as ContextProps);
