import { useRef, useEffect } from 'react'

import { FadeIn } from '@/components/FadeIn'
import { TextInput } from '@/components/TextInput'
import { Notification } from '@/components/Notification'

export const ContactFormStepEmail = ({
  formData,
  setFormData,
  isFormSubmitted,
  error,
}) => {
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
