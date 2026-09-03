import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Project 1788455826330',
  description: 'A serene, conversion-focused website for Estudio de Yoga Zen, a boutique yoga and meditation studio, featuring class overviews, a weekly schedule with booking, membership pricing tiers, and free-trial class reservation.',
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
