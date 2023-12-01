import MaxWidthWrapper from '@/components/Wrappers/MaxWidthWrapper';
import Menu from '@/components/menu-page/Menu';

const page = () => {
  return (
    <>
      <MaxWidthWrapper>
        <h3 className="py-4 text-center text-4xl font-semibold sm:text-5xl lg:text-6xl">
          Exquisite Mediterranean Flavors: A Culinary Journey with {process.env.NEXT_PUBLIC_NAME}
        </h3>
      </MaxWidthWrapper>
      <Menu />
    </>
  );
};

export default page;
