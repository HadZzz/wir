import './globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Ngawi Musical - Harmoni Budaya Musik Ngawi',
  description: 'Platform musik dan pertunjukan seni di Ngawi yang menyatukan harmoni budaya melalui berbagai event musik berkualitas. Temukan pertunjukan musik terbaik di Ngawi.',
  keywords: ['ngawi musical', 'ngawi mushical', 'ngawimushical', 'ngawi musik', 'musik ngawi', 'pertunjukan musik ngawi', 'event musik ngawi', 'konser ngawi'],
  authors: [{ name: 'Ngawi Musical' }],
  creator: 'Ngawi Musical',
  publisher: 'Ngawi Musical',
  openGraph: {
    title: 'Ngawi Musical - Harmoni Budaya Musik Ngawi',
    description: 'Platform musik dan pertunjukan seni di Ngawi yang menyatukan harmoni budaya melalui berbagai event musik berkualitas. Temukan pertunjukan musik terbaik di Ngawi.',
    url: 'https://ngawimusical.com',
    siteName: 'Ngawi Musical',
    locale: 'id_ID',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'qvkmBucr2wJ3gKCl95x7r0f8IxjZHBYM33IPO2LYmTs',
  },
  alternates: {
    canonical: 'https://ngawimusical.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <meta name="google-site-verification" content="qvkmBucr2wJ3gKCl95x7r0f8IxjZHBYM33IPO2LYmTs" />
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Ngawi Musical',
              description: 'Platform musik dan pertunjukan seni di Ngawi yang menyatukan harmoni budaya melalui berbagai event musik berkualitas.',
              url: 'https://ngawimusical.com',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Ngawi',
                addressRegion: 'Jawa Timur',
                addressCountry: 'ID'
              },
              sameAs: [
                'https://facebook.com/ngawimusical',
                'https://instagram.com/ngawimusical'
              ]
            })
          }}
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}