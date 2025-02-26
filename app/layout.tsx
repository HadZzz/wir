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
            __html: JSON.stringify([
              {
                '@context': 'https://schema.org',
                '@type': 'Event',
                name: 'Ngawi Music Festival 2024',
                description: 'Festival musik terbesar di Ngawi yang menampilkan berbagai genre musik dari artis lokal dan nasional. Nikmati pengalaman musik yang tak terlupakan dengan penampilan spesial dari musisi terbaik Ngawi.',
                startDate: '2024-06-25T19:00',
                endDate: '2024-06-25T23:00',
                eventStatus: 'https://schema.org/EventScheduled',
                eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
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
                  },
                  geo: {
                    '@type': 'GeoCoordinates',
                    latitude: '-7.4089',
                    longitude: '111.4458'
                  }
                },
                image: [
                  'https://ngawimusical.com/images/events/ngawi-music-festival-2024.jpg',
                  'https://ngawimusical.com/images/events/ngawi-music-festival-2024-banner.jpg'
                ],
                offers: {
                  '@type': 'Offer',
                  price: '50000',
                  priceCurrency: 'IDR',
                  availability: 'https://schema.org/InStock',
                  validFrom: '2024-05-01',
                  url: 'https://ngawimusical.com/events/ngawi-music-festival-2024/tickets'
                },
                performer: [
                  {
                    '@type': 'MusicGroup',
                    name: 'Pak Amba & Band',
                    image: 'https://ngawimusical.com/images/artists/pak-amba-band.jpg'
                  },
                  {
                    '@type': 'MusicGroup',
                    name: 'Susi Akustik',
                    image: 'https://ngawimusical.com/images/artists/susi-akustik.jpg'
                  }
                ],
                organizer: {
                  '@type': 'Organization',
                  name: 'Ngawi Musical',
                  url: 'https://ngawimusical.com'
                },
                superEvent: {
                  '@type': 'Festival',
                  name: 'Ngawi Musical Festival Series 2024'
                }
              },
              {
                '@context': 'https://schema.org',
                '@type': 'WebSite',
                name: 'Ngawi Musical',
                url: 'https://ngawimusical.com',
                potentialAction: {
                  '@type': 'SearchAction',
                  target: {
                    '@type': 'EntryPoint',
                    urlTemplate: 'https://ngawimusical.com/search?q={search_term_string}'
                  },
                  'query-input': 'required name=search_term_string'
                }
              },
              {
                '@context': 'https://schema.org',
                '@type': 'BreadcrumbList',
                itemListElement: [
                  {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Beranda',
                    item: 'https://ngawimusical.com'
                  },
                  {
                    '@type': 'ListItem',
                    position: 2,
                    name: 'Events',
                    item: 'https://ngawimusical.com/events'
                  },
                  {
                    '@type': 'ListItem',
                    position: 3,
                    name: 'Ngawi Music Festival 2024',
                    item: 'https://ngawimusical.com/events/ngawi-music-festival-2024'
                  }
                ]
              }
            ])
          }}
        />
        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'Apa itu Ngawi Musical?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Ngawi Musical adalah platform musik dan pertunjukan seni terkemuka di Ngawi yang menyelenggarakan berbagai event musik berkualitas, workshop, dan pertunjukan seni budaya.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'Dimana lokasi event Ngawi Musical diadakan?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Event Ngawi Musical diadakan di berbagai lokasi strategis di Ngawi, dengan venue utama di Alun-alun Ngawi dan Taman Wisata Ngawi. Setiap event memiliki lokasi yang dipilih khusus sesuai dengan jenis pertunjukan.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'Bagaimana cara membeli tiket event Ngawi Musical?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Tiket event Ngawi Musical dapat dibeli secara online melalui website resmi kami di ngawimusical.com/tickets atau di lokasi event pada hari pertunjukan. Untuk pemesanan grup dan informasi VIP, silakan hubungi +62-351-123456.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'Apakah Ngawi Musical menerima pendaftaran seniman lokal?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Ya, Ngawi Musical selalu membuka kesempatan bagi seniman dan musisi lokal untuk tampil dalam event kami. Pendaftaran dapat dilakukan melalui website atau menghubungi tim kami di info@ngawimusical.com.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'Apa saja jenis musik yang ditampilkan di Ngawi Musical?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Ngawi Musical menampilkan berbagai genre musik, mulai dari musik tradisional, pop, jazz, rock, hingga musik kontemporer. Kami juga sering mengadakan kolaborasi unik antara musik modern dan tradisional.'
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}