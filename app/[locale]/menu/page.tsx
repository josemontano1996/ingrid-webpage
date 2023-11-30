import MaxWidthWrapper from '@/components/Wrappers/MaxWidthWrapper';
import Menu from '@/components/menu-page/Menu';

const page = () => {
  return (
    <>
      <MaxWidthWrapper>
        <h3 className="py-8 text-center text-4xl font-semibold sm:text-5xl lg:text-6xl">
          House made food, like your Nonna did, at the reach of your hand.
        </h3>
      </MaxWidthWrapper>
      <Menu />
    </>
  );
};

export default page;
