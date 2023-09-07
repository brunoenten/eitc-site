import Link from 'next/link'
import Image from 'next/image'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { socialMediaProfiles } from '@/components/SocialMedia'
import logo from '@/images/logo.svg'

const navigation = [
  {
    title: 'Work',
    links: [
      { title: 'Skiset', href: '/work/skiset' },
      { title: 'ReTok', href: '/work/retok' },
      { title: 'Agenda.ch', href: '/work/agendach' },
      {
        title: (
          <>
            See all <span aria-hidden="true">&rarr;</span>
          </>
        ),
        href: '/work',
      },
    ],
  },
  {
    title: 'Company',
    links: [
      { title: 'About', href: '/about' },
      { title: 'Process', href: '/process' },
      { title: 'Blog', href: '/blog' },
      { title: 'Contact us', href: '/contact' },
    ],
  },
  {
    title: 'Connect',
    links: socialMediaProfiles,
  },
]

function Navigation() {
  return (
    <nav>
      <ul role="list" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
        {navigation.map((section, sectionIndex) => (
          <li key={sectionIndex}>
            <div className="text-abbey-950 font-display text-sm font-semibold tracking-wider">
              {section.title}
            </div>
            <ul role="list" className="text-abbey-700 mt-4 text-sm">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex} className="mt-4">
                  <Link
                    href={link.href}
                    className="hover:text-abbey-950 transition"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export function Footer() {
  return (
    <Container as="footer" className="mt-24 w-full sm:mt-32 lg:mt-40">
      <FadeIn>
        <Navigation />

        <div className="border-abbey-950/10 mb-20 mt-24 flex flex-wrap items-center justify-between gap-x-6 gap-y-4 border-t pt-12">
          <Link href="/" aria-label="Home">
            <Image
              src={logo}
              alt="Maxent Consulting Logo"
              className="h-12 w-auto"
              unoptimized
            />
          </Link>
          <p className="text-abbey-700 text-sm">
            © Maxent Consulting {new Date().getFullYear()}
          </p>
        </div>
      </FadeIn>
    </Container>
  )
}
