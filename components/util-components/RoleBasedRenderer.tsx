'use client';

import { ReactNode } from 'react';
import { useSession } from 'next-auth/react';

type Props = {
  children: ReactNode;
  role?: UserRole[];
};

type UserRole = 'admin' | 'client' | 'none';

const RoleBasedRenderer = ({ children, role }: Props) => {
  const { data: session } = useSession();

  if (!session && role?.includes('none')) {
    return <>{children}</>;
  }

  if (!session) {
    return null;
  }
  const userRole: any = session.user.role;

  return <>{role?.includes(userRole) && <>{children}</>}</>;
};

export default RoleBasedRenderer;
