import React from 'react';
import { Box } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import EventCard from '../cards/Card';
import { useMutation } from '@tanstack/react-query';
import { joinEvent } from '../../queries/event';

interface Event {
  id: string;
  name: string;
  dateTime: Date;
  location: string;
  cost: string;
  description: string;
}

interface EventCarouselProps {
  events: Event[];
  isAdmin: boolean;
  isLoggedIn: boolean;
  userId: string | null;
  handleEditEventOpen: (event: Event) => void;
  toggleDialog: (setter: React.Dispatch<React.SetStateAction<boolean>>, open: boolean) => () => void;
  setSignInDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setEventDetailsDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedEventId: React.Dispatch<React.SetStateAction<string | null>>;
}

const EventCarousel: React.FC<EventCarouselProps> = ({ 
  events, 
  isAdmin, 
  isLoggedIn, 
  userId, 
  handleEditEventOpen, 
  toggleDialog, 
  setSignInDialogOpen, 
  setEventDetailsDialogOpen, 
  setSelectedEventId 
}) => {
  const joinEventMutation = useMutation({
    mutationFn: ({ eventId, userId }: { eventId: string; userId: string }) => joinEvent(eventId, userId),
    onSuccess: () => {
      window.location.reload();
    },
    onError: (error) => console.error('Error joining event:', error),
  });

  const handleJoin = (event: Event) => {
    if (isAdmin) {
      handleEditEventOpen(event);
    } else if (isLoggedIn && userId) {
      joinEventMutation.mutate({ eventId: event.id, userId });
    } else {
      toggleDialog(setSignInDialogOpen, true)();
    }
  };

  const chunkEvents = (events: Event[], size: number) => {
    const chunks = [];
    for (let i = 0; i < events.length; i += size) {
      chunks.push(events.slice(i, i + size));
    }
    return chunks;
  };

  const eventChunks = chunkEvents(events, 4);

  return (
    <Carousel
      indicators
      navButtonsAlwaysVisible
      autoPlay={false}
      NextIcon={<ArrowForwardIos sx={{ color: 'white' }} />}
      PrevIcon={<ArrowBackIos sx={{ color: 'white' }} />}
      navButtonsProps={{
        style: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: 'white',
          zIndex: 2,
        },
      }}
      navButtonsWrapperProps={{
        style: { top: '50%', transform: 'translateY(-50%)' },
      }}
    >
      {eventChunks.map((chunk, index) => (
        <Box key={index} sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
          {chunk.map((event) => (
            <EventCard
              key={event.id}
              name={event.name}
              dateTime={event.dateTime}
              location={event.location}
              cost={event.cost}
              primaryButtonLabel="More Info"
              secondaryButtonLabel={
                !isLoggedIn ? "Sign in to Join" : isAdmin ? "Edit" : "Join"
              }
              onClick={() => handleJoin(event)}
              onClickMoreInfo={() => {
                setSelectedEventId(event.id);
                toggleDialog(setEventDetailsDialogOpen, true)();
              }}
            />
          ))}
        </Box>
      ))}
    </Carousel>
  );
};

export default EventCarousel;
