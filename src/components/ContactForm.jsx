'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { CheckboxGroup, RadioGroup } from '@nextui-org/react'
import debounce from 'lodash.debounce'

import { ContactFormSteps } from '@/components/ContactFormSteps'
import { TextInput } from '@/components/TextInput'
import { TextArea } from '@/components/TextArea'
import { CustomCheckbox } from '@/components/CustomCheckbox'
import { CustomRadio } from '@/components/CustomRadio'
import { FadeIn } from '@/components/FadeIn'
import { Button } from '@/components/Button'
import railsLogo from '@/images/tech-icons/rails.png'
import postgresLogo from '@/images/tech-icons/postgresql.png'
import nextLogo from '@/images/tech-icons/next.png'
import reactLogo from '@/images/tech-icons/react.png'
import { isEmailValid } from '@/lib/email'

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
  const updateMainTechnos = (mainTechnologies) => {
    setFormData({
      ...formData,
      mainTechnologies: mainTechnologies.join(','),
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
          value={formData.additionalTechnologies}
          onChange={updateAdditionalTechnos}
        />
      </div>
    </FadeIn>
  )
}

const ProjectStep = ({ formData, setFormData }) => {
  const projectInputRef = useRef()

  useEffect(() => {
    projectInputRef.current.focus()
  }, [])

  const updateProject = useCallback(
    debounce((event) => {
      setFormData({
        ...formData,
        project: event.target.value,
      })
    }, 500),
    [],
  )

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
          defaultValue={formData.project}
          ref={projectInputRef}
          onChange={updateProject}
        />
      </div>
    </FadeIn>
  )
}

const EmailStep = ({ formData, setFormData }) => {
  const emailInputRef = useRef()

  useEffect(() => {
    emailInputRef.current.focus()
  }, [])

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
        <p className="mb-10 text-abbey-600">
          Thanks for taking the time to complete this form.
        </p>
        <TextInput
          label="Email"
          type="email"
          name="email"
          ref={emailInputRef}
          autoComplete="email"
          value={formData.email}
          onChange={updateEmail}
        />
      </div>
    </FadeIn>
  )
}

export function ContactForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    service: '',
    mainTechnologies: '',
    additionalTechnologies: '',
    project: '',
    email: '',
  })
  const [error, setError] = useState(true)

  const checkValidity = () => {
    if (currentStep === 1 && formData.service.length > 0) {
      setError(false)
    } else if (
      currentStep === 2 &&
      (formData.mainTechnologies.length > 0 ||
        formData.additionalTechnologies.length > 0)
    ) {
      setError(false)
    } else if (currentStep === 3 && formData.project.length > 10) {
      setError(false)
    } else if (currentStep === 4 && isEmailValid(formData.email)) {
      setError(false)
    } else {
      setError(true)
    }
  }

  useEffect(() => {
    if (!error) return
    checkValidity()
  }, [formData])

  let stepForm
  if (currentStep === 1) {
    stepForm = <ServiceStep formData={formData} setFormData={setFormData} />
  } else if (currentStep === 2) {
    stepForm = <TechnologyStep formData={formData} setFormData={setFormData} />
  } else if (currentStep === 3) {
    stepForm = <ProjectStep formData={formData} setFormData={setFormData} />
  } else {
    stepForm = <EmailStep formData={formData} setFormData={setFormData} />
  }

  async function onSubmit(event) {
    event.preventDefault()

    if (error) return

    if (currentStep < 4) {
      checkValidity()
      return setCurrentStep(currentStep + 1)
    }

    console.log('Submit form', formData)

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
        <ContactFormSteps
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          setError={setError}
        />
        {stepForm}
        <div className="flex justify-end">
          <Button type="submit" className="mt-10" disabled={error}>
            {currentStep === 4 ? 'Submit' : 'Next Step'}
          </Button>
        </div>
      </form>
    </FadeIn>
  )
}
