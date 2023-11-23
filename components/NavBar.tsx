import { BookOpen, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import HamburgerMenu from './HamburgerMenu';

const NavBar = ({ locale }: { locale: string }) => {
  return (
    <header className="sticky top-0 z-40 flex w-full items-center justify-between bg-white px-[2vw] py-1">
      <div className="flex-1">
        <h1 className="text-5xl font-semibold">
          <Link href="/">IB</Link>
        </h1>
      </div>
      <ul className=" hidden justify-between space-x-4 text-lg xs:flex sm:space-x-10 sm:text-2xl">
        <li className="font-medium italic hover:underline">
          <a href="#">The Chef</a>
        </li>
        <li className="font-medium italic hover:underline">
          <a href="#">The Experience</a>
        </li>
        <li className="font-medium italic hover:underline">
          <a href="#">The Menu</a>
        </li>
      </ul>
      <nav className="flex flex-1 justify-end ">
        <ul className="flex items-center space-x-4">
          <li>
            <Link href={`/${locale}/user/orders`} className="block xs:hidden">
              <BookOpen />
            </Link>
          </li>
          <li>
            <Link href={`${locale}/cart`} className="inline-block">
              <ShoppingCart />
            </Link>
          </li>
          <li>
            <HamburgerMenu />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
