import React from 'react';
import { Box, Typography, Dialog, DialogTitle, DialogContent, IconButton } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { ArrowBackIos, ArrowForwardIos, Close } from '@mui/icons-material';
import EventCardWithNoButton from '../cards/CardWithNoButton';

interface Event {
  id: string;
  name: string;
  dateTime: Date;
  location: string;
  cost: string;
  description: string;
}

interface JoinedEventDialogProps {
  events: Event[];
  title: string;
  open: boolean;
  onClose: () => void;
}

const JoinedEventDialog: React.FC<JoinedEventDialogProps> = ({ events = [], title, open, onClose }) => {
  const chunkEvents = (events: Event[], size: number) => {
    const chunks = [];
    for (let i = 0; i < events.length; i += size) {
      chunks.push(events.slice(i, i + size));
    }
    return chunks;
  };

  const eventChunks = chunkEvents(events, 4);

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
            {title}
          </Typography>
          <IconButton onClick={onClose}>
            <Close />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
      {events.length === 0 ? (
          <Box sx={{ textAlign: 'center', py: 4 }}>
            <Typography variant="h6" color="text.secondary">
              No events joined
            </Typography>
          </Box>
        ) : (
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
                  <EventCardWithNoButton
                    key={event.id}
                    name={event.name}
                    dateTime={event.dateTime}
                    location={event.location}
                    cost={event.cost}
                  />
                ))}
              </Box>
            ))}
          </Carousel>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default JoinedEventDialog;

