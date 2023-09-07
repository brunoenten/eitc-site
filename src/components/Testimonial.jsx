import Image from 'next/image'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridPattern } from '@/components/GridPattern'

export function Testimonial({ children, client, className }) {
  return (
    <div
      className={clsx(
        'bg-abbey-50 relative isolate py-16 sm:py-28 md:py-32',
        className,
      )}
    >
      <GridPattern
        className="fill-abbey-100 stroke-abbey-950/5 absolute inset-0 -z-10 h-full w-full [mask-image:linear-gradient(to_bottom_left,white_50%,transparent_80%)]"
        yOffset={-256}
      />
      <Container>
        <FadeIn>
          <figure className="mx-auto max-w-4xl">
            <blockquote className="text-abbey-950 relative font-display text-3xl font-medium tracking-tight sm:text-4xl">
              <p className="before:content-['“'] after:content-['”'] sm:before:absolute sm:before:right-full">
                {children}
              </p>
            </blockquote>
            <figcaption className="mt-10">
              <Image
                src={client.logo}
                alt={client.name}
                className="h-8 w-auto"
                unoptimized
              />
            </figcaption>
          </figure>
        </FadeIn>
      </Container>
    </div>
  )
}
