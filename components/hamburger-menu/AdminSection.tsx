import {
  LayoutDashboard,
  ShoppingBasket,
  Folders,
  UserCog,
} from 'lucide-react';
import LocaleLink from '../LocaleLink';
import { MenubarItem } from '../ui/menubar';

const AdminSection = () => {
  return (
    <>
      <h3 className="text-2xl">Admin section</h3>
      <MenubarItem className="text-xl">
        <LocaleLink
          path={`/admin/dashboard`}
          styling="flex space-x-4 text-gray-600 hover:text-gray-800"
        >
          <LayoutDashboard />
          <div>Dashboard</div>
        </LocaleLink>
      </MenubarItem>
      <MenubarItem className="text-xl">
        <LocaleLink
          path={`/admin/products`}
          styling="flex space-x-4 text-gray-600"
        >
          <ShoppingBasket />
          <div>Productos</div>
        </LocaleLink>
      </MenubarItem>
      <MenubarItem className="text-xl">
        <LocaleLink
          path={`/admin/orders`}
          styling="flex space-x-4 text-gray-600"
        >
          <Folders />
          <div>Pedidos</div>
        </LocaleLink>
      </MenubarItem>
      <MenubarItem className="text-xl">
        <LocaleLink
          path={`/admin/orders`}
          styling="flex space-x-4 text-gray-600"
        >
          <UserCog />
          <div>Usuarios</div>
        </LocaleLink>
      </MenubarItem>
    </>
  );
};

export default AdminSection;
