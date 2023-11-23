import { i18nRouter } from 'next-i18n-router';
import i18nConfig from './i18nConfig';
import { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  /* TODO: return to the /en if the locales is not included in accpeted locales */
  return i18nRouter(request, i18nConfig as any);
}

// applies this middleware only to files in the app directory
export const config = {
  matcher: '/((?!api|static|.*..*|_next).*)',
};
