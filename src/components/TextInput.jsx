import { useId, forwardRef } from 'react'

export const TextInput = forwardRef(({ label, ...props }, ref) => {
  let id = useId()
  console.log(props)

  return (
    <div
      className={`group relative z-0 transition-all focus-within:z-10 ${props.className}`}
    >
      <input
        type="text"
        id={id}
        {...props}
        ref={ref}
        className="peer block w-full rounded-2xl border border-abbey-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-abbey-950 ring-4 ring-transparent transition focus:border-abbey-950 focus:outline-none focus:ring-abbey-950/5"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-abbey-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-abbey-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-abbey-950"
      >
        {label}
      </label>
    </div>
  )
})
