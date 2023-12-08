import Link from 'next/link';
import { BookOpen } from 'lucide-react';
import HamburgerMenu from './HamburgerMenu';
import MidNavBarProvider from './providers/MidNavBarProvider';
import LocaleLink from './LocaleLink';
import ShoppingCartIcon from './ShoppingCartIcon';
import ConditionalDisplay from './providers/ConditionalDisplay';
import { getUserRole } from '@/lib/getUserRole';
import AdminNavBar from './admin/AdminNavBar';

const NavBar = async () => {
 /*  const role = await getUserRole(); */

  return (
    <header className="sticky top-0 z-40 flex w-full items-center justify-between bg-white px-[2vw] py-1">
      <div className="flex-1">
        <h1 className="text-5xl font-semibold">
          <Link href="/">IB</Link>
        </h1>
      </div>
     {/*  {role === 'admin' ? (
        <AdminNavBar />
      ) : (
        <>
          <MidNavBarProvider />
          <nav className="flex flex-1 justify-end ">
            <ul className="flex items-center justify-between space-x-2">
              <ConditionalDisplay route={'/menu'} mustBeEqual={false}>
                <li>
                  <LocaleLink path={`/menu`} styling="inline-block">
                    <BookOpen />
                  </LocaleLink>
                </li>
              </ConditionalDisplay>
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
        </>
      )} */}
    </header>
  );
};

export default NavBar;
