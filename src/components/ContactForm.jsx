'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { CheckboxGroup, RadioGroup } from '@nextui-org/react'
import { IconContext } from 'react-icons'
import { Button, Card, CardBody } from '@nextui-org/react'
import {
  FcIdea,
  FcMoneyTransfer,
  FcOrganization,
  FcBusinessman,
} from 'react-icons/fc'

import { ContactFormSteps } from '@/components/ContactFormSteps'
import { TextInput } from '@/components/TextInput'
import { CustomCheckbox } from '@/components/CustomCheckbox'
import { CustomRadio } from '@/components/CustomRadio'
import { FadeIn } from '@/components/FadeIn'
import railsLogo from '@/images/tech-icons/rails.png'
import postgresLogo from '@/images/tech-icons/postgresql.png'
import nextLogo from '@/images/tech-icons/next.png'
import reactLogo from '@/images/tech-icons/react.png'
import microsoftsqlserverLogo from '@/images/tech-icons/microsoftsqlserver.svg'
import mysqlLogo from '@/images/tech-icons/mysql.png'
import nuxtLogo from '@/images/tech-icons/nuxt.png'
import vueLogo from '@/images/tech-icons/vue.png'
import nodeLogo from '@/images/tech-icons/node.png'
import tailwindLogo from '@/images/tech-icons/tailwindcss.svg'
import { isEmailValid } from '@/lib/email'
import { scrollToElement } from '@/lib/scroll'

function ServiceStep({ formData, setFormData }) {
  const updateFormData = (service) => {
    setFormData({ ...formData, service })
  }

  return (
    <FadeIn>
      <div className="mt-16">
        <label className="block text-2xl font-bold leading-6 text-abbey-950">
          What service do you need?
        </label>
        <RadioGroup
          defaultValue={formData.service}
          onValueChange={updateFormData}
          className="mt-10"
        >
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
      </div>
    </FadeIn>
  )
}

function TechnologyStep({ formData, setFormData }) {
  const [isInputDisplayed, setIsInputDisplayed] = useState(false)
  const inputRef = useRef()

  useEffect(() => {
    if (isInputDisplayed) inputRef.current.focus()
  }, [isInputDisplayed])

  const toggleInputDisplay = () => {
    if (!isInputDisplayed) setIsInputDisplayed(true)
  }

  const updateMainTechnos = (mainTechnologies) => {
    setFormData({
      ...formData,
      mainTechnologies: mainTechnologies.join(','),
    })
  }

  const updateSecondaryTechnos = (secondaryTechnologies) => {
    setFormData({
      ...formData,
      secondaryTechnologies: secondaryTechnologies.join(','),
    })
  }

  const updateAdditionalTechnos = (event) => {
    setFormData({
      ...formData,
      additionalTechnologies: event.target.value,
    })
  }

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
            defaultValue={formData.mainTechnologies.split(',')}
            onChange={updateMainTechnos}
            orientation="horizontal"
            classNames={{
              base: 'w-full mt-4',
            }}
          >
            <CustomCheckbox value="ruby-on-rails" icon={railsLogo} />
            <CustomCheckbox value="postgresql" icon={postgresLogo} />
            <CustomCheckbox value="next" icon={nextLogo} />
            <CustomCheckbox value="react" icon={reactLogo} />
            <CustomCheckbox
              value="tailwind"
              icon={tailwindLogo}
              name="tailwindcss"
            />
          </CheckboxGroup>
        </div>
        <div className="my-10 flex w-full flex-col gap-1">
          <p className="text-abbey-600">
            But we can also help you with those one:
          </p>
          <CheckboxGroup
            defaultValue={formData.secondaryTechnologies.split(',')}
            onChange={updateSecondaryTechnos}
            orientation="horizontal"
            classNames={{
              base: 'w-full mt-4',
            }}
          >
            <CustomCheckbox
              value="microsoft-sql-server"
              icon={microsoftsqlserverLogo}
            />
            <CustomCheckbox value="mysql" icon={mysqlLogo} />
            <CustomCheckbox value="nuxt" icon={nuxtLogo} />
            <CustomCheckbox value="vue" icon={vueLogo} name="Vue.js" />
            <CustomCheckbox value="node" icon={nodeLogo} />
          </CheckboxGroup>
        </div>
        <div className="mt-10 flex w-full flex-col gap-1">
          <span
            className={` text-abbey-600  ${
              isInputDisplayed
                ? ''
                : 'cursor-pointer underline hover:text-abbey-800'
            }`}
            onClick={toggleInputDisplay}
          >
            {isInputDisplayed ? 'Feel free to do so:' : 'Want to add more?'}
          </span>

          <TextInput
            label="Add technologies"
            type="text"
            name="additionalTechnologies"
            value={formData.additionalTechnologies}
            onChange={updateAdditionalTechnos}
            ref={inputRef}
            className={isInputDisplayed ? 'mt-4 block' : 'hidden'}
          />
        </div>
      </div>
    </FadeIn>
  )
}

