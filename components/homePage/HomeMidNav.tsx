import Link from 'next/link';
import { SmoothScrollLink } from '../SmoothScrollElement';

const HomeMidNav = ({ locale }: { locale: string }) => {
  return (
    <ul className="hidden justify-between space-x-4 text-lg xs:flex sm:space-x-10 sm:text-2xl">
      <li className="font-medium italic hover:underline">
        <SmoothScrollLink scrollToId="chef">The Chef</SmoothScrollLink>
      </li>
      <li className="font-medium italic hover:underline">
        <SmoothScrollLink scrollToId="experiences">
          The Experience
        </SmoothScrollLink>
      </li>
      <li className="font-medium italic hover:underline">
        <Link href={`${locale}/menu`}>The Menu</Link>
      </li>
    </ul>
  );
};

export default HomeMidNav;
