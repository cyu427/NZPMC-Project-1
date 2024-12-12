import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { createEventSchema, CreateEventSchemaFormData } from '../../schema/formValidation/createEventSchema';
import EventNameField from './form/EventNameField';
import EventLocationField from './form/EventLocationField';
import EventCostField from './form/EventCostField';
import EventDateTimeField from './form/EventDateTimeField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import EventDescriptionField from './form/event-description/EventDescription';
import { useMutation } from '@tanstack/react-query';
import { createEvent } from '../../queries/admin/adminEvent';

const CreateEventDialog = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const { control, handleSubmit, formState: { errors } } = useForm<CreateEventSchemaFormData>({
    resolver: zodResolver(createEventSchema),
  });

  const createEventMutation = useMutation({
    mutationFn: (data : CreateEventSchemaFormData) => createEvent(data),
    onSuccess: (data) => {
      console.log('Event created successfully:', data);
    },
    onError: (error) => {
      console.error('Error creating event:', error);
    },
  });

  const onSubmit = (data: CreateEventSchemaFormData) => {
    console.log(data);
    createEventMutation.mutate(data);
    onClose(); // Close the dialog after successful submission
  };

  

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
        <DialogTitle>
          Create Event
          <IconButton
            aria-label="close"
            onClick={onClose}
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogContent>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1}}>
              <EventNameField control={control} errors={errors} />
              <EventDateTimeField control={control} errors={errors} />
              <EventLocationField control={control} errors={errors} />
              <EventCostField control={control} errors={errors} />
              <EventDescriptionField control={control} errors={errors} />
            </Box>
          </DialogContent>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 3 }}>
            <Button type="submit" variant="contained" color="primary">
              Create
            </Button>
          </Box>
        </form>
      </Dialog>
    </LocalizationProvider>
  );
};

export default CreateEventDialog;

