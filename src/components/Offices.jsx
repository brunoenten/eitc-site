import clsx from 'clsx'

function Office({ name, children, invert = false }) {
  return (
    <address
      className={clsx(
        'text-sm not-italic',
        invert ? 'text-abbey-300' : 'text-abbey-600',
      )}
    >
      <strong className={invert ? 'text-white' : 'text-abbey-950'}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  )
}

export function Offices({ invert = false, ...props }) {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="Morges" invert={invert}>
          rue des Fossés 27
          <br />
          1110 Morges, Switzerland
        </Office>
      </li>
    </ul>
  )
}
