import { ShoppingCart, User2, Inbox, LogOut } from 'lucide-react';
import { MenubarItem } from '../ui/menubar';
import LocaleLink from '../LocaleLink';

const ClientSection = () => {
  return (
    <>
      <h3 className="text-2xl">User section</h3>
      <MenubarItem className="text-xl">
        <LocaleLink
          nextLink={false}
          path={`/cart`}
          styling="flex space-x-4 text-gray-600 hover:text-gray-800"
        >
          <ShoppingCart />
          <div>Cart</div>
        </LocaleLink>
      </MenubarItem>
      <MenubarItem className="text-xl">
        <LocaleLink
          nextLink={false}
          path={`/account`}
          styling="flex space-x-4 text-gray-600"
        >
          <User2 />
          <div>Account</div>
        </LocaleLink>
      </MenubarItem>
      <MenubarItem className="text-xl">
        <LocaleLink
          nextLink={false}
          path={`/orders`}
          styling="flex space-x-4 text-gray-600"
        >
          <Inbox />
          <div>Orders</div>
        </LocaleLink>
      </MenubarItem>
    </>
  );
};

export default ClientSection;
