import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { TextField, Box, Button } from '@mui/material'
import { personalInfoSchema, PersonalInfoFormData } from '../../../schema/registrationSchema'
import { useRegisterContext } from '../../../hooks/useRegisterContext'

const PersonalInfoStep = () => {
  const { setStep, setFormData } = useRegisterContext()

  const { control, handleSubmit, formState: { errors },} = useForm<PersonalInfoFormData>({
    resolver: zodResolver(personalInfoSchema),
  })

  const onSubmit = (data: PersonalInfoFormData) => {
    setFormData((prev) => ({ ...prev, ...data }))
    setStep(2)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="firstName"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="First Name"
            fullWidth
            margin="normal"
            error={!!errors.firstName}
            helperText={errors.firstName?.message}
          />
        )}
      />
      <Controller
        name="lastName"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="Last Name"
            fullWidth
            margin="normal"
            error={!!errors.lastName}
            helperText={errors.lastName?.message}
          />
        )}
      />
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
        <Button type="submit" variant="contained" color="primary">
          Next
        </Button>
      </Box>
    </form>
  )
}

export default PersonalInfoStep