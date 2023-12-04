'use client';

import { FC, ReactNode, useEffect, useReducer } from 'react';
import Cookie from 'js-cookie';
import { CartContext } from './CartContext';
import { cartReducer } from './cartReducer';

import { ICartItem } from '@/interfaces/ICartItem';

export interface CartState {
  isLoaded: boolean;
  cart: ICartItem[];
  numberOfItems: number;
  subTotal: number;
  tax: number;
  total: number;
}

const Cart_INITIAL_STATE: CartState = {
  isLoaded: false,
  cart: Cookie.get('cart') ? JSON.parse(Cookie.get('cart')!) : [],
  numberOfItems: 0,
  subTotal: 0,
  tax: 0,
  total: 0,
};

interface Props {
  children: ReactNode;
}

export const CartProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, Cart_INITIAL_STATE);

  //loading the cart from cookie
  useEffect(() => {
    try {
      const cookieCart = Cookie.get('cart')
        ? JSON.parse(Cookie.get('cart')!)
        : [];
      dispatch({
        type: 'Cart-load cart from storage',
        payload: cookieCart,
      });
    } catch (error) {
      dispatch({ type: 'Cart-load cart from storage', payload: [] });
    }
  }, []);

  //updating the cookie when cart state changes
  useEffect(() => {
    try {
      Cookie.set('cart', JSON.stringify(state.cart));
    } catch (error) {
      console.log('Error updating cart');
      alert('An error ocurred, try again later.');
    }
  }, [state.cart]);

  useEffect(() => {
    const numberOfItems = state.cart.reduce(
      (prev, current) => current.quantity! + prev,
      0,
    );
    const subTotal = state.cart.reduce(
      (prev, current) => current.price * current.quantity! + prev,
      0,
    );

    const taxRate = Number(process.env.NEXT_PUBLIC_TAX_RATE || 0);

    const orderSummary = {
      numberOfItems,
      subTotal,
      tax: subTotal * taxRate,
      total: subTotal * (1 + taxRate),
    };
    dispatch({ type: 'Cart-update order summary', payload: orderSummary });
  }, [state.cart]);

  //this update functions manages to find if a product exists, if it exists already
  //and the new quantity is 0 it is deleted from state, if not the quantity is
  //updated, if the product is not found then the product is added to the state
  const updateCart = (cartItem: ICartItem) => {
    const existingItem = state.cart.find((item) => item._id === cartItem._id);

    if (existingItem) {
      cartItem.quantity === 0
        ? dispatch({ type: 'Cart-delete item', payload: cartItem })
        : dispatch({ type: 'Cart-update item quantity', payload: cartItem });
    } else {
      console.log('here');
      dispatch({ type: 'Cart-add item', payload: cartItem });
    }
  };

  return (
    <CartContext.Provider
      value={{
        ...state,

        //Methods
        updateCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
