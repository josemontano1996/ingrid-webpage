import MaxWidthWrapper from '@/components/Wrappers/MaxWidthWrapper';
import Menu from '@/components/menu-page/Menu';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Menu Page',
  description: `Chef Bautista Menu page`,
};

export const revalidate = 0;

const page = async ({ params: { locale } }: { params: { locale: string } }) => {
  return (
    <>
      <MaxWidthWrapper>
        <h3 className="py-4 text-center text-4xl font-semibold sm:text-5xl lg:text-6xl">
          Exquisite Mediterranean Flavors: A Culinary Journey with{' '}
          {process.env.NEXT_PUBLIC_NAME}
        </h3>
      </MaxWidthWrapper>
      <Menu locale={locale} />
    </>
  );
};

export default page;
