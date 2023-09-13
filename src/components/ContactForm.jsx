'use client'

import { useId, useState } from 'react'
import { CheckboxGroup, RadioGroup, Radio, cn } from '@nextui-org/react'
import { CustomCheckbox } from './CustomCheckbox'

import { FadeIn } from '@/components/FadeIn'
import { Button } from '@/components/Button'
import railsLogo from '@/images/tech-icons/rails.png'
import postgresLogo from '@/images/tech-icons/postgresql.png'
import nextLogo from '@/images/tech-icons/next.png'
import reactLogo from '@/images/tech-icons/react.png'
// import vueLogo from '@/images/tech-icons/vue.png'
// import nodeLogo from '@/images/tech-icons/node.png'
// import nuxtLogo from '@/images/tech-icons/nuxt.png'

function TextInput({ label, ...props }) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className="peer block w-full rounded-2xl border border-abbey-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-abbey-950 ring-4 ring-transparent transition focus:border-abbey-950 focus:outline-none focus:ring-abbey-950/5"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-abbey-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-abbey-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-abbey-950"
      >
        {label}
      </label>
    </div>
  )
}

function TextArea({ label, ...props }) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <textarea
        id={id}
        {...props}
        rows={8}
        className="peer block w-full rounded-2xl border border-abbey-300 bg-transparent px-6 pb-4 pt-6 text-base/6 text-abbey-950 placeholder-abbey-500 ring-4 ring-transparent transition focus:border-abbey-950 focus:outline-none focus:ring-abbey-950/5"
      />
    </div>
  )
}

export const CustomRadio = (props) => {
  const { children, ...otherProps } = props

  return (
    <Radio
      {...otherProps}
      classNames={{
        base: cn(
          'inline-flex my-1 bg-content1 items-center justify-between',
          'flex-row-reverse max-w-[800px] cursor-pointer rounded-lg gap-4 px-4 py-8 border-2 border-abbey-100 hover:border-abbey-950',
          'data-[selected=true]:border-abbey-950',
        ),
      }}
    >
      {children}
    </Radio>
  )
}

const steps = [
  { id: 1, name: 'Service' },
  { id: 2, name: 'Technologies' },
  { id: 3, name: 'Project' },
  { id: 4, name: 'Email' },
]

