import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import '@radix-ui/themes/styles.css';
import ChakraProvider from '@/providers/ChakraProvider';
import { Box } from '@chakra-ui/react';

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
          <main className="p-5">
            <Box className="mx-auto max-w-7xl h-32 ">{children}</Box>
          </main>
        </ChakraProvider>
      </body>
    </html>
  );
}
