'use client';

import useUserRole from '@/hooks/useUserRole';
import { ReactNode } from 'react';

const ProviderAdminSection = ({ children }: { children: ReactNode }) => {
  const role = useUserRole();

  if (role !== 'admin') return null;
  return <>{children}</>;
};

export default ProviderAdminSection;
