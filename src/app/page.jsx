import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoReTokFull from '@/images/clients/retok/logo-full.svg'
import imageLaptop from '@/images/laptop.jpg'
import proluceoScreenshot from '@/images/project-app-screenshot.png'
import { loadCaseStudies } from '@/lib/mdx'

function CaseStudies({ caseStudies }) {
  return (
    <>
      <SectionIntro
        title="Our technology savviness at your service"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Infusing our technological expertise, we stand ready to elevate your
          experience with innovative solutions tailored to your needs.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="ring-abbey-950/5 hover:bg-abbey-50 relative flex w-full flex-col rounded-3xl p-6 ring-1 transition sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="text-abbey-950 mt-6 flex gap-x-2 text-sm">
                  Case study
                </p>
                <p className="text-abbey-950 mt-6 font-display text-2xl font-semibold">
                  {caseStudy.title}
                </p>
                <p className="text-abbey-600 mt-4 text-base">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="We help you build, improve or migrate your IT system."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Our interventions allows you to punch through barriers to entry by
          giving you an edge in term of cost/performance ratio, helping you
          become major actor in your industry.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Proof of Concept development">
              We deliver PoC application that is ready to scale by design,
              highly performant and focused on the user experience.
            </ListItem>
            <ListItem title="Database usage audit">
              We can prevent the need to rewrite a webapp that didn't scale by
              targeting specific queries that required advanced SQL development
              to make them scalable.
            </ListItem>
            <ListItem title="Evaluation of the relevance of a given technology to an existing IT system">
              We know how difficult and costly it is to maintain an outdated
              application or an app using the wrong technology so we help you
              migrate to a modern solution with no pain.
            </ListItem>
            <ListItem title="Enhance User Experience">
              We understand how frustrating a slow or unintuitive application
              can be for the user, which is why we constantly focus on its
              satisfaction.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

function Proluceo() {
  return (
    <>
      <SectionIntro
        title="Meet Proluceo, our open source web ERP"
        className="mt-24sm:mt-32 lg:mt-40"
      >
        <p>
          Having worked with a number of startups and SMEs, we realized that the
          web ERPs available on the market were outdated, counter-intuitive, and
          offered too many features for small businesses.
        </p>
        <p className="mt-4">
          That's why we're currently developing our own web ERP, whose code is
          open-source and can be found on{' '}
          <a
            href="https://github.com/proluceo"
            target="_blank"
            rel="noreferrer"
            className="text-abbey-950 hover:text-abbey-700 font-semibold transition"
            aria-label={`Proluceo source code on Github`}
          >
            Github
          </a>
          .
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeIn>
          <div className="relative overflow-hidden">
            <Image
              src={proluceoScreenshot}
              alt="Proluceo app screenshot"
              class="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
              width="2432"
              height="1442"
            />
            <div class="relative" aria-hidden="true">
              <div class="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]"></div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </>
  )
}

export const metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="text-abbey-950 font-display text-5xl font-medium tracking-tight [text-wrap:balance] sm:text-7xl">
            Crafting Apps for Impact: Scalability, UX, Performance Aligned.
          </h1>
          <p className="text-abbey-600 mt-6 text-xl">
            We provide R&D services to European SMEs seeking to replace outdated
            high maintenance and low performance web applications with state of
            the art ones.
          </p>
        </FadeIn>
      </Container>

      <Services />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'ReTok', logo: logoReTokFull }}
      >
        The MaxentConsulting team exceeded our expectations, enabling us to
        achieve our goals much more quickly than expected.
      </Testimonial>

      <CaseStudies caseStudies={caseStudies} />

      <Proluceo />

      <ContactSection />
    </>
  )
}
