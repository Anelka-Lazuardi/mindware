import type { Metadata } from 'next';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import { Providers } from '../providers';

export const metadata: Metadata = {
  title: 'Mindware',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Header />

      <div className="flex-grow flex-col flex relative ">
        <Providers>{children}</Providers>
      </div>
      <Footer />
    </div>
  );
}
