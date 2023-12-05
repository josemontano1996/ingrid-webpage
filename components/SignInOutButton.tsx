'use client';
import { MouseEvent } from 'react';
import { UserCircle2, LogOut } from 'lucide-react';
import { signIn, signOut, useSession } from 'next-auth/react';

const SignInOutButton = () => {
  const { data } = useSession();

  const onSignIn = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    signIn();
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
