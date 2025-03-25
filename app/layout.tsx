import type React from 'react';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Monad Testnet: Test, Play and Build on Monad Testnet',
  description: "Test, Play, and Build in Monad's High-Performance, EVM-Compatible Testnet Environment",
  applicationName: 'Monad Testnet',
  manifest: '/manifest.webmanifest',
  themeColor: '#836EF9',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  formatDetection: {
    telephone: false,
  },
  appleWebApp: {
    capable: true,
    title: 'Monad Testnet',
    statusBarStyle: 'black-translucent',
  },
  openGraph: {
    title: 'Monad Testnet: Test, Play and Build on Monad Testnet',
    description: "Test, Play, and Build in Monad's High-Performance, EVM-Compatible Testnet Environment",
    url: 'https://testnet.monad.xyz/',
    siteName: 'Monad Testnet',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://testnet.monad.xyz/opengraph-image.jpg',
        width: 1200,
        height: 630,
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@MonadFoundation',
    creator: '@MonadFoundation',
    title: 'Monad Testnet: Test, Play and Build on Monad Testnet',
    description: "Test, Play, and Build in Monad's High-Performance, EVM-Compatible Testnet Environment",
    images: [
      {
        url: 'https://testnet.monad.xyz/twitter-image.jpg',
        width: 1200,
        height: 630,
        type: 'image/jpeg',
      },
    ],
  },
  icons: [
    {
      rel: 'icon',
      url: '/favicon.ico',
      type: 'image/x-icon',
      sizes: '192x192',
    },
    {
      rel: 'icon',
      url: '/icon.png',
      type: 'image/png',
      sizes: '192x192',
    },
    {
      rel: 'apple-touch-icon',
      url: '/apple-icon.png',
      type: 'image/png',
      sizes: '192x192',
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-inter flex flex-col min-h-screen`}>
        <div className="page-wrap relative flex flex-col w-full min-h-[100svh] overflow-x-hidden">
          <div className="background-decal fixed inset-0 w-full h-full pointer-events-none"></div>
          <Navbar />
          <main className="flex-grow pt-24 md:pt-20">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
