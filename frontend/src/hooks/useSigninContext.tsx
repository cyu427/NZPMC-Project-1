import { useContext } from 'react'
import { SigninContext } from '../context/SigninContext'

export const useSigninContext = () => {
  const context = useContext(SigninContext)

  if (!context) {
    throw new Error(
      'useSigninContext must be used within a SigninProvider'
    )
  }

  return context
}
