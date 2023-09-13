import Image from 'next/image'
import { Checkbox, cn } from '@nextui-org/react'

export const CustomCheckbox = ({ name, icon, value }) => {
  return (
    <Checkbox
      aria-label={value}
      classNames={{
        base: cn(
          'inline-flex w-full bg-content1 m-0',
          'items-center justify-start',
          'cursor-pointer rounded-lg gap-2 p-4 border-2 border-abbey-100 hover:border-primary',
          'data-[selected=true]:border-primary',
        ),
        label: 'w-full',
      }}
      value={value}
    >
      <div className="flex items-center justify-center">
        <Image
          src={icon}
          alt={`${name} logo`}
          className="h-10 w-auto"
          unoptimized
        />
        {name ? <span className="ml-2">{name}</span> : ''}
      </div>
    </Checkbox>
  )
}
