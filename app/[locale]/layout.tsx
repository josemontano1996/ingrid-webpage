import { Cormorant } from 'next/font/google';
import { dir } from 'i18next';
import { cn } from '@/lib/utils';
import '../globals.css';
import Providers from '@/components/providers/Providers';
import i18nConfig from '@/i18nConfig';
import { Footer } from '@/components/Footer';
import NavBar from '@/components/NavBar';


const cormorant = Cormorant({ subsets: ['latin'] });

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <Providers>
      <html lang={locale} dir={dir(locale)}>
        <body className={cn('relative h-full', cormorant.className)}>
           <NavBar /> 
          <main className="relative flex min-h-screen flex-col">
            <div className="flex-1 flex-grow">{children}</div>
          </main>
          <Footer />
        </body>
      </html>
    </Providers>
  );
}
