'use client'

import { createContext } from 'react'

type FormStep = 1 | 2 | 3

export interface ResetPasswordState {
  step: FormStep
  formData: {
    email: string
    verficationCode: string
    password: string
    confirmPassword: string
  }
  setStep: React.Dispatch<React.SetStateAction<FormStep>>
  setFormData: React.Dispatch<
    React.SetStateAction<ResetPasswordState['formData']>
  >
}

export const initialState: ResetPasswordState = {
  step: 1,
  formData: {
    email: '',
    verficationCode: '',
    password: '',
    confirmPassword: '',
  },
  setStep: () => {},
  setFormData: () => {},
}

export const ResetPasswordContext = createContext<ResetPasswordState>(initialState)
