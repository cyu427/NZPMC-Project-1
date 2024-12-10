import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { TextField, Box, Button } from '@mui/material'
import { accountSchema, AccountFormData } from '../../../schema/formValidation/registrationSchema'
import { useRegisterContext } from '../../../hooks/useRegisterContext'

const AccountStep = () => {
  const { setStep, setFormData } = useRegisterContext()

  const { control, handleSubmit, formState: { errors },} = useForm<AccountFormData>({
    resolver: zodResolver(accountSchema),
  })

  const onSubmit = (data: AccountFormData) => {
    setFormData((prev) => ({ ...prev, ...data }))
    setStep(4)
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
                    fullWidth
                    margin="normal"
                    error={!!errors.email}
                    helperText={errors.email?.message}
                />
            )}
        />
        <Controller
        name="password"
        control={control}
        defaultValue=""
        render={({ field }) => (
            <TextField
            {...field}
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            error={!!errors.password}
            helperText={errors.password?.message}
            />
        )}
        />
        <Controller
        name="confirmPassword"
        control={control}
        defaultValue=""
        render={({ field }) => (
            <TextField
            {...field}
            label="Confirm Password"
            type="password"
            fullWidth
            margin="normal"
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword?.message}
            />
        )}
        />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
        <Button onClick={() => setStep(2)}>Back</Button>
        <Button type="submit" variant="contained" color="primary">
            Sign Up
        </Button>
        </Box>
  </form>
  )
}

export default AccountStep