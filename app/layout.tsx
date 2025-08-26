import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Solar Investment - Thank You | Proper Solar',
  description: 'Congratulations! Your booking is confirmed and you\'re now an official member of our family.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-coal text-white font-sans antialiased min-h-screen">
        {children}
      </body>
    </html>
  )
}
