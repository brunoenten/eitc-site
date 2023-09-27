import { RadioGroup } from '@nextui-org/react'
import { IconContext } from 'react-icons'
import {
  FcIdea,
  FcMoneyTransfer,
  FcOrganization,
  FcBusinessman,
} from 'react-icons/fc'

import { FadeIn } from '@/components/FadeIn'
import { CustomRadio } from '@/components/CustomRadio'

export const ContactFormStepCompany = ({ formData, setFormData }) => {
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
