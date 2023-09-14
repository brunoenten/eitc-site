'use client'

import {
  useId,
  useState,
  useRef,
  useEffect,
  createElement,
  forwardRef,
} from 'react'
import { CheckboxGroup, RadioGroup, Radio, cn } from '@nextui-org/react'
import { IconContext } from 'react-icons'
import {
  RiCustomerService2Line,
  RiCodeSSlashLine,
  RiSlideshowLine,
  RiMailOpenLine,
} from 'react-icons/ri'

import { CustomCheckbox } from './CustomCheckbox'
import { FadeIn } from '@/components/FadeIn'
import { Button } from '@/components/Button'
import railsLogo from '@/images/tech-icons/rails.png'
import postgresLogo from '@/images/tech-icons/postgresql.png'
import nextLogo from '@/images/tech-icons/next.png'
import reactLogo from '@/images/tech-icons/react.png'

const TextInput = forwardRef(({ label, ...props }, ref) => {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        ref={ref}
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
})

const TextArea = forwardRef(({ label, ...props }, ref) => {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <textarea
        id={id}
        {...props}
        rows={8}
        ref={ref}
        className="peer block w-full rounded-2xl border border-abbey-300 bg-transparent px-6 pb-4 pt-6 text-base/6 text-abbey-950 placeholder-abbey-500 ring-4 ring-transparent transition focus:border-abbey-950 focus:outline-none focus:ring-abbey-950/5"
      />
    </div>
  )
})

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
  { id: 1, name: 'Service', icon: RiCustomerService2Line },
  { id: 2, name: 'Technologies', icon: RiCodeSSlashLine },
  { id: 3, name: 'Project', icon: RiSlideshowLine },
  { id: 4, name: 'Email', icon: RiMailOpenLine },
]

function FormSteps({ currentStep, setCurrentStep }) {
  return (
    <nav aria-label="Progress" className="mt-10">
      <ol
        role="list"
        className="divide-y divide-abbey-100 rounded-lg border-2 border-abbey-100 p-4 md:flex md:divide-x-2 md:divide-y-0"
      >
        {steps.map((step, stepIdx) => (
          <li key={step.name} className="relative md:flex md:flex-1">
            {step.id < currentStep ? (
              <div
                onClick={() => setCurrentStep(+step.id)}
                className="group flex w-full items-center"
              >
                <span className="flex items-center px-6 text-sm font-medium">
                  <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-sky-50">
                    <IconContext.Provider
                      value={{
                        size: '1.5rem',
                        className: 'text-skyblue',
                      }}
                    >
                      <div>{createElement(step.icon)}</div>
                    </IconContext.Provider>
                  </span>
                  <span className="ml-4 font-medium text-abbey-500 group-hover:text-abbey-900">
                    {step.name}
                  </span>
                </span>
              </div>
            ) : step.id === currentStep ? (
              <div
                onClick={() => setCurrentStep(+step.id)}
                className="flex items-center px-6 text-sm font-medium"
              >
                <span className="bg-skyblue flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full ">
                  <IconContext.Provider
                    value={{
                      size: '1.5rem',
                      className: 'text-white',
                    }}
                  >
                    <div>{createElement(step.icon)}</div>
                  </IconContext.Provider>
                </span>
                <div className="ml-4 font-bold">
                  <p className="text-skyblue">Step {currentStep}/4</p>
                  <p className="text-abbey-950">{step.name}</p>
                </div>
              </div>
            ) : (
              <div
                onClick={() => setCurrentStep(+step.id)}
                className="group flex items-center"
              >
                <span className="flex items-center px-6 text-sm font-medium">
                  <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-abbey-100 ">
                    <IconContext.Provider
                      value={{
                        size: '1.5rem',
                        className: 'text-abbey-500 group-hover:text-abbey-900',
                      }}
                    >
                      <div>{createElement(step.icon)}</div>
                    </IconContext.Provider>
                  </span>
                  <span className="ml-4 font-medium text-abbey-500 group-hover:text-abbey-900">
                    {step.name}
                  </span>
                </span>
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

const ProjectStep = ({ setCurrentStep }) => {
  const projectInputRef = useRef()

  useEffect(() => {
    projectInputRef.current.focus()
  }, [])

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
          label="Project description"
          name="project"
          ref={projectInputRef}
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

const EmailStep = () => {
  const emailInputRef = useRef()

  useEffect(() => {
    emailInputRef.current.focus()
  }, [])

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
          ref={emailInputRef}
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
