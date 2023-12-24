import MaxWidthWrapper from '@/components/Wrappers/MaxWidthWrapper';
import AdminLink from '@/components/admin/AdminLink';
import AdminMenu from '@/components/admin/menu-page/AdminMenu';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const MenuPage = async () => {
  return (
    <>
      <MaxWidthWrapper>
        <h3 className="py-4 text-center text-4xl font-semibold sm:text-5xl lg:text-6xl">
          Administracion del Menú
        </h3>
        <div className="flex items-center justify-center space-y-12">
          <AdminLink
            path="/products/new"
            styling={cn(buttonVariants(), 'text-2xl')}
          >
            Añadir nuevo producto
          </AdminLink>
        </div>
      </MaxWidthWrapper>
      <AdminMenu />
    </>
  );
};

export default MenuPage;
