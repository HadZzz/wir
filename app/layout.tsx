import './globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Ngawi Musical - Harmoni Budaya Musik Ngawi',
  description: 'Platform musik dan pertunjukan seni di Ngawi yang menyatukan harmoni budaya melalui berbagai event musik berkualitas. Temukan pertunjukan musik terbaik di Ngawi.',
  keywords: ['ngawi musical', 'ngawi mushical', 'ngawimushical', 'ngawi musik', 'musik ngawi', 'pertunjukan musik ngawi', 'event musik ngawi', 'konser ngawi', 'seni musik ngawi', 'festival musik ngawi', 'pentas seni ngawi', 'komunitas musik ngawi'],
  authors: [{ name: 'Ngawi Musical' }],
  creator: 'Ngawi Musical',
  publisher: 'Ngawi Musical',
  metadataBase: new URL('https://ngawimusical.com'),
  alternates: {
    canonical: 'https://ngawimusical.com',
    languages: {
      'id-ID': 'https://ngawimusical.com',
      'en-US': 'https://ngawimusical.com/en'
    }
  },
  openGraph: {
    title: 'Ngawi Musical - Harmoni Budaya Musik Ngawi',
    description: 'Platform musik dan pertunjukan seni di Ngawi yang menyatukan harmoni budaya melalui berbagai event musik berkualitas. Temukan pertunjukan musik terbaik di Ngawi.',
    url: 'https://ngawimusical.com',
    siteName: 'Ngawi Musical',
    locale: 'id_ID',
    type: 'website',
    images: [
      {
        url: 'https://ngawimusical.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ngawi Musical - Platform Musik dan Pertunjukan Seni Ngawi'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ngawi Musical - Harmoni Budaya Musik Ngawi',
    description: 'Platform musik dan pertunjukan seni di Ngawi yang menyatukan harmoni budaya melalui berbagai event musik berkualitas.',
    images: ['https://ngawimusical.com/twitter-image.jpg'],
    creator: '@ngawimusical'
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
  }
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
        <link rel="alternate" hrefLang="id" href="https://ngawimusical.com" />
        <link rel="alternate" hrefLang="en" href="https://ngawimusical.com/en" />
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
              logo: 'https://ngawimusical.com/logo.png',
              sameAs: [
                'https://facebook.com/ngawimusical',
                'https://instagram.com/ngawimusical',
                'https://twitter.com/ngawimusical',
                'https://youtube.com/ngawimusical'
              ],
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Jl. Teuku Umar No. 1',
                addressLocality: 'Ngawi',
                addressRegion: 'Jawa Timur',
                postalCode: '63211',
                addressCountry: 'ID'
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+62-351-123456',
                contactType: 'customer service',
                email: 'info@ngawimusical.com'
              }
            })
          }}
        />
        <Script
          id="event-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Event',
              name: 'Ngawi Music Festival',
              description: 'Festival musik terbesar di Ngawi yang menampilkan berbagai genre musik dari artis lokal dan nasional.',
              startDate: '2024-06-25T19:00',
              endDate: '2024-06-25T23:00',
              location: {
                '@type': 'Place',
                name: 'Alun-alun Ngawi',
                address: {
                  '@type': 'PostalAddress',
                  streetAddress: 'Alun-alun Ngawi',
                  addressLocality: 'Ngawi',
                  addressRegion: 'Jawa Timur',
                  postalCode: '63211',
                  addressCountry: 'ID'
                }
              },
              offers: {
                '@type': 'Offer',
                price: '50000',
                priceCurrency: 'IDR',
                availability: 'https://schema.org/InStock',
                validFrom: '2024-05-01'
              },
              performer: {
                '@type': 'MusicGroup',
                name: 'Pak Amba & Band'
              },
              organizer: {
                '@type': 'Organization',
                name: 'Ngawi Musical',
                url: 'https://ngawimusical.com'
              }
            })
          }}
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}