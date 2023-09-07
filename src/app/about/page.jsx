import Image from 'next/image'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import imageBrunoEnten from '@/images/team/bruno-enten.jpg'
import imageMaximeLerasle from '@/images/team/maxime-lerasle.jpg'
import { loadArticles } from '@/lib/mdx'

function Culture() {
  return (
    <div className="bg-abbey-950 mt-24 rounded-4xl py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our culture"
        title="Balance your passion with a happy life."
        invert
      >
        <p>
          We are a group of like-minded people who share the same core values.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Loyalty" invert>
            Our team has been working together for more than 10 years, which
            improves efficiency of our team and satisfaction of our clients.
          </GridListItem>
          <GridListItem title="Trust" invert>
            We have open and honest communication, and we know we can rely on
            each other during challenging situations.
          </GridListItem>
          <GridListItem title="Compassion" invert>
            You never know what someone is going through at home and we make
            sure that everyone feels good at work.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

const team = [
  {
    title: 'Leadership',
    people: [
      {
        name: 'Bruno Enten',
        role: 'Co-Founder / CEO',
        image: { src: imageBrunoEnten },
      },
      {
        name: 'Maxime Lerasle',
        role: 'Co-Founder / CTO',
        image: { src: imageMaximeLerasle },
      },
    ],
  },
]

function Team() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        {team.map((group) => (
          <FadeInStagger key={group.title}>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="text-abbey-950 font-display text-2xl font-semibold">
                  {group.title}
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                >
                  {group.people.map((person) => (
                    <li key={person.name}>
                      <FadeIn>
                        <div className="bg-abbey-100 group relative overflow-hidden rounded-3xl">
                          <Image
                            alt=""
                            {...person.image}
                            className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                            <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                              {person.name}
                            </p>
                            <p className="mt-2 text-sm text-white">
                              {person.role}
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInStagger>
        ))}
      </div>
    </Container>
  )
}

export const metadata = {
  title: 'About Us',
  description:
    'We believe that our strength lies in our collaborative approach, which puts our clients at the center of everything we do.',
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <>
      <PageIntro eyebrow="About us" title="Our strength is collaboration">
        <p>
          We believe that our strength lies in our collaborative approach, which
          puts our clients at the center of everything we do.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            MaxentConsulting, previously Enten IT Consulting, was started in
            2009 by Bruno Enten. Maxime Lerasle joined the company in 2012 as an
            intern and then trained as a software engineer with senior
            developers working there.
          </p>
          <p>
            After more than 10 years working together, we have gradually
            specialised in complementary technologies to offer a high-quality
            service to our customers. We can count on a team of talented
            developers to bring the various projects we work on to a successful
            conclusion.
          </p>
        </div>
      </PageIntro>

      <Culture />

      <Team />

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="From the blog"
        intro=""
        pages={blogArticles}
      />

      <ContactSection />
    </>
  )
}
