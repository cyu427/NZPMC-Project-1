import React, { useState } from 'react'
import { initialState, ResetPasswordContext, ResetPasswordState } from '../context/ResetPasswordContext'

export const ResetPasswordProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [step, setStep] = useState<ResetPasswordState['step']>(1)
  const [formData, setFormData] = useState(initialState.formData)

  return (
    <ResetPasswordContext.Provider value={{ step, setStep, formData, setFormData }}>
      {children}
    </ResetPasswordContext.Provider>
  )
}
