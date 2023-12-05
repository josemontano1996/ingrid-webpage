import { getServerSession } from 'next-auth';
import { authOptions } from './auth';

export const getUserRole = async (): Promise<'admin' | 'client' | undefined> => {
  const session = await getServerSession(authOptions);
  const role = session?.user?.role || undefined;
  return role;
};
