import { cookies } from 'next/headers';
import { ICartItem } from '../../../interfaces/ICartItem';


const page = () => {
  const cookieCart = cookies().get('cart');
  const cart: ICartItem[] = cookieCart ? JSON.parse(cookieCart.value) : [];
 
  return (
    <div className="mx-[4vw] space-y-4 pt-8">
      <h2 className="text-4xl font-semibold">Cart</h2>
      {cart.length > 0 ? (
        <div className="grid grid-cols-6">
          <section className="col-span-4">
            <ul>
              {cart.map((item) => (
                <li key={item._id}>{item.name}</li>
              ))}
            </ul>
          </section>
          <section className="col-span-2">fdasfasdfas</section>
        </div>
      ) : (
        <div>cart is empty</div>
      )}
    </div>
  );
};

export default page;
