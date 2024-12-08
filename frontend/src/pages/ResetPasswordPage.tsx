import { ResetPasswordProvider } from "../provider/ResetPasswordProvider"
import ResetPasswordDialog from "../components/resetPassword/ResetPasswordDialog"

const ResetPasswordPage = () => (
  <ResetPasswordProvider>
    <ResetPasswordDialog />
  </ResetPasswordProvider>
)

export default ResetPasswordPage
