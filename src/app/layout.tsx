import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Roboto, Inter } from 'next/font/google';
import './globals.css';
const roboto = Roboto({ weight: ['400', '300', '100'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Home | Mindware',
  description:
    'At Mindware, we strive to establish long-term, mutually-beneficial partnerships with vendors and channel organizations in the Middle East and Africa',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(roboto.className)}>
        <Sidebar />
        <div className=" lg:ml-24">{children}</div>
      </body>
    </html>
  );
}
