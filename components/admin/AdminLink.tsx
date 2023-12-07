import { ReactNode } from 'react';
import getServerLocale from '@/lib/getServerLocale';

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
 /*  prefetching = true, */
}: Props) => {
  const locale = getServerLocale();
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
