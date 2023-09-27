import { useState, useRef, useEffect } from 'react'
import { CheckboxGroup } from '@nextui-org/react'

import { FadeIn } from '@/components/FadeIn'
import { CustomCheckbox } from '@/components/CustomCheckbox'
import { TextInput } from '@/components/TextInput'
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

export function ContactFormStepTechnology({ formData, setFormData }) {
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
