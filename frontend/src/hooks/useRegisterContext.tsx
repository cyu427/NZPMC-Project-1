import { useContext } from 'react'
import { RegisterContext } from '../context/RegisterContext'

export const useRegisterContext = () => {
  const context = useContext(RegisterContext)

  if (!context) {
    throw new Error(
      'useRegisterContext must be used within a SignUpProvider'
    )
  }

  return context
}
