import Link from 'next/link';
import { BookOpen } from 'lucide-react';
import HamburgerMenu from './HamburgerMenu';
import MidNavBarProvider from './providers/MidNavBarProvider';
import LocaleLink from './LocaleLink';
import ShoppingCartIcon from './ShoppingCartIcon';

const NavBar = () => {
  return (
    <header className="sticky top-0 z-40 flex w-full items-center justify-between bg-white px-[2vw] py-1">
      <div className="flex-1">
        <h1 className="text-5xl font-semibold">
          <Link href="/">IB</Link>
        </h1>
      </div>
      <MidNavBarProvider />
      <nav className="flex flex-1 justify-end ">
        <ul className="flex items-center space-x-4">
          <li>
            <LocaleLink path={`/menu`} styling="block xs:hidden">
              <BookOpen />
            </LocaleLink>
          </li>
          <li className="relative p-2">
            <LocaleLink
              prefetching={false}
              path={`/cart`}
              styling="inline-block"
            >
              <ShoppingCartIcon />
            </LocaleLink>
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
