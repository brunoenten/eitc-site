import { useId, forwardRef } from 'react'

export const TextArea = forwardRef(({ label, ...props }, ref) => {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <textarea
        id={id}
        {...props}
        rows={8}
        ref={ref}
        className="peer block w-full rounded-2xl border border-abbey-300 bg-transparent px-6 pb-4 pt-6 text-base/6 text-abbey-950 placeholder-abbey-500 ring-4 ring-transparent transition focus:border-abbey-950 focus:outline-none focus:ring-abbey-950/5"
      />
    </div>
  )
})
