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
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { cn } from '../lib/utils';
import { Separator } from './ui/separator';

const HamburgerMenu = () => {
  const { locale } = useParams();

  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>
          <Menu />
        </MenubarTrigger>
        <MenubarContent className={cn('space-y-2 px-[2vw] py-4 text-xl')}>
          <MenubarItem>
            <Link
              href={`/${locale}/delivery`}
              className="italic hover:underline"
            >
              Delivery
            </Link>
          </MenubarItem>
          <MenubarItem>
            <Link
              href={`/${locale}/delivery`}
              className="italic hover:underline"
            >
              Private events
            </Link>
          </MenubarItem>
          <MenubarItem>
            <Link
              href={`/${locale}/delivery`}
              className="italic hover:underline"
            >
              Workshops
            </Link>
          </MenubarItem>
          <Separator />
          <MenubarItem>
            <Link
              href={`/${locale}/cart`}
              className="flex space-x-4 text-gray-600 hover:text-gray-800"
            >
              <UserCircle2 />
              <div>Sign in</div>
            </Link>
          </MenubarItem>
          <h3 className="text-2xl">User section</h3>
          <MenubarItem>
            <Link
              href={`/${locale}/cart`}
              className="flex space-x-4 text-gray-600 hover:text-gray-800"
            >
              <ShoppingCart />
              <div>Cart</div>
            </Link>
          </MenubarItem>
          <MenubarItem>
            <Link
              href={`/${locale}/account`}
              className="flex space-x-4 text-gray-600"
            >
              <User2 />
              <div>Account</div>
            </Link>
          </MenubarItem>
          <MenubarItem>
            <Link
              href={`/${locale}/orders`}
              className="flex space-x-4 text-gray-600"
            >
              <Inbox />
              <div>Orders</div>
            </Link>
          </MenubarItem>
          <MenubarItem>
            <Link
              href={`/${locale}/cart`}
              className="flex space-x-4 text-gray-600"
            >
              <LogOut />
              <div>Log out</div>
            </Link>
          </MenubarItem>
          <MenubarSeparator />
          <h3 className="text-2xl">Admin section</h3>
          <MenubarItem>
            <Link
              href={`/${locale}/admin/dashboard`}
              className="flex space-x-4 text-gray-600 hover:text-gray-800"
            >
              <LayoutDashboard />
              <div>Dashboard</div>
            </Link>
          </MenubarItem>
          <MenubarItem>
            <Link
              href={`/${locale}/admin/products`}
              className="flex space-x-4 text-gray-600"
            >
              <ShoppingBasket />
              <div>Productos</div>
            </Link>
          </MenubarItem>
          <MenubarItem>
            <Link
              href={`/${locale}/admin/orders`}
              className="flex space-x-4 text-gray-600"
            >
              <Folders />
              <div>Pedidos</div>
            </Link>
          </MenubarItem>
          <MenubarItem>
            <Link
              href={`/${locale}/admin/orders`}
              className="flex space-x-4 text-gray-600"
            >
              <UserCog />
              <div>Usuarios</div>
            </Link>
          </MenubarItem>
          <MenubarItem>
            <Link
              href={`/${locale}/cart`}
              className="flex space-x-4 text-gray-600"
            >
              <LogOut />
              <div>Log out</div>
            </Link>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default HamburgerMenu;
