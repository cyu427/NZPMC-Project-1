import { useContext } from 'react'
import { ResetPasswordContext } from '../context/ResetPasswordContext'

export const useResetPasswordContext = () => {
  const context = useContext(ResetPasswordContext)

  if (!context) {
    throw new Error(
      'usePasswordContext must be used within a ResetPasswordProvider'
    )
  }

  return context
}
