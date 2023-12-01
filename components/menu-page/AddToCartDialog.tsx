'use client';

import { ChangeEvent, FormEvent, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';

import { Button, buttonVariants } from '../ui/button';
import { IMenuItem } from '@/interfaces/IMenuItem';
import { cn } from '@/lib/utils';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { ICartItem } from '@/interfaces/ICartItem';

const AddToCartDialog = ({ item }: { item: ICartItem }) => {
  const [quantity, setQuantity] = useState<number>(item.minServings || 0);
  const onQuantityChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(target.value);
    if (item.minServings && newValue < item.minServings) {
      return;
    }
    setQuantity(newValue);
  };

  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (item.minServings && quantity < item.minServings) {
      return;
    }
    item.quantity = quantity;
    console.log('form');
    //TODO: create updateCart funtionalities
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add to Cart</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="space-y-4 text-xl">
          <DialogTitle className="text-4xl font-semibold">
            {item.name}
          </DialogTitle>
          <DialogDescription asChild className="text-xl font-medium text-black">
            <div className="space-y-1">
              <p className="text-2xl">{item.description}</p>
              <p className="pt-2">
                Minimum servings: <span>{item.minServings} u.</span>
              </p>
              <p>
                Price: <span className="text-2xl">{item.price} &euro;</span> per
                u.
              </p>
            </div>
          </DialogDescription>
        </DialogHeader>
        <form
          className="flex flex-col space-y-6 text-xl"
          onSubmit={onFormSubmit}
        >
          <div className="flex items-center space-x-3">
            <Label htmlFor="quantity" className="text-xl">
              Quantity
            </Label>
            <Input
              name="quantity"
              value={quantity}
              type="number"
              className="w-20 text-center text-xl font-medium"
              onChange={onQuantityChange}
            />
          </div>
          <button className={cn(buttonVariants(), 'w-32')}>Add to Cart</button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddToCartDialog;
