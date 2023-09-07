'use client'

import { useId } from 'react'

import { FadeIn } from '@/components/FadeIn'
import { Button } from '@/components/Button'

function TextInput({ label, ...props }) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className="border-abbey-300 text-abbey-950 focus:border-abbey-950 focus:ring-abbey-950/5 peer block w-full border bg-transparent px-6 pb-4 pt-12 text-base/6 ring-4 ring-transparent transition focus:outline-none group-first:rounded-t-2xl group-last:rounded-b-2xl"
      />
      <label
        htmlFor={id}
        className="text-abbey-500 peer-focus:text-abbey-950 peer-[:not(:placeholder-shown)]:text-abbey-950 pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold"
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
        placeholder="Describe your project"
        className="border-abbey-300 text-abbey-950 placeholder-abbey-500 focus:border-abbey-950 focus:ring-abbey-950/5 peer block w-full border bg-transparent px-6 pb-4 pt-12 text-base/6 ring-4 ring-transparent transition focus:outline-none group-first:rounded-t-2xl group-last:rounded-b-2xl"
      />
    </div>
  )
}

export function ContactForm() {
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
    <FadeIn className="lg:order-last">
      <form onSubmit={onSubmit}>
        <h2 className="text-abbey-950 font-display text-base font-semibold">
          Work inquiries
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
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
          {/* <div className="border border-abbey-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
              <fieldset>
                <legend className="text-base/6 text-abbey-500">Budget</legend>
                <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
                  <RadioInput label="$25K – $50K" name="budget" value="25" />
                  <RadioInput label="$50K – $100K" name="budget" value="50" />
                  <RadioInput label="$100K – $150K" name="budget" value="100" />
                  <RadioInput label="More than $150K" name="budget" value="150" />
                </div>
              </fieldset>
            </div> */}
        </div>
        <Button type="submit" className="mt-10">
          Submit my project
        </Button>
      </form>
    </FadeIn>
  )
}
