import { RadioGroup } from '@nextui-org/react'

import { FadeIn } from '@/components/FadeIn'
import { CustomRadio } from '@/components/CustomRadio'

export function ContactFormStepService({ formData, setFormData }) {
  const updateService = (service) => {
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
          onValueChange={updateService}
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
