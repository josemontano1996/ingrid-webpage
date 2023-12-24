import { SmoothScrollLink } from '@/components/SmoothScrollElement';
import Link from 'next/link';


const MenuMidNav = ({ locale }: { locale: string }) => {
  return (
    <ul className="hidden justify-between space-x-4 text-lg sm:flex sm:space-x-10  sm:text-xl md:text-2xl">
      <li className="font-medium italic hover:underline">
        <SmoothScrollLink scrollToId="chef">Starters</SmoothScrollLink>
      </li>
      <li className="font-medium italic hover:underline">
        <SmoothScrollLink scrollToId="experiences">
          Main Course
        </SmoothScrollLink>
      </li>
      <li className="font-medium italic hover:underline">
        <Link href={`${locale}/menu`}>Dessert</Link>
      </li>
    </ul>
  );
};

export default MenuMidNav;
