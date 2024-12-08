import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { 
  Box, 
  Button, 
  Dialog, 
  DialogContent, 
  DialogTitle, 
  IconButton, 
  TextField, 
  Typography,
  Step,
  StepLabel,
  Stepper,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { ResetPasswordFormData, resetPasswordSchema, SignInFormData, signInSchema } from '../schema/resetPasswordSchema'


type FormMode = 'login' | 'forgot-1' | 'forgot-2' | 'success'

export default function LoginForm() {
  const [mode, setMode] = useState<FormMode>('login')
  const [email, setEmail] = useState('')

  const {
    control: controlLogin,
    handleSubmit: handleLoginSubmit,
    formState: { errors: loginErrors },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
  })

  const {
    control: controlReset,
    handleSubmit: handleResetSubmit,
    formState: { errors: resetErrors },
  } = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),
  })

  const onLoginSubmit = (data: SignInFormData) => {
    console.log('Login data:', data)
  }

  const onResetSubmit = (data: ResetPasswordFormData) => {
    console.log('Reset password data:', data)
    setMode('success')
  }

  return (
    <Dialog open={true} maxWidth="sm" fullWidth>
      <DialogTitle>
        {mode === 'login' ? 'Sign in' : 'Forgot Password'}
        <IconButton
          aria-label="close"
          onClick={() => {/* handle close */}}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        {mode === 'login' && (
          <form onSubmit={handleLoginSubmit(onLoginSubmit)}>
            <Controller
              name="email"
              control={controlLogin}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Email"
                  fullWidth
                  margin="normal"
                  error={!!loginErrors.email}
                  helperText={loginErrors.email?.message}
                />
              )}
            />
            <Controller
              name="password"
              control={controlLogin}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Password"
                  type="password"
                  fullWidth
                  margin="normal"
                  error={!!loginErrors.password}
                  helperText={loginErrors.password?.message}
                />
              )}
            />
            <Box sx={{ mt: 2 }}>
              <Button
                onClick={() => setMode('forgot-1')}
                sx={{ textTransform: 'none' }}
              >
                Forgot Password?
              </Button>
            </Box>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
            >
              Sign in
            </Button>
          </form>
        )}

        {(mode === 'forgot-1' || mode === 'forgot-2') && (
          <>
            <Stepper activeStep={mode === 'forgot-1' ? 0 : 1} alternativeLabel sx={{ mb: 4 }}>
              <Step>
                <StepLabel>Verify Email</StepLabel>
              </Step>
              <Step>
                <StepLabel>Reset Password</StepLabel>
              </Step>
            </Stepper>
            
            {mode === 'forgot-1' && (
              <form onSubmit={(e) => { e.preventDefault(); setMode('forgot-2'); }}>
                <TextField
                  label="Email"
                  fullWidth
                  margin="normal"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                  <Button onClick={() => setMode('login')}>Cancel</Button>
                  <Button type="submit" variant="contained" color="primary">
                    Next
                  </Button>
                </Box>
              </form>
            )}

            {mode === 'forgot-2' && (
              <form onSubmit={handleResetSubmit(onResetSubmit)}>
                <Controller
                  name="verificationCode"
                  control={controlReset}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Verification Code"
                      fullWidth
                      margin="normal"
                      inputProps={{ maxLength: 6, style: { textAlign: 'center', letterSpacing: '0.5em' } }}
                      error={!!resetErrors.verificationCode}
                      helperText={resetErrors.verificationCode?.message}
                    />
                  )}
                />
                <Controller
                  name="newPassword"
                  control={controlReset}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="New Password"
                      type="password"
                      fullWidth
                      margin="normal"
                      error={!!resetErrors.newPassword}
                      helperText={resetErrors.newPassword?.message}
                    />
                  )}
                />
                <Controller
                  name="confirmNewPassword"
                  control={controlReset}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Confirm New Password"
                      type="password"
                      fullWidth
                      margin="normal"
                      error={!!resetErrors.confirmNewPassword}
                      helperText={resetErrors.confirmNewPassword?.message}
                    />
                  )}
                />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                  <Button onClick={() => setMode('forgot-1')}>Back</Button>
                  <Button type="submit" variant="contained" color="primary">
                    Reset
                  </Button>
                </Box>
              </form>
            )}
          </>
        )}

        {mode === 'success' && (
          <Box sx={{ textAlign: 'center' }}>
            <CheckCircleIcon sx={{ fontSize: 60, color: 'success.main', mb: 2 }} />
            <Typography variant="h6" gutterBottom>
              Success
            </Typography>
            <Typography variant="body1" color="textSecondary" paragraph>
              Congratulations, you have successfully reset your password.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setMode('login')}
            >
              Sign in
            </Button>
          </Box>
        )}
      </DialogContent>
    </Dialog>
  )
}