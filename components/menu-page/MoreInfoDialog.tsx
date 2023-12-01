'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { Button } from '../ui/button';

import { IAllergens, IMenuItem } from '@/interfaces/IMenuItem';

const MoreInfoDialog = ({
  allergens,
  name,
}: {
  allergens?: IAllergens[];
  name: string;
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={'secondary'}>Allergens</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="space-y-4">
          <DialogTitle className="text-3xl font-semibold">{name}</DialogTitle>
          <DialogDescription className="text-xl font-medium text-black">
            {allergens?.length! > 0 ? (
              <span>Allegens: {allergens} </span>
            ) : (
              'No allergens'
            )}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default MoreInfoDialog;
