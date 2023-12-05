import { useSession } from 'next-auth/react';

const useUserRole = () => {
  const { data } = useSession();
  const role = data?.user.role;

  return role ;
};

export default useUserRole;
