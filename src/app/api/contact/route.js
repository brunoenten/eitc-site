import { NextResponse } from 'next/server'

export async function POST(request) {
  //   const { name, email, company, phone, message } = await request.json()
  const data = await request.formData()

  console.log('From email', data)

  return NextResponse.json('Hello from API!', { status: 200 })
}
