import ChakraProvider from '@/providers/ChakraProvider';
import { Box } from '@chakra-ui/react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from './(Navbar)/Header';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'The Assignment',
  description: 'Created w/ Next.js, React.js, Tailwind CSS, TypeScript, etc',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChakraProvider>
          <Header />

          <main>
            <Box className="mx-auto max-w-7xl min-h-screen">{children}</Box>
          </main>
        </ChakraProvider>
      </body>
    </html>
  );
}
