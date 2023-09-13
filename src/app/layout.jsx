import { RootLayout } from '@/components/RootLayout'
import { Providers } from './providers'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Maxent Consulting',
    default:
      'Maxent Consulting - Crafting scalable, performant and UX friendly apps.',
  },
}

export default function Layout({ children }) {
  return (
    <html lang="en" className="h-full bg-abbey-950 text-base antialiased light">
      <body className="flex min-h-full flex-col">
        <Providers>
          <RootLayout>{children}</RootLayout>
        </Providers>
      </body>
    </html>
  )
}
