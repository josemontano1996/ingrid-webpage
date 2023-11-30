import Image from 'next/image';
import { IMenuItem } from '@/interfaces/IMenuItem';

const MenuItem = ({ item }: { item: IMenuItem }) => {
  return (
    <li>
      <div>
        <Image
          onMouseDown={e=>e.preventDefault()}
          className="aspect-square rounded-xl object-cover"
          src={item.image}
          width={350}
          height={350}
          alt={item.name}
        />
      </div>
          <h4>{item.name}</h4> 
          <p>{item.description}</p>
          
    </li>
  );
};

export default MenuItem;
