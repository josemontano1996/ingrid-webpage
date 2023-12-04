import { cookies } from 'next/headers';
import { ICartItem } from '../../../interfaces/ICartItem';
import CartListItem from '@/components/cart-page/CartListItem';
import CartSummary from '@/components/cart-page/CartSummary';

const page = () => {
  const cookieCart = cookies().get('cart');
  const cart: ICartItem[] = cookieCart ? JSON.parse(cookieCart.value) : [];

  return (
    <div className="mx-[4vw] space-y-4 pt-8">
      <h2 className="text-4xl font-semibold">Cart</h2>
      {cart.length > 0 ? (
        <div className="grid grid-cols-6 gap-24">
          <section className="col-span-3">
            <ul className="space-y-4">
              {cart.map((item) => (
                <CartListItem key={item._id} item={item} />
              ))}
            </ul>
          </section>
          <section className="col-span-3">
            <CartSummary />
          </section>
        </div>
      ) : (
        <div>cart is empty</div>
      )}
    </div>
  );
};

export default page;
