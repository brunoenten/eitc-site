import { createElement } from 'react'
import { IconContext } from 'react-icons'
import {
  RiCustomerService2Line,
  RiCodeSSlashLine,
  RiBuilding4Line,
  RiMailOpenLine,
} from 'react-icons/ri'

const steps = [
  { id: 1, name: 'Service', icon: RiCustomerService2Line },
  { id: 2, name: 'Technologies', icon: RiCodeSSlashLine },
  { id: 3, name: 'Company', icon: RiBuilding4Line },
  { id: 4, name: 'Contact', icon: RiMailOpenLine },
]

export function ContactFormSteps({ currentStep, setCurrentStep, setError }) {
  const changeStep = (step) => {
    setError(false)
    setCurrentStep(+step.id)
  }

  return (
    <nav aria-label="Progress" className="mt-10">
      <ol
        role="list"
        className="divide-y divide-abbey-100 rounded-lg border-2 border-abbey-100 p-4 md:flex md:divide-x-2 md:divide-y-0"
      >
        {steps.map((step) => (
          <li key={step.name} className="relative md:flex md:flex-1">
            {step.id < currentStep ? (
              <div
                onClick={() => changeStep(step)}
                className="group flex w-full cursor-pointer items-center"
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
              <div className="flex cursor-pointer items-center px-6 text-sm font-medium">
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-skyblue ">
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
              <div className="group flex items-center">
                <span className="flex items-center px-6 text-sm font-medium">
                  <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-abbey-100 ">
                    <IconContext.Provider
                      value={{
                        size: '1.5rem',
                        className: 'text-abbey-500',
                      }}
                    >
                      <div>{createElement(step.icon)}</div>
                    </IconContext.Provider>
                  </span>
                  <span className="ml-4 font-medium text-abbey-500">
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
