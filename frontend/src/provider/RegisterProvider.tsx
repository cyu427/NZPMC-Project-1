import React, { useState } from 'react'
import { RegisterContext, initialState, RegisterState } from '../context/RegisterContext'

export const RegisterProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [step, setStep] = useState<RegisterState['step']>(1)
  const [formData, setFormData] = useState(initialState.formData)

  return (
    <RegisterContext.Provider value={{ step, setStep, formData, setFormData }}>
      {children}
    </RegisterContext.Provider>
  )
}
