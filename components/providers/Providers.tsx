'use client';

import { ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';
import { CartProvider } from '@/context/cart/CartProvider';
const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <SessionProvider>
      <CartProvider>{children}</CartProvider>
    </SessionProvider>
  );
};

export default Providers;
