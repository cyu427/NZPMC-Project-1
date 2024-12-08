import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { TextField, Box, Button } from '@mui/material'
import { useResetPasswordContext } from '../../../hooks/useResetPasswordContext'
import { ResetPasswordFormData, resetPasswordSchema } from '../../../schema/resetPasswordSchema'

const ResetPasswordStep = () => {
  const { setFormData } = useResetPasswordContext()

  const { control, handleSubmit, formState: { errors },} = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),
  })

  const onSubmit = (data: ResetPasswordFormData) => {
    setFormData((prev) => ({ ...prev, ...data }))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="newPassword"
          control={control}
          defaultValue=""
          render={({ field }) => (
              <TextField
              {...field}
              label="Password"
              type="password"
              fullWidth
              margin="normal"
              error={!!errors.newPassword}
              helperText={errors.newPassword?.message}
              />
          )}
        />
        <Controller
          name="confirmNewPassword"
          control={control}
          defaultValue=""
          render={({ field }) => (
              <TextField
                {...field}
                label="Confirm Password"
                type="password"
                fullWidth
                margin="normal"
                error={!!errors.confirmNewPassword}
                helperText={errors.confirmNewPassword?.message}
              />
        )}
        />
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
            <Button type="submit" variant="contained" color="primary"> Next </Button>
        </Box>
    </form>
  )
}

export default ResetPasswordStep