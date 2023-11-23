import NavBar from '@/components/NavBar';
import { cn } from '@/lib/utils';
import '../globals.css';
import { Cormorant } from 'next/font/google';

const cormorant = Cormorant({ subsets: ['latin'] });

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale}>
      <body className={cn('relative h-full', cormorant.className)}>
        <NavBar locale={locale} />
        <main className="relative flex min-h-screen flex-col">
          <div className="flex-1 flex-grow">{children}</div>
        </main>
      </body>
    </html>
  );
}
