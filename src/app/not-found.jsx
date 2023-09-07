import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'

export default function NotFound() {
  return (
    <Container className="flex h-full items-center pt-24 sm:pt-32 lg:pt-40">
      <FadeIn className="flex max-w-xl flex-col items-center text-center">
        <p className="text-abbey-950 font-display text-4xl font-semibold sm:text-5xl">
          404
        </p>
        <h1 className="text-abbey-950 mt-4 font-display text-2xl font-semibold">
          Page not found
        </h1>
        <p className="text-abbey-600 mt-2 text-sm">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <Link
          href="/"
          className="text-abbey-950 hover:text-abbey-700 mt-4 text-sm font-semibold transition"
        >
          Go to the home page
        </Link>
      </FadeIn>
    </Container>
  )
}
