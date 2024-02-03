import { getAllProducts } from '@/database/dbProducts';
import XDraggableList from '../XDraggableList';
import MenuItem from './MenuItem';
import { IMenuItem } from '@/interfaces/IMenuItem';
import { redirect } from 'next/navigation';

const Menu = async ({ locale }: { locale: string }) => {
  let products: IMenuItem[] = await getAllProducts();

  if (products.length === 0) {
    redirect(`/${locale}/error`);
  }

  const starterDishes = products.filter(
    (product) => product.type === 'starter',
  );

  const mainDishes = products.filter((product) => product.type === 'mainDish');

  const dessertDishes = products.filter(
    (product) => product.type === 'dessert',
  );
  return (
    <section className="ml-[5vw] sm:ml-[3vw]">
      <h2 className="py-5 text-4xl font-semibold">Starters</h2>
      <XDraggableList styling="grid w-[92vw] grid-flow-col">
        {starterDishes.map((item, i) => (
          <MenuItem key={i} item={item} />
        ))}
      </XDraggableList>
      <h2 className="py-10 text-4xl font-semibold">Main Course</h2>
      <XDraggableList styling="grid w-[92vw] grid-flow-col">
        {mainDishes.map((item, i) => (
          <MenuItem key={i} item={item} />
        ))}
      </XDraggableList>
      <h2 className="py-10 text-4xl font-semibold">Desserts</h2>
      <XDraggableList styling="grid w-[92vw] grid-flow-col">
        {dessertDishes.map((item, i) => (
          <MenuItem key={i} item={item} />
        ))}
      </XDraggableList>
    </section>
  );
};

export default Menu;
