import { ReactNode } from 'react';
import Link from 'next/link';
import getServerLocale from '@/lib/getServerLocale';

interface Props {
  children: ReactNode;
  path: string;
  styling?: string;
  prefetching?: boolean;
}

const LocaleLink = ({
  children,
  path,
  styling = '',
  prefetching = true,
}: Props) => {
  const locale = getServerLocale();
  return (
    <>
      {prefetching ? (
        <Link href={`/${locale}${path}`} className={styling}>
          {children}
        </Link>
      ) : (
        <a href={`/${locale}${path}`} className={styling}>
          {children}
        </a>
      )}
    </>
  );
};

export default LocaleLink;
