import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider"
import CommercialPopup from "@/components/CommercialPopup"

export const metadata: Metadata = {
  title: 'Clifford Manase | Frontend Developer & UI/UX Designer',
  description: 'Futuristic portfolio of Clifford Manase - Frontend Developer with 4+ years of experience in React, Next.js, TypeScript, and modern web technologies.',
  keywords: ['Frontend Developer', 'React', 'Next.js', 'TypeScript', 'UI/UX', 'Web Developer', 'Nairobi', 'Kenya'],
  authors: [{ name: 'Clifford Manase' }],
  openGraph: {
    title: 'Clifford Manase | Frontend Developer',
    description: 'Building the future of the web, one pixel at a time.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="font-fira antialiased">
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        {children}
        <CommercialPopup />
        </ThemeProvider>
      </body>
    </html>
  )
}
