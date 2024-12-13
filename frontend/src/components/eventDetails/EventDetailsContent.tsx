import React, { useState } from 'react';
import { Grid, Typography, Box, Button, styled, Dialog } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { EventDetails } from './eventTypes';
import { useMutation } from '@tanstack/react-query';
import useAuth from '../../hooks/useAuth';
import { joinEvent } from '../../queries/event';
import { SignInProvider } from '../../provider/SigninProvider';
import SigninPageDialog from '../signIn/SigninPageDialog';

const DetailItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  marginBottom: theme.spacing(1),
}));

const JoinButton = styled(Button)(({ theme }) => ({
  width: '100%',
  marginTop: theme.spacing(2),
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
  textTransform: 'none',
  fontSize: '1rem',
}));

interface EventDetailsContentProps {
  eventDetails: EventDetails;
  onJoin?: () => void;
}

export function EventDetailsContent({ eventDetails, onJoin }: EventDetailsContentProps) {

  const [signInDialogOpen, setSignInDialogOpen] = useState(false);

  const handleSignInClose = () => {
    setSignInDialogOpen(false);
  };

  console.log("eventDetails:", eventDetails); // Log the event details to the console

  const parsedDate = new Date(eventDetails.dateTime);

  // Format date
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC', // Optional: adjust timeZone here if you want a specific one
  }).format(parsedDate);
  console.log('formattedDate:', formattedDate); // Log the formatted date to the console


  // Format time
  const formattedTime = new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Pacific/Auckland', // Optional: adjust timeZone here if you want a specific one
    hour12: true,
  }).format(parsedDate);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <div dangerouslySetInnerHTML={{ __html: eventDetails.description }} />
      </Grid>
      <Grid item xs={12} md={6}>
        <DetailItem>
          <CalendarTodayIcon color="action" />
          <Typography variant="body2">{formattedDate}</Typography>
        </DetailItem>
        <DetailItem>
          <AccessTimeIcon color="action" />
          <Typography variant="body2">{formattedTime}</Typography>
        </DetailItem>
        <DetailItem>
          <LocationOnIcon color="action" />
          <Typography variant="body2">{eventDetails.location}</Typography>
        </DetailItem>
        <DetailItem>
          <AttachMoneyIcon color="action" />
          <Typography variant="body2">{eventDetails.cost}</Typography>
        </DetailItem>
      </Grid>

      <Dialog open={signInDialogOpen} onClose={handleSignInClose} fullWidth maxWidth="sm">
        <SignInProvider>
          <SigninPageDialog onClose={handleSignInClose} />
        </SignInProvider>
      </Dialog>

    </Grid>
  );
}

