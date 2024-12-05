// import { SignUpProvider } from '../contexts/SignUpContext'
// import SignUpDialog from '../components/SignUpDialog'
import { RegisterProvider } from "../provider/RegisterProvider"
import RegisterDialog from "../components/register/RegisterDialog"

const RegisterPage = () => (
  <RegisterProvider>
    <RegisterDialog />
  </RegisterProvider>
)

export default RegisterPage
