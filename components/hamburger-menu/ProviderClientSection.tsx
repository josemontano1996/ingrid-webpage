'use client';

import useUserRole from '@/hooks/useUserRole';
import { ReactNode } from 'react';

const ProviderClientSection = ({ children }: { children: ReactNode }) => {
const role = useUserRole();

  if (role !== 'client') return null;

  return <>{children}</>;
};

export default ProviderClientSection;
