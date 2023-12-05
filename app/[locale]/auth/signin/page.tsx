import { Card, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import ProviderButtons from '@/components/auth-page/ProviderButtons';
import { getServerSession } from 'next-auth';

import { redirect } from 'next/navigation';
import { authOptions } from '@/lib/auth';

interface Props {
  params: { locale: string };
  searchParams: { p: string; error?: string };
}
const page = async ({
  params: { locale },
  searchParams: { p, error },
}: Props) => {
  const session = await getServerSession(authOptions);

  const redirectRoute = p ? p : `/${locale}`;
  if (session) {
    redirect(`${redirectRoute}`);
  }

  /* error: '/auth/error', // Error code passed in query string as ?error= */
  return (
    <Card className="mx-auto flex w-[350px] flex-col items-center">
      <CardHeader>
        <CardTitle>Authentication</CardTitle>
        <Separator />
      </CardHeader>
      <ProviderButtons />
      {error && (
        <CardFooter className="text-rose-600">
          <p>An error has ocurred: {error}</p>
        </CardFooter>
      )}
    </Card>
  );
};

export default page;
