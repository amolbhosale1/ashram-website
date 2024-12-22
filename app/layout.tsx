import './globals.css';
import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';

// const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Babaji Ashram - A Sacred Space for Spiritual Growth',
  description: 'Welcome to Babaji Ashram - A sacred space for meditation, yoga, and spiritual growth in Rishikesh, India.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body >
        <Navbar />
        {children}
      </body>
    </html>
  );
}