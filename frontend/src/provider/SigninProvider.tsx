import React, { useState } from 'react'
import { initialState, SigninContext } from '../context/SigninContext'

export const SignInProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [formData, setFormData] = useState(initialState.formData)
  const [page, setPage] = useState(initialState.page)

  return (
    <SigninContext.Provider value={{ page, setPage, formData, setFormData }}>
      {children}
    </SigninContext.Provider>
  )
}
