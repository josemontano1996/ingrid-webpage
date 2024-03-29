import LocaleLink from '../LocaleLink';
import { SmoothScrollLink } from '../SmoothScrollElement';

const HomeMidNav = ({ locale }: { locale: string }) => {
  return (
    <ul className="hidden justify-between space-x-4 text-lg sm:flex sm:space-x-10 sm:text-xl md:text-2xl">
      <li className="font-medium italic hover:underline">
        <SmoothScrollLink scrollToId="chef">The Chef</SmoothScrollLink>
      </li>
      <li className="font-medium italic hover:underline">
        <SmoothScrollLink scrollToId="experiences">
          The Experience
        </SmoothScrollLink>
      </li>
      <li className="font-medium italic hover:underline">
        <LocaleLink nextLink={true} path={`/menu`}>
          The Menu
        </LocaleLink>
      </li>
    </ul>
  );
};

export default HomeMidNav;
