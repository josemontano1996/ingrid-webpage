import MaxWidthWrapper from '@/components/Wrappers/MaxWidthWrapper';
import Menu from '@/components/menu-page/Menu';
import { getAllProducts } from '@/database/dbProducts';
import { IMenuItem } from '@/interfaces/IMenuItem';
import { Metadata } from 'next';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Menu Page',
  description: `Chef Bautista Menu page`,
};

const page = async () => {
  const products: IMenuItem[] = await getAllProducts();

  return (
    <>
      <MaxWidthWrapper>
        <h3 className="py-4 text-center text-4xl font-semibold sm:text-5xl lg:text-6xl">
          Exquisite Mediterranean Flavors: A Culinary Journey with{' '}
          {process.env.NEXT_PUBLIC_NAME}
        </h3>
      </MaxWidthWrapper>
      <Menu products={products} />
    </>
  );
};

export default page;
