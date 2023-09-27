import { Card, CardBody } from '@nextui-org/react'

export const Notification = ({ type, children, className }) => {
  return (
    <Card
      className={`rounded-lg text-white ${className} ${
        type === 'success' ? 'bg-skyblue' : 'bg-red-500'
      }`}
    >
      <CardBody className="text-center">{children}</CardBody>
    </Card>
  )
}
