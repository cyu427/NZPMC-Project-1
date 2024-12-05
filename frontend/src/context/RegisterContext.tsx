'use client'

import { createContext } from 'react'

type FormStep = 1 | 2 | 3 | 4 | 5

export interface RegisterState {
  step: FormStep
  formData: {
    firstName: string
    lastName: string
    homeSchooled: boolean
    school: string
    email: string
    password: string
    confirmPassword: string
    code: string
  }
  setStep: React.Dispatch<React.SetStateAction<FormStep>>
  setFormData: React.Dispatch<
    React.SetStateAction<RegisterState['formData']>
  >
}

export const initialState: RegisterState = {
  step: 1,
  formData: {
    firstName: '',
    lastName: '',
    homeSchooled: false,
    school: '',
    email: '',
    password: '',
    confirmPassword: '',
    code: '',
  },
  setStep: () => {},
  setFormData: () => {},
}

export const RegisterContext = createContext<RegisterState>(initialState)
