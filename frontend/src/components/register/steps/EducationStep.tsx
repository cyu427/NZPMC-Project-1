import { useForm, Controller, useWatch } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { TextField, Box, Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material'
import { educationSchema, EducationFormData } from '../../../schema/registrationSchema'
import { useRegisterContext } from '../../../hooks/useRegisterContext'
import { useEffect } from 'react'

const EducationStep = () => {
  const { setStep, setFormData } = useRegisterContext()

  const { control, handleSubmit, formState: { errors }, setValue} = useForm<EducationFormData>({
    resolver: zodResolver(educationSchema),
  })

  const onSubmit = (data: EducationFormData) => {
    setFormData((prev) => ({ ...prev, ...data }))
    setStep(3)
  }

  const homeSchooled = useWatch({
    control,
    name: 'homeSchooled',
  })

  useEffect(() => {
    if (homeSchooled) {
      setValue('school', undefined);
    }
  }, [homeSchooled, setValue]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
            name="homeSchooled"
            control={control}
            defaultValue={false}
            render={({ field }) => (
            <FormControl component="fieldset" margin="normal">
                <FormLabel component="legend">Home schooled?</FormLabel>
                <RadioGroup {...field} value={field.value.toString()} onChange={(e) => field.onChange(e.target.value === 'true')}>
                <FormControlLabel value={true} control={<Radio />} label="Yes" />
                <FormControlLabel value={false} control={<Radio />} label="No" />
                </RadioGroup>
            </FormControl>
            )}
        />

        {!homeSchooled && (
          <Controller
            name="school"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="School"
                fullWidth
                margin="normal"
                error={!!errors.school}
                helperText={errors.school?.message}
              />
            )}
          />
        )}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
            <Button onClick={() => setStep(1)}>Back</Button>
            <Button type="submit" variant="contained" color="primary">
            Next
            </Button>
        </Box>
        </form>
  )
}

export default EducationStep