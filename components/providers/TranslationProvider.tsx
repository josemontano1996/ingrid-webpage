'use client';

import { I18nextProvider } from 'react-i18next';
import { useEffect, useState } from 'react';
import initTranslations from '@/lib/i18n';

let i18n: any;

export default function TranslationsProvider({
  children,
  locale,
  namespaces,
}: any) {
  const [instance, setInstance] = useState(i18n);
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const init = async () => {
      if (!i18n) {
        const newInstance = await initTranslations(locale, namespaces);
        i18n = newInstance;
        setInstance(newInstance);
      } else {
        if (i18n.language !== locale) {
          i18n.changeLanguage(locale);
        }
      }
    };

    init();
  }, [locale, namespaces]);

  if (!instance) {
    return null;
  }

  if (!isMounted) return null;
  return (
    <I18nextProvider i18n={instance} defaultNS={namespaces[0]}>
      {children}
    </I18nextProvider>
  );
}