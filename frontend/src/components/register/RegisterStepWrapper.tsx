import { Stepper, Step, StepLabel } from '@mui/material'
import { useRegisterContext } from '../../hooks/useRegisterContext'
import PersonalInfoStep from './steps/PersonalInfoStep'
import EducationStep from './steps/EducationStep'
import AccountStep from './steps/AccountStep'
import VerificationStep from './steps/VerificationStep'
import SuccessStep from './steps/SuccessStep'

const steps = ['Personal Info', 'Education', 'Account', 'Verification', 'Success']

const RegisterStepWrapper = () => {
  const { step } = useRegisterContext()

  const renderStepContent = (step: number) => {
    switch (step) {
      case 1:
        return <PersonalInfoStep />
      case 2:
        return <EducationStep />
      case 3:
        return <AccountStep />
      case 4:
        return <VerificationStep />
      case 5:
        return <SuccessStep />
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

export default RegisterStepWrapper
