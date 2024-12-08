import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { 
  Box, 
  Button, 
  TextField 
} from '@mui/material'
import { SignInFormData, signInSchema } from '../../schema/signinSchema'
import { useSigninContext } from '../../hooks/useSigninContext'

export const SigninSection: React.FC = () => {
  const { setPage } = useSigninContext()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
  })

  const onLoginSubmit = (data: SignInFormData) => {
    console.log('Login data:', data)
    // Implement login logic here
  }

  return (
    <form onSubmit={handleSubmit(onLoginSubmit)}>
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
      <Box sx={{ mt: 2 }}>
        <Button
          onClick={() => setPage('forgotPassword')}
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
  )
}
