import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import '@/styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'HealthTech4Africa — AI Radiology for the Real World',
  description:
    'Precision-driven chest X-ray insights designed for clinicians. Automated diagnostics, telehealth, and secure collaboration built for African healthcare systems.',
  keywords: [
    'AI radiology',
    'medical imaging',
    'chest x-ray',
    'healthcare Africa',
    'telemedicine',
    'diagnostic AI',
  ],
  authors: [{ name: 'HealthTech4Africa' }],
  openGraph: {
    title: 'HealthTech4Africa — AI Radiology for the Real World',
    description: 'Precision-driven chest X-ray insights designed for clinicians.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HealthTech4Africa — AI Radiology for the Real World',
    description: 'Precision-driven chest X-ray insights designed for clinicians.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-accent-500 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  )
}
