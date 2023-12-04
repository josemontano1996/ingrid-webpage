import { ICartItem } from '@/interfaces/ICartItem';
import { MinusCircle, PlusCircle } from 'lucide-react';
import Image from 'next/image';
import { Button } from '../ui/button';

const CartListItem = ({ item }: { item: ICartItem }) => {
  return (
    <li className="flex items-center gap-8">
      <Image
        src={item.image}
        height={150}
        width={150}
        alt={item.name}
        className="aspect-square rounded-xl object-cover"
      />
      <div className="flex space-x-3 text-2xl">
        <div>
          <h4>{item.name}</h4>
          <p className="text-base">Min. quantity: {item.minServings}</p>
        </div>
        <div className="flex">
          <Button variant={'ghost'}>
            <MinusCircle size={'20px'} />
          </Button>
          <p className="">{item.quantity}</p>
          <Button variant={'ghost'}>
            <PlusCircle size={'20px'} />
          </Button>
        </div>
      </div>
      <div className="ml-auto flex flex-col text-2xl">
        <p className="text-center">{item.price * item.quantity!} &euro;</p>
        <Button variant={'ghost'}>Remove</Button>
      </div>
    </li>
  );
};

export default CartListItem;
