'use client';

import { useContext } from 'react';
import { CartContext } from '@/context/cart/CartContext';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { Separator } from '../ui/separator';
import { Button } from '../ui/button';
import LoadingSpinner from '../LoadingSpinner';

const CartSummary = () => {
  const { isLoaded, subTotal, numberOfItems } = useContext(CartContext);
  return (
    <Card className="p-6">
      <CardHeader>
        <CardTitle>Order</CardTitle>
        <Separator />
      </CardHeader>
      <CardContent className="text-2xl">
        <p className="flex items-center gap-2">
          Number of items: {isLoaded ? numberOfItems : <LoadingSpinner />}
        </p>
        <p>
          Subtotal:{' '}
          <span>{isLoaded ? subTotal : <LoadingSpinner />} &euro;</span>
        </p>
      </CardContent>
      <CardFooter>
        <Button disabled={!isLoaded} size={'lg'} className="text-2xl">
          Checkout
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CartSummary;
