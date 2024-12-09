import { useForm} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Box, Button } from '@mui/material'
import { createEventSchema, CreateEventSchemaFormData } from '../../schema/createEventSchema'
import EventNameField from './form/EventNameField'
import EventLocationField from './form/EventLocationField'
import EventCostField from './form/EventCostField'
import EventDateTimeField from './form/EventDateTimeField'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import EventDescriptionField from './form/event-description/EventDescription'

const CreateEventGeneralFields = () => {
  const { control, handleSubmit, formState: { errors },} = useForm<CreateEventSchemaFormData>({
    resolver: zodResolver(createEventSchema),
  })

  const onSubmit = (data: CreateEventSchemaFormData) => {
    console.log(data)
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>  
      <form onSubmit={handleSubmit(onSubmit)}>
        <EventNameField control={control} errors={errors} />
        <EventDateTimeField control={control} errors={errors} />
        <EventLocationField control={control} errors={errors} />
        <EventCostField control={control} errors={errors} />
        <EventDescriptionField control={control} errors={errors}/>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
          <Button type="submit" variant="contained" color="primary">
            Next
          </Button>
        </Box>
      </form>
      </LocalizationProvider>
  )
}

export default CreateEventGeneralFields