import type { Metadata } from 'next';
import { Red_Hat_Text } from 'next/font/google';
import './globals.css';

const redHatText = Red_Hat_Text({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Запуск вже скоро',
  description: 'Запуск вже скоро - IY WORK',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
      </head>
      <body className={redHatText.className}>{children}</body>
    </html>
  );
}

