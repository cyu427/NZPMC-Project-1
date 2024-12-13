import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Tabs,
  Tab,
  Box,
  CircularProgress,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { EventDetailsContent } from './EventDetailsContent';
import { EventParticipants } from './EventParticipant';
import { EventDetailsProps, EventDetails } from './eventTypes';
import { getEvent } from '../../queries/event';
import { AccountWithId } from '../../schema/apiDataValidation/newAccountSchema';
import { getUserByEvent } from '../../queries/admin/adminUser';

export function EventDetailsDialog({
  eventId,
  open,
  onClose,
  onJoin,
  admin,
}: EventDetailsProps) {

  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const { data: event, isLoading, isError, isSuccess } = useQuery<EventDetails, Error>({
    queryKey: ['event', eventId],
    queryFn: () => getEvent(eventId),
  });

  const { data: eventParticipants } = useQuery<AccountWithId[], Error>({
    queryKey: ['eventParticipants', eventId],
    queryFn: () => getUserByEvent(eventId),
  });

  if (isLoading) {
    return (
      <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
        <DialogContent>
          <CircularProgress />
        </DialogContent>
      </Dialog>
    );
  }

  if (isError || !event) {
    return (
      <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
        <DialogContent>
          <Typography color="error">Error loading event details.</Typography>
        </DialogContent>
      </Dialog>
    );
  }

  if (isSuccess) {
    console.log("Event data:", event); // Log the event data to the console
  }

  console.log("Event participants:", eventParticipants); // Log the event participants to the console

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="lg">
      <DialogTitle sx={{ position: 'relative' }}>
        {event.title}
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ position: 'absolute', right: 8, top: 8, color: 'grey.500' }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 2 }}>
          <Tabs value={activeTab} onChange={handleTabChange} aria-label="event tabs">
            <Tab label="Event Details" />
            {admin && <Tab label="Participants" />}
          </Tabs>
        </Box>
        {activeTab === 0 && (
          <EventDetailsContent
            eventDetails={event}
            onJoin={onJoin}
          />
        )}
        {admin && activeTab === 1 && <EventParticipants data={eventParticipants || []} />}
      </DialogContent>
    </Dialog>
  );
}

