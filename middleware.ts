import { i18nRouter } from 'next-i18n-router';
import i18nConfig from './i18nConfig';
import { NextRequestWithAuth, withAuth } from 'next-auth/middleware';
import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

type User = {
  name?: string;
  email: string;
  role: 'client' | 'admin';
  image?: string;
};
export default withAuth(
  async function middleware(req: NextRequestWithAuth) {
    const requestedPage = req.nextUrl.pathname;
    const token = await getToken({ req });
    const user = token?.user as User;
    const userRole = user?.role || undefined;

    //if it is an unprotected api route we skip it
    if (
      requestedPage.includes('/api') &&
      !requestedPage.includes('/protected')
    ) {
      return NextResponse.next();
    }

    //filtering all protected routes, which need special credentials for accesing them
    if (requestedPage.includes('/protected')) {
      //checking for the api routes permissions, because they need a different response
      //to regular pages routes I check them in a different block
      if (requestedPage.includes('/api')) {
        if (!userRole) {
          return new Response(JSON.stringify({ message: 'Not authorized' }), {
            status: 401,
            headers: {
              'Content-Type': 'application/json',
            },
          });
        }

        if (requestedPage.includes('/admin') && userRole !== 'admin') {
          return new Response(JSON.stringify({ message: 'Not authorized' }), {
            status: 401,
            headers: {
              'Content-Type': 'application/json',
            },
          });
        }

        return NextResponse.next();
      }

      //if the execution arrived here means we are NOT requesting an api route
      //but still in a protected route, I splitted it because the return from the
      //api routes and from a normal route are different
      if (!userRole) {
        const locale = requestedPage.split('/')[1];
        const url = new URL(
          `/${locale}/auth/signin?p=${requestedPage}`,
          req.url,
        );

        return NextResponse.redirect(url);
      }

      if (requestedPage.includes('/admin') && userRole !== 'admin') {
        const locale = requestedPage.split('/')[1];
        return NextResponse.redirect(new URL(`/${locale}`, req.url));
      }
    }
    return i18nRouter(req, i18nConfig as any);
  },
  {
    callbacks: {
      authorized: async ({ req }) => {
        //I am passing all routes through the middleware as i need all of them
        //even the not authorized to get trough the i18nRouter
        return true;
      },
    },
  },
);

// applies this middleware only to files in the app directory
export const config = {
  matcher: ['/:path*'],
};
