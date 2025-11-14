import type { Metadata } from 'next'
import { Inter, Roboto_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

// ✅ Replace Geist → Inter (main font)
const inter = Inter({ subsets: ["latin"] })

// ✅ Replace Geist_Mono → Roboto_Mono (monospace font)
const robotoMono = Roboto_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: 'SDK-SOLUTIONS',
  description: 'Created Sandaru',
  generator: 'Sandaru',
  icons: {
    icon: [
      {
        url: '/SDK.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/SDK.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/SDK.png',
        type: 'image/png',
      },
    ],
    apple: '/SDK.png', 
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      {/* Apply Inter font globally */}
      <body className={`${inter.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
