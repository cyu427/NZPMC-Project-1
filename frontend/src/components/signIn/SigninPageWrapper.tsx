import { useSigninContext } from '../../hooks/useSigninContext'
import ResetPasswordPage from '../../pages/ResetPasswordPage'
import { SigninSection } from './SigninSection'

const SigninPageWrapper = () => {
  const { page } = useSigninContext()

  const renderPage = (page: string) => {
    switch (page) {
      case 'signin':
        return <SigninSection/>
      case 'forgotPassword':
        return <ResetPasswordPage/>
      default:
        return null
    }
  }

  return (
    <>
      {renderPage(page)}
    </>
  )
}

export default SigninPageWrapper
