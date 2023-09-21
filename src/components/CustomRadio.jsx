import { Radio, cn } from '@nextui-org/react'

export const CustomRadio = (props) => {
  const { children, ...otherProps } = props

  let radioComponent
  if (props.withicon) {
    radioComponent = (
      <Radio
        {...otherProps}
        classNames={{
          base: cn(
            'flex bg-content1 items-center lg:items-end justify-center',
            'max-w-[800px] cursor-pointer rounded-lg gap-6 px-4 py-8 border-2 border-abbey-100 hover:border-abbey-950',
            'data-[selected=true]:border-abbey-950',
          ),
          wrapper: 'hidden',
          labelWrapper: 'ml-0',
        }}
      >
        {children}
      </Radio>
    )
  } else {
    radioComponent = (
      <Radio
        {...otherProps}
        classNames={{
          base: cn(
            'inline-flex my-1 bg-content1 items-center justify-between',
            'flex-row-reverse max-w-[800px] cursor-pointer rounded-lg gap-4 px-4 py-8 border-2 border-abbey-100 hover:border-abbey-950',
            'data-[selected=true]:border-abbey-950',
          ),
        }}
      >
        {children}
      </Radio>
    )
  }

  return radioComponent
}
