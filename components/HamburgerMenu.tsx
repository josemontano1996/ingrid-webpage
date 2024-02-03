import { Menu } from 'lucide-react';
import { cn } from '../lib/utils';
import { Separator } from './ui/separator';
import LocaleLink from './LocaleLink';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from './ui/menubar';
import ClientSection from './hamburger-menu/ClientSection';
import SignInOutButton from './SignInOutButton';

const HamburgerMenu = async () => {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger className="p-0">
          <Menu />
        </MenubarTrigger>

        <MenubarContent className={cn('z-40 space-y-2 bg-white px-[2vw] py-4')}>
          <MenubarItem className="text-xl">
            <LocaleLink nextLink={true} path={`/menu`} styling="italic hover:underline">
              Menu
            </LocaleLink>
          </MenubarItem>
          <MenubarItem className="text-xl">
            <LocaleLink nextLink={true} path={`/delivery`} styling="italic hover:underline">
              Private events
            </LocaleLink>
          </MenubarItem>
          <MenubarItem className="text-xl">
            <LocaleLink nextLink={true} path={`/delivery`} styling="italic hover:underline">
              Workshops
            </LocaleLink>
          </MenubarItem>
          <Separator />
          <ClientSection />
          <MenubarItem className="text-xl">
            <SignInOutButton />
          </MenubarItem>
          <MenubarSeparator />
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default HamburgerMenu;
