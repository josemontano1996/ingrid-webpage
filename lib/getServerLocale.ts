import { headers } from 'next/headers';

const getServerLocale = (): string | null => {
  const locale = headers().get('x-next-i18n-router-locale');

  return locale;
};

export default getServerLocale;
