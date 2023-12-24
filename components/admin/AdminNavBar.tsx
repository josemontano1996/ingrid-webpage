import {
  LayoutDashboard,
  ShoppingBasket,
  Folders,
  UserCog,
} from 'lucide-react';

import SignInOutButton from '../SignInOutButton';
import AdminLink from './AdminLink';

const AdminNavBar = () => {
  return (
    <ul className="flex flex-grow items-center justify-evenly">
      <li className="text-xl">
        <AdminLink
          path={`/dashboard`}
          styling="flex space-x-4 text-gray-600 hover:text-gray-800"
        >
          <LayoutDashboard />
          <div>Dashboard</div>
        </AdminLink>
      </li>
      <li className="text-xl">
        <AdminLink path={'/menu'} styling="flex space-x-4 text-gray-600">
          <ShoppingBasket />
          <div>Menú</div>
        </AdminLink>
      </li>
      <li className="text-xl">
        <AdminLink
          path={'/orders'}
          styling="flex space-x-4 text-gray-600"
        >
          <Folders />
          <div>Pedidos</div>
        </AdminLink>
      </li>
      <li className="text-xl">
        <AdminLink
          path={`/admin/orders`}
          styling="flex space-x-4 text-gray-600"
        >
          <UserCog />
          <div>Usuarios</div>
        </AdminLink>
      </li>
      <li>
        <SignInOutButton />
      </li>
    </ul>
  );
};

export default AdminNavBar;
