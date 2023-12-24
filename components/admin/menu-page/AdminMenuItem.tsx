'use client';

import Image from 'next/image';
import { IMenuItem } from '@/interfaces/IMenuItem';
import MoreInfoDialog from './MoreInfoDialog';
import AddToCartDialog from './AddToCartDialog';

const MenuItem = ({ item }: { item: IMenuItem }) => {
  return (
    <li className="space-y-2 sm:w-[350px] w-[90vw] h-full flex flex-col justify-between pb-4">
      <div>
        <Image
          onMouseDown={(e) => e.preventDefault()}
          className="aspect-square rounded-xl object-cover"
          src={item.image}
          width={350}
          height={350}
          alt={item.name}
        
        />
      </div>
      <h4 className="text-2xl font-medium">{item.name}</h4>
      <p>{item.description}</p>
      <div className="flex justify-between pt-2">
        <MoreInfoDialog name={item.name} allergens={item.allergens} />
        <AddToCartDialog item={item} />
      </div>
    </li>
  );
};

export default MenuItem;
