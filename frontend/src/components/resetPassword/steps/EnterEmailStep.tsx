import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { TextField, Box, Button } from '@mui/material'
import { useResetPasswordContext } from '../../../hooks/useResetPasswordContext'
import { VerifyEmailFormData, verifyEmailSchema } from '../../../schema/resetPasswordSchema'

const EnterEmailStep = () => {
  const { setStep, setFormData } = useResetPasswordContext()

  const { control, handleSubmit, formState: { errors },} = useForm<VerifyEmailFormData>({
    resolver: zodResolver(verifyEmailSchema),
  })

  const onSubmit = (data: VerifyEmailFormData) => {
    setFormData((prev) => ({ ...prev, ...data }))
    setStep(2)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
            <TextField
                {...field}
                label="Email"
                type="email"
                fullWidth
                margin="normal"
                error={!!errors.email}
                helperText={errors.email?.message}
            />
            )}
        />
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
            <Button type="submit" variant="contained" color="primary"> Next </Button>
        </Box>
    </form>
  )
}

export default EnterEmailStep