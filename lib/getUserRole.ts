import { getServerSession } from 'next-auth';
import { authOptions } from './auth';

export const dynamic = 'force-dynamic';

//this function can not be used in the Edge (middleware), it is 
//not supported yet
export const getUserRole = async (): Promise<
  'admin' | 'client' | undefined
> => {
  const session = await getServerSession(authOptions);

  const role: any = session?.user?.role || undefined;
  return role;
};
