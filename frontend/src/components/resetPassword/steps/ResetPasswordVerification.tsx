import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { TextField, Box, Button, Typography } from '@mui/material'
import { useResetPasswordContext } from '../../../hooks/useResetPasswordContext'
import { VerificationFormData, verificationSchema } from '../../../schema/resetPasswordSchema'

const ResetPasswordVerification = () => {
  const { setStep, setFormData, formData } = useResetPasswordContext()

  const { control, handleSubmit, formState: { errors },} = useForm<VerificationFormData>({
    resolver: zodResolver(verificationSchema),
  })

  const onSubmit = (data: VerificationFormData) => {
    setFormData((prev) => ({ ...prev, ...data }))
    setStep(3)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
            <Typography variant="body2" align="center" color="textSecondary" gutterBottom>
              An 6-digit code has been sent to {formData.email}
            </Typography>
            <Typography variant="body2" align="center" color="textSecondary" gutterBottom>
              Please enter below
            </Typography>
            <Controller
              name="code"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  margin="normal"
                  inputProps={{ maxLength: 6, style: { textAlign: 'center', letterSpacing: '0.5em' } }}
                  placeholder="• • • • • •"
                  error={!!errors.code}
                  helperText={errors.code?.message}
                />
              )}
            />
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
              <Button type="submit" variant="contained" color="primary">
                Verify
              </Button>
            </Box>
          </form>
  )
}

export default ResetPasswordVerification