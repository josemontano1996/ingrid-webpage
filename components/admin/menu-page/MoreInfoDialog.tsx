'use client';



import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { IAllergens } from '@/interfaces/IMenuItem';

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
              <span>
                Allegens: {allergens?.join(', ').toLocaleLowerCase()}.
              </span>
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
