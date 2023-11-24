'use client';

import { useParams, usePathname } from 'next/navigation';
import HomeMidNav from '../homePage/HomeMidNav';
import MenuMidNav from '../menuPage/MenuMidNav';

const MidNavBarProvider = () => {
  const { locale }: { locale: string } = useParams();
  const pathname = usePathname();
  return (
    <>
      {pathname === `/${locale}` && <HomeMidNav locale={locale} />}
      {pathname === `/${locale}/menu` && <MenuMidNav locale={locale} />}
    </>
  );
};

export default MidNavBarProvider;
