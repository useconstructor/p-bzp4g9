import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Playfair_Display, Lato } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-lato',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Estudio Zen | Yoga & Meditation Studio',
  description: 'A space to come home to you. Boutique yoga and meditation studio offering classes, teacher training, and workshops.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={`en`} className={`${playfair.variable} ${lato.variable}`}>
      <body className="font-sans" style={{ backgroundColor: '#FDF8F3', margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
