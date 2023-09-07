import clsx from 'clsx'

export function TagList({ children, className }) {
  return (
    <ul role="list" className={clsx(className, 'flex flex-wrap gap-4')}>
      {children}
    </ul>
  )
}

export function TagListItem({ children, className }) {
  return (
    <li
      className={clsx(
        'bg-abbey-100 text-abbey-600 rounded-full px-4 py-1.5 text-base',
        className,
      )}
    >
      {children}
    </li>
  )
}
