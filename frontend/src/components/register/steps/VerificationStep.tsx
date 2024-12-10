import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { TextField, Box, Button, Typography, CircularProgress, Alert } from '@mui/material'
import { verificationSchema, VerificationFormData } from '../../../schema/formValidation/registrationSchema'
import { useRegisterContext } from '../../../hooks/useRegisterContext'
import { useMutation } from '@tanstack/react-query'
import { createAccount } from '../../../queries/user'
import { useState } from 'react'

interface AccountData {
  email: string;
  password: string;
  firstName: string;  // matches expected type
  lastName: string;   // matches expected type
  homeSchooled: boolean;  // matches expected type
  school: string;
}

const VerificationStep = () => {
  const { setStep, setFormData, formData } = useRegisterContext()
  const [successMessage, setSuccessMessage] = useState<string | null>(null)

  const { control, handleSubmit, formState: { errors } } = useForm<VerificationFormData>({
    resolver: zodResolver(verificationSchema),
  })

  const createAccountMutation = useMutation({
    mutationFn: createAccount,
    onSuccess: () => {
      setSuccessMessage('Account created successfully!')
      setTimeout(() => setStep(5), 2000)
    },
  })

  const onSubmit = async (data: VerificationFormData) => {
    setFormData((prev) => ({ ...prev, ...data }))
    const accountData: AccountData = {
      email: formData.email,
      password: formData.password,
      firstName: formData.firstName,
      lastName: formData.lastName,
      homeSchooled: formData.homeSchooled,
      school: formData.school,
    };
    
    //const accountData = { ...formData, ...data }
    createAccountMutation.mutate(accountData)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="body1" align="center" gutterBottom>
        Verify your account
      </Typography>
      <Typography variant="body2" align="center" color="textSecondary" gutterBottom>
        A 6-digit code has been sent to {formData.email}
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
      {createAccountMutation.isError && (
        <Alert severity="error" sx={{ mt: 2 }}>
          {createAccountMutation.error instanceof Error 
            ? createAccountMutation.error.message 
            : 'An error occurred while creating your account.'}
        </Alert>
      )}
      {successMessage && (
        <Alert severity="success" sx={{ mt: 2 }}>
          {successMessage}
        </Alert>
      )}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
        <Button 
          type="submit" 
          variant="contained" 
          color="primary"
          disabled={createAccountMutation.isPending}
        >
          {createAccountMutation.isPending ? (
            <CircularProgress size={24} color="inherit" />
          ) : (
            'Verify'
          )}
        </Button>
      </Box>
    </form>
  )
}

export default VerificationStep

