'use client';

import { ReactNode } from 'react';
import { useParams, usePathname } from 'next/navigation';

//I created this function to easily trigger visibility for a
//component in a RSC. Because of my middleware I can not return a response
//with headers because of the return of the i18nRouter, and by now there is no
//reliant header in Next 14 for getting the current pathname in a server component
//so i came out with this easy solution

const ConditionalDisplay = ({
  children,
  route,
  mustBeEqual,
}: {
  children: ReactNode;
  route: string;
  mustBeEqual: boolean;
}) => {
  const pathname = usePathname();
  const { locale } = useParams();
  const fullRoute = `/${locale}${route}`;

  if (mustBeEqual && pathname === fullRoute) {
    return <>{children}</>;
  }
  if (!mustBeEqual && pathname !== fullRoute) {
    return <>{children}</>;
  }
  return null;
};

export default ConditionalDisplay;
