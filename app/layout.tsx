import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Estudio Zen | Yoga & Meditation Studio',
  description: 'A space to come home to you. Boutique yoga and meditation studio offering classes, teacher training, and workshops.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: '#FDF8F3', margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
