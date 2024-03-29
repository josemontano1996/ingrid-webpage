import { getAllProducts } from '@/database/dbProducts';

import MenuItem from './AdminMenuItem';
import { IMenuItem } from '@/interfaces/IMenuItem';

import XDraggableList from '@/components/XDraggableList';

export const revalidate = 0;

const AdminProducts = async () => {
  let products: IMenuItem[] = await getAllProducts({ cache: false });

  const starterDishes = products.filter(
    (product) => product.type === 'starter',
  );

  const mainDishes = products.filter((product) => product.type === 'mainDish');

  const dessertDishes = products.filter(
    (product) => product.type === 'dessert',
  );
  return (
    <section className="ml-[5vw] sm:ml-[3vw]">
      <h2 className="py-5 text-4xl font-semibold">Entrantes</h2>
      <XDraggableList styling="grid w-[92vw] grid-flow-col">
        {starterDishes.map((item, i) => (
          <MenuItem key={i} item={item} />
        ))}
      </XDraggableList>
      <h2 className="py-10 text-4xl font-semibold">Principal</h2>
      <XDraggableList styling="grid w-[92vw] grid-flow-col">
        {mainDishes.map((item, i) => (
          <MenuItem key={i} item={item} />
        ))}
      </XDraggableList>
      <h2 className="py-10 text-4xl font-semibold">Postres</h2>
      <XDraggableList styling="grid w-[92vw] grid-flow-col">
        {dessertDishes.map((item, i) => (
          <MenuItem key={i} item={item} />
        ))}
      </XDraggableList>
    </section>
  );
};

export default AdminProducts;
