import { Stepper, Step, StepLabel } from '@mui/material'
import { useResetPasswordContext } from '../../hooks/useResetPasswordContext'
import EnterEmailStep from './steps/EnterEmailStep'
import ResetPasswordStep from './steps/ResetPasswordStep'
import ResetPasswordVerification from './steps/ResetPasswordVerification'

const steps = ['Enter Email', 'Verify Email', 'Reset Password']

const ResetPasswordStepWrapper = () => {
  const { step } = useResetPasswordContext()

  const renderStepContent = (step: number) => {
    switch (step) {
      case 1:
        return <EnterEmailStep/>
      case 2:
        return <ResetPasswordVerification/>
      case 3:
        return <ResetPasswordStep/>
      default:
        return null
    }
  }

  return (
    <>
      <Stepper activeStep={step - 1} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {renderStepContent(step)}
    </>
  )
}

export default ResetPasswordStepWrapper
