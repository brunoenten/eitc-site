import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'

function Section({ title, image, children }) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="before:text-abbey-300 after:text-abbey-950 font-display text-base font-semibold before:content-['/_'] after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="text-abbey-950 mt-2 font-display text-3xl font-medium tracking-tight sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Discover() {
  return (
    <Section title="Discover" image={{ src: imageWhiteboard }}>
      <div className="text-abbey-600 space-y-6 text-base">
        <p>
          We first take the time to analyse our clients project requirements to
          determine if and how we can efficiently help them.
        </p>
        <p>
          We then work closely with our clients to understand their{' '}
          <strong className="text-abbey-950 font-semibold">needs</strong> and
          goals, embedding ourselves in their every day operations to understand
          what makes their business tick.
        </p>
        <p>
          Finally, we propose a precise and detailed plan of the work to be
          carried out to achieve our clients objectives.
        </p>
      </div>

      <h3 className="text-abbey-950 mt-12 font-display text-base font-semibold">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Feasibility studies</TagListItem>
        <TagListItem>In-depth analysis</TagListItem>
        <TagListItem>Project planning</TagListItem>
      </TagList>
    </Section>
  )
}

function Build() {
  return (
    <Section title="Build" image={{ src: imageLaptop, shape: 1 }}>
      <div className="text-abbey-600 space-y-6 text-base">
        <p>
          We embrace agile methodologies and small iterations in our work, which
          brings a host of advantages.
        </p>
        <p>
          By breaking down complex projects into manageable, bite-sized tasks,
          teams can maintain a laser focus on delivering tangible value. This
          approach promotes transparency and collaboration, as stakeholders are
          continuously involved, ensuring their evolving needs are met.
        </p>
        <p>
          Rapid feedback loops enable quick course corrections, reducing the
          risk of costly errors. Moreover, small iterations enhance
          adaptability, allowing teams to embrace changing requirements and
          market dynamics.
        </p>
        <p>
          In the end, Agile fosters a culture of continuous improvement,
          ultimately resulting in faster, more efficient development cycles and
          higher-quality software products that align closely with user
          expectations.
        </p>
      </div>

      <Blockquote
        author={{ name: 'Denis Marinho', role: 'CFO of Skiset' }}
        className="mt-12"
      >
        MaxentConsulting were regular and consistent with their progress
        updates, allowing us to make necessary adjustments that we had not
        initially planned.
      </Blockquote>
    </Section>
  )
}

function Deliver() {
  return (
    <Section title="Deliver" image={{ src: imageMeeting, shape: 2 }}>
      <div className="text-abbey-600 space-y-6 text-base">
        <p>
          Our agile approach to development means we can deliver frequent and
          consistent updates throughout the course of our work.
        </p>
        <p>
          The initial plan will evolve, be tweaked and enriched, and it is only
          when the system is fully operational and all parts of the plan have
          been completed that we consider our work to be complete.
        </p>
        <p>
          Once all these requirements are met, we ensure that your IT team is in
          a position to maintain and improve your project in the future.
        </p>
      </div>

      {/* <h3 className="mt-12 font-display text-base font-semibold text-abbey-950">
        Included in this phase
      </h3>
      <List className="mt-8">
        <ListItem title="Testing">
          Our projects always have 100% test coverage, which would be impressive
          if our tests weren’t as porous as a sieve.
        </ListItem>
        <ListItem title="Infrastructure">
          To ensure reliability we only use the best Digital Ocean droplets that
          $4 a month can buy.
        </ListItem>
        <ListItem title="Support">
          Because we hold the API keys for every critical service your business
          uses, you can expect a lifetime of support, and invoices, from us.
        </ListItem>
      </List> */}
    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="from-abbey-50 absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b">
        <GridPattern
          className="fill-abbey-100 stroke-abbey-950/5 absolute inset-0 h-full w-full [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Our values"
        title="Balancing reliability and innovation"
      >
        <p>
          We put our clients at the forefront of everything we do, delivering
          excellence tailored to your unique needs.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Transparency">
            Open and clear communication is our norm, keeping you informed and
            involved throughout the project lifecycle.
          </GridListItem>
          <GridListItem title="Collaboration">
            We work closely with your team, valuing collaboration as a key
            driver of successful projects.
          </GridListItem>
          <GridListItem title="Agility">
            Our adaptability enables us to pivot swiftly in response to changing
            requirements or market dynamics.
          </GridListItem>
          <GridListItem title="Proactive Problem-Solving">
            We anticipate challenges and address them before they become
            roadblocks, ensuring smooth project execution.
          </GridListItem>
          <GridListItem title="Long-Term Partnerships">
            We aim to establish lasting relationships with our clients,
            providing ongoing support and expertise.
          </GridListItem>
          <GridListItem title="Innovative">
            We continuously explore cutting-edge technologies and methodologies
            to provide you with the most innovative solutions.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata = {
  title: 'Our Process',
  description:
    'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Our process" title="How we work">
        <p>
          We believe in efficiency and maximizing our resources to provide the
          best value to our clients. In order to do so, we choose wisely the
          projects we work on.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        <Build />
        <Deliver />
      </div>

      <Values />

      <ContactSection />
    </>
  )
}
