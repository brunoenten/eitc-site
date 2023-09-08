import { RootLayout } from '@/components/RootLayout'

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
    <html lang="en" className="bg-abbey-950 h-full text-base antialiased">
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}
