import Link from 'next/link'
import clsx from 'clsx'

export function Button({
  invert = false,
  disabled = false,
  className,
  children,
  ...props
}) {
  className = clsx(
    className,
    'inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition',
    invert
      ? 'bg-white text-abbey-950 hover:bg-abbey-200'
      : `text-white ${
          disabled
            ? 'bg-abbey-300 cursor-not-allowed'
            : 'bg-abbey-950 hover:bg-abbey-800'
        }`,
  )

  let inner = <span className="relative top-px">{children}</span>

  if (typeof props.href === 'undefined') {
    return (
      <button className={className} {...props}>
        {inner}
      </button>
    )
  }

  return (
    <Link className={className} {...props}>
      {inner}
    </Link>
  )
}
