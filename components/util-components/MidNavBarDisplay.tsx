'use client';

import { useParams, usePathname } from 'next/navigation';
import HomeMidNav from '../home-page/HomeMidNav';
import MenuMidNav from '../menu-page/MenuMidNav';

const MidNavBarDisplay = () => {
  const { locale }: { locale: string } = useParams();
  const pathname = usePathname();
  return (
    <>
      {pathname === `/${locale}` && <HomeMidNav locale={locale} />}
      {pathname === `/${locale}/menu` && <MenuMidNav locale={locale} />}
    </>
  );
};

export default MidNavBarDisplay;
