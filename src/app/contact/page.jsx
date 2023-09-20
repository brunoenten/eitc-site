import Link from 'next/link'

import { Border } from '@/components/Border'
import { ContactForm } from '@/components/ContactForm'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'
import { PageIntro } from '@/components/PageIntro'
import { SocialMedia } from '@/components/SocialMedia'

// function RadioInput({ label, ...props }) {
//   return (
//     <label className="flex gap-x-3">
//       <input
//         type="radio"
//         {...props}
//         className="h-6 w-6 flex-none appearance-none rounded-full border border-abbey-950/20 outline-none checked:border-[0.5rem] checked:border-abbey-950 focus-visible:ring-1 focus-visible:ring-abbey-950 focus-visible:ring-offset-2"
//       />
//       <span className="text-base/6 text-abbey-950">{label}</span>
//     </label>
//   )
// }

function ContactDetails() {
  return (
    <FadeIn>
      <h2 className="font-display text-base font-semibold text-abbey-950">
        Our office
      </h2>

      <Offices className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2" />

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-abbey-950">
          Email us
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
          <Link
            href="mailto:contact@maxentconsulting.com"
            className="text-abbey-600 hover:text-abbey-950"
          >
            contact@maxentconsulting.com
          </Link>
        </div>
      </Border>

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-abbey-950">
          Follow us
        </h2>
        <SocialMedia className="mt-6" />
      </Border>
    </FadeIn>
  )
}

export const metadata = {
  title: 'Contact Us',
  description: 'Let us know what you would expect from us.',
}

export default function Contact() {
  return (
    <>
      <PageIntro eyebrow="Contact us" title="Let’s work together">
        <p>
          Please use the form below to find out if we can find a match, and
          we'll get back to you within 48 hours.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-3">
          <ContactForm />
          <ContactDetails />
        </div>
      </Container>
    </>
  )
}
