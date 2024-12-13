import React, { useState } from 'react';
import { Box, Dialog, Typography } from '@mui/material';
import StandardButton from '../buttons/StandardButton';
import useAuth from '../../hooks/useAuth';
import EventCarousel from './EventCarousel';
import SigninDialogs from './SigninDialogs';
import CreateEventDialog from '../createEvent/CreateEventGeneralFields';
import { EventDetailsDialog } from '../eventDetails/EventDetailsDialog';
import EditEventDialog from '../createEvent/EditEventDialog';
import { EditEventSchemaFormData } from '../../schema/formValidation/createEventSchema';

interface Event {
  id: string;
  name: string;
  dateTime: Date;
  location: string;
  cost: string;
  description: string;
}

interface EventsSectionProps {
  events: Event[];
  title: string;
}

const EventsSection: React.FC<EventsSectionProps> = ({ events, title }) => {
  const { isLoggedIn, userId, isAdmin } = useAuth();
  console.log('Admin:', isAdmin);

  const [signInDialogOpen, setSignInDialogOpen] = useState(false);
  const [createEventDialogOpen, setCreateEventDialogOpen] = useState(false);
  const [editEventDialogOpen, setEditEventDialogOpen] = useState(false);
  const [eventDetailsDialogOpen, setEventDetailsDialogOpen] = useState(false);
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);
  const [event, setEvent] = useState<EditEventSchemaFormData | null>(null);

  const toggleDialog = (setter: React.Dispatch<React.SetStateAction<boolean>>, open: boolean) => () => setter(open);

  const formatEventForEdit = (event: Event): EditEventSchemaFormData => ({
    ...event,
    dateTime: event.dateTime instanceof Date ? event.dateTime.toISOString() : new Date(event.dateTime).toISOString(),
    cost: parseFloat(event.cost),
  });

  const handleEditEventOpen = (event: Event) => {
    setEvent(formatEventForEdit(event));
    toggleDialog(setEditEventDialogOpen, true)();
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Box sx={{ py: 4, px: 2, width: '100%' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
            {title}
          </Typography>
          {isAdmin && (
            <StandardButton label="Add Event" buttonColor="yellow" onClick={toggleDialog(setCreateEventDialogOpen, true)} />
          )}
        </Box>

        <EventCarousel 
          events={events} 
          isAdmin={isAdmin} 
          isLoggedIn={isLoggedIn} 
          userId={userId}
          handleEditEventOpen={handleEditEventOpen}
          toggleDialog={toggleDialog}
          setSignInDialogOpen={setSignInDialogOpen}
          setEventDetailsDialogOpen={setEventDetailsDialogOpen}
          setSelectedEventId={setSelectedEventId}
        />
      </Box>

      <SigninDialogs 
        signInDialogOpen={signInDialogOpen} 
        toggleDialog={toggleDialog} 
        setSignInDialogOpen={setSignInDialogOpen}
      />

      <Dialog open={createEventDialogOpen} onClose={toggleDialog(setCreateEventDialogOpen, false)} fullWidth maxWidth="md">
        <CreateEventDialog open={createEventDialogOpen} onClose={toggleDialog(setCreateEventDialogOpen, false)} />
      </Dialog>

      <Dialog open={editEventDialogOpen} onClose={toggleDialog(setEditEventDialogOpen, false)} fullWidth maxWidth="md">
        {event && (
          <EditEventDialog open={editEventDialogOpen} onClose={toggleDialog(setEditEventDialogOpen, false)} eventData={event} />
        )}
      </Dialog>

      <EventDetailsDialog
        eventId={selectedEventId!}
        open={eventDetailsDialogOpen}
        onClose={toggleDialog(setEventDetailsDialogOpen, false)}
        admin={isAdmin}
      />
    </Box>
  );
};

export default EventsSection;
