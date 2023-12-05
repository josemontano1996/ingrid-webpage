import NavBar from '@/components/NavBar';
import { cn } from '@/lib/utils';
import '../globals.css';
import { Cormorant } from 'next/font/google';
import { Footer } from '@/components/Footer';
import { CartProvider } from '@/context/cart/CartProvider';
import AuthSessionProvider from '@/components/providers/AuthSessionProvider';
import { dir } from 'i18next';


const cormorant = Cormorant({ subsets: ['latin'] });

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <AuthSessionProvider>
      <CartProvider>
        <html lang={locale} dir={dir(locale)}>
          <body className={cn('relative h-full', cormorant.className)}>
            <NavBar />
            <main className="relative flex min-h-screen flex-col">
              <div className="flex-1 flex-grow">{children}</div>
            </main>
            <Footer />
          </body>
        </html>
      </CartProvider>
    </AuthSessionProvider>
  );
}