const CompanyStep = ({ formData, setFormData }) => {
  const updateCompany = (company) => {
    setFormData({ ...formData, company })
  }

  const updateEmployees = (employees) => {
    setFormData({ ...formData, employees })
  }

  return (
    <FadeIn>
      <div className="mt-16">
        <label className="block text-2xl font-bold leading-6 text-abbey-950">
          Tell us more about your company
        </label>
        <div className="my-10 flex w-full flex-col gap-1">
          <p className="text-lg font-semibold text-abbey-900">
            Your company is a:
          </p>
          <RadioGroup
            defaultValue={formData.company}
            onValueChange={updateCompany}
            classNames={{
              wrapper: 'grid grid-cols-1 gap-x-8 gap-y-4 lg:grid-cols-3 pt-6',
            }}
            orientation="horizontal"
          >
            <CustomRadio value="Pre-Funding Startup" withicon="true">
              <div className="flex flex-col items-center justify-center">
                <IconContext.Provider value={{ size: '2.5rem' }}>
                  <FcIdea />
                </IconContext.Provider>
                <span className="mt-4">Pre-Funding Startup</span>
              </div>
            </CustomRadio>
            <CustomRadio value="Post-Funding Startup" withicon="true">
              <div className="flex flex-col items-center justify-center">
                <IconContext.Provider value={{ size: '2.5rem' }}>
                  <FcMoneyTransfer />
                </IconContext.Provider>
                <span className="mt-4">Post-Funding Startup</span>
              </div>
            </CustomRadio>
            <CustomRadio value="Established Business" withicon="true">
              <div className="flex flex-col items-center justify-center">
                <IconContext.Provider value={{ size: '2.5rem' }}>
                  <FcOrganization />
                </IconContext.Provider>
                <span className="mt-4">Established Business</span>
              </div>
            </CustomRadio>
          </RadioGroup>
        </div>
        <div className="mt-16 flex w-full flex-col gap-1">
          <p className="text-lg font-semibold text-abbey-900">
            How many employees do you currently have?
          </p>
          <RadioGroup
            defaultValue={formData.employees}
            onValueChange={updateEmployees}
            classNames={{
              wrapper: 'grid grid-cols-1 gap-x-8 gap-y-4 lg:grid-cols-3 pt-6',
            }}
            orientation="horizontal"
          >
            <CustomRadio value="Less than 10" withicon="true">
              <div className="flex flex-col items-center justify-center">
                <IconContext.Provider value={{ size: '2rem' }}>
                  <FcBusinessman />
                </IconContext.Provider>
                <span className="mt-4">Less than 10</span>
              </div>
            </CustomRadio>
            <CustomRadio value="Between 10 and 50" withicon="true">
              <div className="flex flex-col items-center justify-center">
                <IconContext.Provider value={{ size: '2.5rem' }}>
                  <FcBusinessman />
                </IconContext.Provider>
                <span className="mt-4">Between 10 and 50</span>
              </div>
            </CustomRadio>
            <CustomRadio value="More than 50" withicon="true">
              <div className="flex flex-col items-center justify-center">
                <IconContext.Provider value={{ size: '3rem' }}>
                  <FcBusinessman />
                </IconContext.Provider>
                <span className="mt-4">More than 50</span>
              </div>
            </CustomRadio>
          </RadioGroup>
        </div>
      </div>
    </FadeIn>
  )
}

