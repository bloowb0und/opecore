import type { Metadata } from 'next';
// eslint-disable-next-line camelcase -- name of an import
import { DM_Sans } from 'next/font/google';

import './globals.css';
import { FloatingNavBar } from '@/app/components/floating-nav-bar';

const dmSans = DM_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'OpenCore - Resources',
  description: 'OpenCore Resources page',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <FloatingNavBar />
        <main className="mb-[100px] mt-52 flex flex-col items-center gap-[100px] px-[72px]">
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
