import SigninPageDialog from "../components/signIn/SigninPageDialog"
import { SignInProvider } from "../provider/SigninProvider"

const SigninPage = () => (
  <SignInProvider>
    <SigninPageDialog />
  </SignInProvider>
)

export default SigninPage
