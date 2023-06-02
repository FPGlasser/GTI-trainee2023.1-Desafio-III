import React from 'react'
import { Section } from '../../Components'
import { useLocation, useParams } from 'react-router-dom'


const ApiError = () => {
  const {state}= useLocation()
  const {code, message} = state
  console.log(`code: ${code} message: ${message}`)
  return (
    <Section>
      <h1>{code}</h1>
      <h3>{message}</h3>
    </Section>
  )
}

export default ApiError