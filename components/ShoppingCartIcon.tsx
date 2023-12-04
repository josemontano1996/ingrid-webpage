'use client';
import { CartContext } from '@/context/cart/CartContext';
import { ShoppingCart } from 'lucide-react';
import { useContext, useEffect, useState } from 'react';

const ShooppingCartIcon = () => {
  const { cart } = useContext(CartContext);
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <>
        <ShoppingCart />
      </>
    );
  }

  return (
    <>
      {cart.length > 0 ? (
        <>
          <ShoppingCart />
          <div className="absolute right-0 top-0">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-primary"></span>
            </span>
          </div>
        </>
      ) : (
        <ShoppingCart />
      )}
    </>
  );
};

export default ShooppingCartIcon;
