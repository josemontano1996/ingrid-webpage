'use client';
import { MouseEvent } from 'react';
import { UserCircle2, LogOut } from 'lucide-react';
import { signOut, useSession } from 'next-auth/react';
import { useParams, usePathname, useRouter } from 'next/navigation';

const SignInOutButton = () => {
  const { data } = useSession();
  const { locale } = useParams();
  const router = useRouter();
  const pathname = usePathname();

  const onSignIn = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    router.push(`/${locale}/auth/signin?p=${pathname}`);
  };
  const onLogOut = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    signOut();
  };

  return (
    <>
      {!data ? (
        <a
          className="flex space-x-4 text-gray-600 hover:text-gray-800"
          onClick={(e) => onSignIn(e)}
        >
          <UserCircle2 />
          <div>Sign in</div>
        </a>
      ) : (
        <a
          className="flex space-x-4 text-gray-600 hover:text-gray-800"
          onClick={(e) => onLogOut(e)}
        >
          <LogOut />
          <div>Log out</div>
        </a>
      )}
    </>
  );
};

export default SignInOutButton;
