import { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { checkOAuthUser } from '@/database/dynamic-only/dbUsers';

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
  ],
  pages: {
    signIn: '/[locale]/auth/signin',
    newUser: '/[locale]/auth/signin',
    error: '/[locale]/auth/signin',
  },
  session: {
    strategy: 'jwt',
    maxAge: 2592000,
    updateAge: 86400,
  },
  callbacks: {
    async jwt({ token, account, user }: any) {
      if (account) {
        token.accessToken = account.access_token;
        switch (account.type) {
          case 'oauth':
            token.user = await checkOAuthUser(
              user.email || '',
              user.name || '',
              user.image || '',
            );
            break;
          default:
            break;
        }
      }
      return token;
    },
    async session({ session, token, user }: any) {
      session.accessToken = token.accessToken;
      session.user = token.user;

      return session;
    },
  },
};
