
import MaxWidthWrapper from '@/components/Wrappers/MaxWidthWrapper';
import NewProductForm from '@/components/admin/products/NewProductForm';

const page = () => {
  return (
    <MaxWidthWrapper>
      <h1 className="text-3xl font-bold">Nuevo producto</h1>
      <NewProductForm />
    </MaxWidthWrapper>
  );
};

export default page;