function FormSteps({ currentStep, setCurrentStep }) {
  return (
    <nav aria-label="Progress" className="mt-10">
      <ol role="list" className="space-y-4 md:flex md:space-x-8 md:space-y-0">
        {steps.map((step) => (
          <li key={step.name} className="md:flex-1">
            {step.id < currentStep ? (
              <div
                onClick={() => setCurrentStep(+step.id)}
                className="group flex cursor-pointer flex-col border-l-4 border-abbey-600 py-2 pl-4 hover:border-abbey-800 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4"
              >
                <span className="text-sm font-medium text-abbey-600 group-hover:text-abbey-800">
                  Step {step.id}
                </span>
                <span className="text-sm font-medium">{step.name}</span>
              </div>
            ) : step.id === currentStep ? (
              <div
                onClick={() => setCurrentStep(+step.id)}
                className="flex cursor-pointer flex-col border-l-4 border-abbey-600 py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4"
              >
                <span className="text-sm font-medium text-abbey-600">
                  Step {step.id}
                </span>
                <span className="text-sm font-medium">{step.name}</span>
              </div>
            ) : (
              <div
                onClick={() => setCurrentStep(+step.id)}
                className="group flex cursor-pointer flex-col border-l-4 border-abbey-200 py-2 pl-4 hover:border-abbey-300 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4"
              >
                <span className="text-sm font-medium text-abbey-500 group-hover:text-abbey-700">
                  Step {step.id}
                </span>
                <span className="text-sm font-medium">{step.name}</span>
              </div>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

function ServiceStep({ setCurrentStep }) {
  return (
    <FadeIn>
      <div className="mt-16">
        <label className="block text-2xl font-bold leading-6 text-abbey-950">
          What service do you need?
        </label>
        <RadioGroup className="mt-10">
          <CustomRadio value="Proof of Concept development">
            Proof of Concept development
          </CustomRadio>
          <CustomRadio value="Database usage audit">
            Database usage audit
          </CustomRadio>
          <CustomRadio value="Evaluation of the relevance of a given technology to an existing IT system">
            Evaluation of the relevance of a given technology to an existing IT
            system.
          </CustomRadio>
          <CustomRadio value="Enhance User Experience">
            Enhance User Experience
          </CustomRadio>
        </RadioGroup>
        <div className="flex justify-end">
          <Button onClick={() => setCurrentStep(2)} className="mt-10">
            Next step
          </Button>
        </div>
      </div>
    </FadeIn>
  )
}

function TechnologyStep({ setCurrentStep }) {
  const [groupSelected, setGroupSelected] = useState([])

  return (
    <FadeIn>
      <div className="mt-16">
        <label className="block text-2xl font-bold leading-6 text-abbey-950">
          What technologies do you work with?
        </label>
        <div className="my-10 flex w-full flex-col gap-1">
          <p className="text-abbey-600">
            These are the one we love and master:
          </p>
          <CheckboxGroup
            value={groupSelected}
            onChange={setGroupSelected}
            orientation="horizontal"
            classNames={{
              base: 'w-full',
            }}
          >
            <CustomCheckbox value="ruby-on-rails" icon={railsLogo} />
            <CustomCheckbox value="postgresql" icon={postgresLogo} />
            <CustomCheckbox value="next" icon={nextLogo} />
            <CustomCheckbox value="react" icon={reactLogo} />
            {/* <CustomCheckbox value="node" icon={nodeLogo} />
            <CustomCheckbox value="nuxt" icon={nuxtLogo} />
            <CustomCheckbox name="Vue.js" value="vue" icon={vueLogo} /> */}
          </CheckboxGroup>
        </div>
        <TextInput
          label="But feel free to add more..."
          type="text"
          name="additionalTechnologies"
        />
        <div className="flex justify-end">
          <Button onClick={() => setCurrentStep(3)} className="mt-10">
            Next step
          </Button>
        </div>
      </div>
    </FadeIn>
  )
}

function ProjectStep({ setCurrentStep }) {
  return (
    <FadeIn>
      <div className="mt-16">
        <label className="block text-2xl font-bold leading-6 text-abbey-950">
          Tell us more about your project
        </label>
        <p className="mb-10 text-abbey-600">
          Give us as much relevant information as possible.
        </p>
        <TextArea
          label="Email"
          type="email"
          name="email"
          autoComplete="email"
        />
        <div className="flex justify-end">
          <Button onClick={() => setCurrentStep(4)} className="mt-10">
            Next step
          </Button>
        </div>
      </div>
    </FadeIn>
  )
}

function EmailStep() {
  return (
    <FadeIn>
      <div className="mt-16">
        <label className="block text-2xl font-bold leading-6 text-abbey-950">
          Confirm Submission
        </label>
        <p className="mb-10 text-abbey-600">
          Thanks for taking the time to complete this form.
        </p>
        <TextInput
          label="Email"
          type="email"
          name="email"
          autoComplete="email"
        />
      </div>
    </FadeIn>
  )
}

export function ContactForm() {
  const [currentStep, setCurrentStep] = useState(1)
  let stepForm
  if (currentStep === 1) {
    stepForm = <ServiceStep setCurrentStep={setCurrentStep} />
  } else if (currentStep === 2) {
    stepForm = <TechnologyStep setCurrentStep={setCurrentStep} />
  } else if (currentStep === 3) {
    stepForm = <ProjectStep setCurrentStep={setCurrentStep} />
  } else {
    stepForm = <EmailStep />
  }

  async function onSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.target)
    console.log(JSON.stringify(formData))
    try {
      const response = await fetch('/api/contact', {
        method: 'post',
        body: formData,
      })
      if (!response.ok) {
        throw new Error(`Invalid response: ${response.status}`)
      }
      alert('Thanks for contacting us, we will get back to you soon!')
    } catch (err) {
      console.error(err)
      alert("We can't submit the form, try again later?")
    }
  }

  return (
    <FadeIn className="lg:order-last lg:col-span-2">
      <form onSubmit={onSubmit}>
        <h2 className="font-display text-base font-semibold text-abbey-950">
          Work inquiries
        </h2>
        <FormSteps currentStep={currentStep} setCurrentStep={setCurrentStep} />
        {stepForm}
        {/* <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput label="Name" name="name" autoComplete="name" />
          <TextInput
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
          />
          <TextInput
            label="Company"
            name="company"
            autoComplete="organization"
          />
          <TextInput label="Phone" type="tel" name="phone" autoComplete="tel" />
          <TextArea label="Describe your project" name="message" />
          <div className="border-abbey-300 border px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
            <fieldset>
              <legend className="text-abbey-500 text-base/6">Budget</legend>
              <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
                <RadioInput label="$25K – $50K" name="budget" value="25" />
                <RadioInput label="$50K – $100K" name="budget" value="50" />
                <RadioInput label="$100K – $150K" name="budget" value="100" />
                <RadioInput label="More than $150K" name="budget" value="150" />
              </div>
            </fieldset>
          </div>
        </div>
        <Button type="submit" className="mt-10">
          Submit my project
        </Button> */}
        {currentStep === 4 ? (
          <div className="flex justify-end">
            <Button type="submit" className="mt-10">
              Submit
            </Button>
          </div>
        ) : (
          ''
        )}
      </form>
    </FadeIn>
  )
}
