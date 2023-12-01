import {
  starterDishes,
  mainDishes,
  dessertDishes,
} from '@/database/MockProducts';
import XDraggableList from '../XDraggableList';
import MenuItem from './MenuItem';

const Menu = () => {
  return (
    <section className="ml-[5vw] sm:ml-[3vw]">
      <h2 className="py-10 text-4xl font-semibold">Starters</h2>
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
