import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import '@radix-ui/themes/styles.css';
import { Box, Container, Theme as RadixTheme } from '@radix-ui/themes';
import ChakraProvider from '@/providers/ChakraProvider';

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
          <RadixTheme accentColor={'gold'} grayColor="olive">
            <main className="p-5">
              <Box className="mx-auto max-w-7xl h-32 ">{children}</Box>
            </main>
          </RadixTheme>
        </ChakraProvider>
      </body>
    </html>
  );
}
