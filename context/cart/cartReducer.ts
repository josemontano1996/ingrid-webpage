import { ICartItem } from '@/interfaces/ICartItem';
import { CartState } from './CartProvider';

type CartActionType =
  | { type: 'Cart-load cart from storage'; payload: ICartItem[] }
  | { type: 'Cart-update item quantity'; payload: ICartItem }
  | { type: 'Cart-add item'; payload: ICartItem }
  | { type: 'Cart-delete item'; payload: ICartItem }
  | {
      type: 'Cart-update order summary';
      payload: {
        numberOfItems: number;
        subTotal: number;
        tax: number;
        total: number;
      };
    };
export const cartReducer = (
  state: CartState,
  action: CartActionType,
): CartState => {
  switch (action.type) {
    case 'Cart-update order summary':
      return {
        ...state,
        ...action.payload,
      };
    case 'Cart-load cart from storage':
      return {
        ...state,
        isLoaded: true,
        cart: [...action.payload],
      };
    case 'Cart-add item':
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case 'Cart-update item quantity':
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item._id === action.payload._id) {
            item.quantity = action.payload.quantity;
          }
          return item;
        }),
      };
    case 'Cart-delete item':
      return {
        ...state,
        cart: state.cart.filter((item) => item._id !== action.payload._id),
      };

    default:
      return state;
  }
};
