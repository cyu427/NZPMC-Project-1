'use client'

import { createContext } from 'react'

type Page = 'signin' | 'forgotPassword'

export interface SigninState {
  page: Page  
  formData: {
    email: string
    password: string
  }
  setPage: React.Dispatch<React.SetStateAction<Page>>
  setFormData: React.Dispatch<
    React.SetStateAction<SigninState['formData']>
  >
}

export const initialState: SigninState = {
    page: 'signin',
    formData: {
    email: '',
    password: '',
  },
  setPage: () => {},
  setFormData: () => {},
}

export const SigninContext = createContext<SigninState>(initialState)
