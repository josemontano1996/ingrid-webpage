'use client';
import { ReactNode } from 'react';
import { useParams } from 'next/navigation';

interface Props {
  children: ReactNode;
  path: string;
  styling?: string;
  /*   prefetching?: boolean; */
}

const AdminLink = ({
  children,
  path,
  styling = '',
} /*  prefetching = true, */
: Props) => {
  const { locale } = useParams();
  return (
    <>
      {/*   {prefetching ? (
        <Link href={`/${locale}/protected/admin/${path}`} className={styling}>
          {children}
        </Link>
      ) : ( */}
      <a href={`/${locale}/protected/admin${path}`} className={styling}>
        {children}
      </a>
      {/*  )} */}
    </>
  );
};

export default AdminLink;
