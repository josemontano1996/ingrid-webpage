'use client';
import { ReactNode } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

interface Props {
  children: ReactNode;
  path: string;
  nextLink: boolean;
  styling?: string;
}

const LocaleLink = ({
  children,
  path,
  nextLink,
  styling = '',
}: Props) => {
  const { locale } = useParams();
  return (
    <>
      {nextLink ? (
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
