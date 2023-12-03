'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

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
  const { locale } = useParams();
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
