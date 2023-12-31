import Image from 'next/image'
import Link from 'next/link'

import { Blockquote } from '@/components/Blockquote'
import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { Testimonial } from '@/components/Testimonial'
import logoSkisetFull from '@/images/clients/skiset/logo-full.png'
import { loadCaseStudies } from '@/lib/mdx'

function CaseStudies({ caseStudies }) {
  return (
    <Container className="mt-40">
      <FadeIn>
        <h2 className="text-abbey-950 font-display text-2xl font-semibold">
          Case studies
        </h2>
      </FadeIn>
      <div className="mt-10 space-y-20 sm:space-y-24 lg:space-y-32">
        {caseStudies.map((caseStudy) => (
          <FadeIn key={caseStudy.client}>
            <article>
              <Border className="grid grid-cols-3 gap-x-8 gap-y-8 pt-16">
                <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                  <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                    <Image
                      src={caseStudy.logo}
                      alt=""
                      className="h-16 w-16 flex-none"
                      unoptimized
                    />
                    <h3 className="text-abbey-950 mt-6 text-sm font-semibold sm:mt-0 lg:mt-8">
                      {caseStudy.client}
                    </h3>
                  </div>
                  <div className="mt-1 flex gap-x-4 sm:mt-0 lg:block">
                    <p className="text-abbey-950 after:text-abbey-300 text-sm tracking-tight after:ml-4 after:font-semibold after:content-['/'] lg:mt-2 lg:after:hidden">
                      {caseStudy.service}
                    </p>
                  </div>
                </div>
                <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
                  <p className="text-abbey-950 font-display text-4xl font-medium">
                    <Link href={caseStudy.href}>{caseStudy.title}</Link>
                  </p>
                  <div className="text-abbey-600 mt-6 space-y-6 text-base">
                    {caseStudy.summary.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  <div className="mt-8 flex">
                    <Button
                      href={caseStudy.href}
                      aria-label={`Read case study: ${caseStudy.client}`}
                    >
                      Read case study
                    </Button>
                  </div>
                  {caseStudy.testimonial && (
                    <Blockquote
                      author={caseStudy.testimonial.author}
                      className="mt-12"
                    >
                      {caseStudy.testimonial.content}
                    </Blockquote>
                  )}
                </div>
              </Border>
            </article>
          </FadeIn>
        ))}
      </div>
    </Container>
  )
}

// const clients = [
//   ['Phobia', logoPhobia],
//   ['Skiset', logoSkiset],
//   ['ReTok', logoRetok],
// ]

// function Clients() {
//   return (
//     <Container className="mt-24 sm:mt-32 lg:mt-40">
//       <FadeIn>
//         <h2 className="font-display text-2xl font-semibold text-abbey-950">
//           You’re in good company
//         </h2>
//       </FadeIn>
//       <FadeInStagger className="mt-10" faster>
//         <Border as={FadeIn} />
//         <ul
//           role="list"
//           className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-4"
//         >
//           {clients.map(([client, logo]) => (
//             <li key={client} className="group">
//               <FadeIn className="overflow-hidden">
//                 <Border className="pt-12 group-[&:nth-child(-n+2)]:-mt-px sm:group-[&:nth-child(3)]:-mt-px lg:group-[&:nth-child(4)]:-mt-px">
//                   <Image src={logo} alt={client} unoptimized />
//                 </Border>
//               </FadeIn>
//             </li>
//           ))}
//         </ul>
//       </FadeInStagger>
//     </Container>
//   )
// }

export const metadata = {
  title: 'Our Work',
  description:
    'Explore some of the biggest projects we have been working on the last few years.',
}

export default async function Work() {
  let caseStudies = await loadCaseStudies()

  return (
    <>
      <PageIntro
        eyebrow="Our work"
        title="Proven solutions for real-world problems."
      >
        <p>
          Explore some of the biggest projects we have been working on the last
          few years.
        </p>
      </PageIntro>

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Denis Marinho', logo: logoSkisetFull }}
      >
        We approached <em>MaxentConsulting</em> because we loved their past
        work. They delivered something remarkably similar in record time.
      </Testimonial>

      {/* <Clients /> */}

      <ContactSection />
    </>
  )
}
