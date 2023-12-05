'use client';
import { useEffect, useState } from 'react';
import { getProviders, signIn, useSession } from 'next-auth/react';
import { CardContent, CardDescription } from '../ui/card';
import { Button } from '../ui/button';
import { useParams, useRouter, useSearchParams } from 'next/navigation';

const ProviderButtons = () => {
  const [providers, setProviders] = useState<any>({});
  const router = useRouter();
  const { locale } = useParams();
  const fallbackRoute = useSearchParams().get('p') || `/${locale}`;
  const { data } = useSession();
  console.log(data);
  useEffect(() => {
    getProviders().then((prov) => {
      setProviders(prov);
    });
  }, []);
  /*  useEffect(() => {
    if (data) {
      router.push(fallbackRoute); // Route change outside rendering cycle
    }
  }, [data, router, fallbackRoute]);
 */
  return (
    <CardContent className="flex flex-col space-y-2">
      <CardDescription className="text-xl">
        Authentication providers
      </CardDescription>
      {Object.values(providers).map((provider: any) => (
        <Button
          key={provider.id}
          variant={'outline'}
          onClick={() => signIn(provider.id)}
        >
          Sign in with &nbsp; <span className="text-xl">{provider.name}</span>
        </Button>
      ))}
    </CardContent>
  );
};

export default ProviderButtons;
