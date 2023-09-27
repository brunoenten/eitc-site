'use client'

import { useState, useEffect } from 'react'
import { Button } from '@nextui-org/react'

import { ContactFormSteps } from '@/components/ContactFormSteps'
import { ContactFormStepService } from '@/components/ContactFormStepService'
import { ContactFormStepTechnology } from '@/components/ContactFormStepTechnology'
import { ContactFormStepCompany } from '@/components/ContactFormStepCompany'
import { ContactFormStepEmail } from '@/components/ContactFormStepEmail'
import { FadeIn } from '@/components/FadeIn'
import { Notification } from '@/components/Notification'
import { isEmailValid } from '@/lib/email'
import { scrollToElement } from '@/lib/scroll'

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
    stepForm = (
      <ContactFormStepService formData={formData} setFormData={setFormData} />
    )
  } else if (currentStep === 2) {
    stepForm = (
      <ContactFormStepTechnology
        formData={formData}
        setFormData={setFormData}
      />
    )
  } else if (currentStep === 3) {
    stepForm = (
      <ContactFormStepCompany formData={formData} setFormData={setFormData} />
    )
  } else if (currentStep === 4) {
    stepForm = (
      <ContactFormStepEmail
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
