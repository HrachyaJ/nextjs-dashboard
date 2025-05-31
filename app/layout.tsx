import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'Supercharge your business with Acme Dashboard — the all-in-one platform for real-time analytics, streamlined operations, and actionable insights. Make smarter decisions, faster.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
  openGraph: {
    title: 'Acme Dashboard',
    description: 'Supercharge your business with Acme Dashboard — the all-in-one platform for real-time analytics, streamlined operations, and actionable insights. Make smarter decisions, faster.',
    images: [{
      url: '/opengraph-image.png',
      width: 1200,
      height: 630,
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Acme Dashboard',
    description: 'Supercharge your business with Acme Dashboard — the all-in-one platform for real-time analytics, streamlined operations, and actionable insights. Make smarter decisions, faster.',
    images: ['/opengraph-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
