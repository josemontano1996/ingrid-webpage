'use client';

import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
} from '@radix-ui/react-menubar';
import {
  Folders,
  Inbox,
  LayoutDashboard,
  LogOut,
  Menu,
  ShoppingBasket,
  ShoppingCart,
  User2,
  UserCircle2,
  UserCog,
} from 'lucide-react';
import { cn } from '../lib/utils';
import { Separator } from './ui/separator';
import LocaleLink from './LocaleLink';

const HamburgerMenu = () => {

  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>
          <Menu />
        </MenubarTrigger>
        <MenubarContent
          className={cn('z-40 space-y-2 bg-white px-[2vw] py-4 text-xl')}
        >
          <MenubarItem>
            <LocaleLink
              path={`/delivery`}
              styling="italic hover:underline"
            >
              Delivery
            </LocaleLink>
          </MenubarItem>
          <MenubarItem>
            <LocaleLink
              path={`/delivery`}
              styling="italic hover:underline"
            >
              Private events
            </LocaleLink>
          </MenubarItem>
          <MenubarItem>
            <LocaleLink
              path={`/delivery`}
              styling="italic hover:underline"
            >
              Workshops
            </LocaleLink>
          </MenubarItem>
          <Separator />
          <MenubarItem>
            <LocaleLink
              path={`/cart`}
              styling="flex space-x-4 text-gray-600 hover:text-gray-800"
            >
              <UserCircle2 />
              <div>Sign in</div>
            </LocaleLink>
          </MenubarItem>
          <h3 className="text-2xl">User section</h3>
          <MenubarItem>
            <LocaleLink
              path={`/cart`}
              styling="flex space-x-4 text-gray-600 hover:text-gray-800"
            >
              <ShoppingCart />
              <div>Cart</div>
            </LocaleLink>
          </MenubarItem>
          <MenubarItem>
            <LocaleLink
              path={`/account`}
              styling="flex space-x-4 text-gray-600"
            >
              <User2 />
              <div>Account</div>
            </LocaleLink>
          </MenubarItem>
          <MenubarItem>
            <LocaleLink
              path={`/orders`}
              styling="flex space-x-4 text-gray-600"
            >
              <Inbox />
              <div>Orders</div>
            </LocaleLink>
          </MenubarItem>
          <MenubarItem>
            <LocaleLink
              path={`/cart`}
              styling="flex space-x-4 text-gray-600"
            >
              <LogOut />
              <div>Log out</div>
            </LocaleLink>
          </MenubarItem>
          <MenubarSeparator />
          <h3 className="text-2xl">Admin section</h3>
          <MenubarItem>
            <LocaleLink
              path={`/admin/dashboard`}
              styling="flex space-x-4 text-gray-600 hover:text-gray-800"
            >
              <LayoutDashboard />
              <div>Dashboard</div>
            </LocaleLink>
          </MenubarItem>
          <MenubarItem>
            <LocaleLink
              path={`/admin/products`}
              styling="flex space-x-4 text-gray-600"
            >
              <ShoppingBasket />
              <div>Productos</div>
            </LocaleLink>
          </MenubarItem>
          <MenubarItem>
            <LocaleLink
              path={`/admin/orders`}
              styling="flex space-x-4 text-gray-600"
            >
              <Folders />
              <div>Pedidos</div>
            </LocaleLink>
          </MenubarItem>
          <MenubarItem>
            <LocaleLink
              path={`/admin/orders`}
              styling="flex space-x-4 text-gray-600"
            >
              <UserCog />
              <div>Usuarios</div>
            </LocaleLink>
          </MenubarItem>
          <MenubarItem>
            <LocaleLink
              path={`/cart`}
              styling="flex space-x-4 text-gray-600"
            >
              <LogOut />
              <div>Log out</div>
            </LocaleLink>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default HamburgerMenu;