const EmailStep = ({ formData, setFormData, isFormSubmitted, error }) => {
  const nameInputRef = useRef()

  useEffect(() => {
    nameInputRef.current.focus()
  }, [])

  const updateName = (event) => {
    setFormData({
      ...formData,
      name: event.target.value,
    })
  }

  const updateEmail = (event) => {
    setFormData({
      ...formData,
      email: event.target.value,
    })
  }

  return (
    <FadeIn>
      <div className="mt-16">
        <label className="block text-2xl font-bold leading-6 text-abbey-950">
          Confirm Submission
        </label>
        <p className="text-abbey-600">
          Thanks for taking the time to complete this form.
        </p>
        {isFormSubmitted && error && (
          <Notification type="error" className="mt-10">
            <p>
              An error occurred while submitting the form, please try again.
            </p>
          </Notification>
        )}
        <TextInput
          label="Full Name"
          type="text"
          name="name"
          ref={nameInputRef}
          value={formData.name}
          onChange={updateName}
          className="mt-10"
        />
        <TextInput
          label="Email"
          type="email"
          name="email"
          autoComplete="email"
          value={formData.email}
          onChange={updateEmail}
          className="mt-10"
        />
      </div>
    </FadeIn>
  )
}

const Notification = ({ type, children, className }) => {
  return (
    <Card
      className={`rounded-lg text-white ${className} ${
        type === 'success' ? 'bg-skyblue' : 'bg-red-500'
      }`}
    >
      <CardBody className="text-center">{children}</CardBody>
    </Card>
  )
}

export function ContactForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    service: '',
    mainTechnologies: '',
    secondaryTechnologies: '',
    additionalTechnologies: '',
    company: '',
    employees: '',
    name: '',
    email: '',
  })
  const [error, setError] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)

  const checkValidity = () => {
    if (currentStep === 1 && formData.service.length > 0) {
      setError(false)
    } else if (
      currentStep === 2 &&
      (formData.mainTechnologies.length > 0 ||
        formData.additionalTechnologies.length > 0)
    ) {
      setError(false)
    } else if (
      currentStep === 3 &&
      formData.company.length > 0 &&
      formData.employees.length > 0
    ) {
      setError(false)
    } else if (
      currentStep === 4 &&
      formData.name.length > 0 &&
      isEmailValid(formData.email)
    ) {
      setError(false)
    } else {
      setError(true)
    }
  }

  useEffect(() => {
    checkValidity()
  }, [formData, currentStep])

  let stepForm

  if (currentStep === 1) {
    stepForm = <ServiceStep formData={formData} setFormData={setFormData} />
  } else if (currentStep === 2) {
    stepForm = <TechnologyStep formData={formData} setFormData={setFormData} />
  } else if (currentStep === 3) {
    stepForm = <CompanyStep formData={formData} setFormData={setFormData} />
  } else if (currentStep === 4) {
    stepForm = (
      <EmailStep
        formData={formData}
        setFormData={setFormData}
        isFormSubmitted={isFormSubmitted}
        error={error}
      />
    )
  }

  async function onSubmit(event) {
    event.preventDefault()
    if (error) return
    if (currentStep < 4) {
      return setCurrentStep(currentStep + 1)
    }

    try {
      setIsLoading(true)
      const response = await fetch('/api/contact', {
        method: 'post',
        body: JSON.stringify(formData),
      })
      if (!response.ok) {
        setIsLoading(false)
        setIsFormSubmitted(true)
        setError(true)
        throw new Error(`Invalid response: ${response.status}`)
      }
      setIsLoading(false)
      setIsFormSubmitted(true)
      scrollToElement('formContainer')
    } catch (err) {
      setIsLoading(false)
      setIsFormSubmitted(true)
      setError(true)
    }
  }

  return (
    <FadeIn className="lg:order-last lg:col-span-2">
      <section id="formContainer">
        {isFormSubmitted ? (
          <Notification type="success">
            <p>Thanks, your submission has been received.</p>
            <p>We'll get back to you within 48 hours.</p>
          </Notification>
        ) : (
          <form onSubmit={onSubmit}>
            <h2 className="font-display text-base font-semibold text-abbey-950">
              Work inquiries
            </h2>
            <ContactFormSteps
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
              setError={setError}
            />
            {stepForm}

            <div className="flex justify-end">
              <Button
                type="submit"
                color="primary"
                className="mt-10 px-4 py-1.5 text-sm font-semibold text-white transition hover:bg-abbey-800 disabled:cursor-not-allowed disabled:bg-abbey-300"
                disabled={error}
                isLoading={isLoading}
                radius="full"
              >
                {currentStep === 4 ? 'Submit' : 'Next Step'}
              </Button>
            </div>
          </form>
        )}
      </section>
    </FadeIn>
  )
}
