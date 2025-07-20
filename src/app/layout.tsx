import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import ThemeProvider from '@/components/theme-provider';
import Footer from '@/components/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Felix Tessier',
  description: 'Personal website of Felix Tessier.',
  icons: {
    icon: '/icons/terminal_box_line_orange.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} container mx-auto antialiased px-6`}
      >
        <ThemeProvider>
          <Header />
          <main className="content">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
