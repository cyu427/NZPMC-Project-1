// import React, { useState } from 'react';
// import { Box, Dialog, Typography } from '@mui/material';
// import Carousel from 'react-material-ui-carousel';
// import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
// import EventCard from '../cards/Card';
// import useAuth from '../../hooks/useAuth';
// import { useMutation } from '@tanstack/react-query';
// import { SignInProvider } from '../../provider/SigninProvider';
// import SigninPageDialog from '../signIn/SigninPageDialog';
// import { joinEvent } from '../../queries/event';
// import StandardButton from '../buttons/StandardButton';

// interface Event {
//   id: string;
//   name: string;
//   dateTime: Date;
//   location: string;
//   cost: string;
// }

// interface EventsSectionProps {
//   events: Event[];
//   title: string;
// }

// const EventsSection: React.FC<EventsSectionProps> = ({ events, title }) => {
//   const { isLoggedIn, userId } = useAuth();

//   const joinEventMutation = useMutation({
//     mutationFn: ({ eventId, userId }: { eventId: string, userId: string }) => joinEvent(eventId, userId),
//     onSuccess: (data) => {
//       console.log('Event joined successfully:', data);
//     },
//     onError: (error) => {
//       console.error('Error joining event:', error);
//     },
//   });

//   const [open, setOpen] = useState(false);

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handleSignIn = () => {
//     setOpen(true);
//   };

//   const chunkEvents = (events: Event[], size: number) => {
//     const chunks = [];
//     for (let i = 0; i < events.length; i += size) {
//       chunks.push(events.slice(i, i + size));
//     }
//     return chunks;
//   };

//   const eventChunks = chunkEvents(events, 4);

//   const handleJoin = (eventId: string) => {
//     if (isLoggedIn && userId) {
//       joinEventMutation.mutate({ eventId, userId });
//     } else {
//       handleSignIn();
//     }
//   };

//   return (
//     <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//       <Box sx={{ py: 4, px: 2, width: '100%' }}>
//         <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
//           <Typography
//             variant="h5"
//             component="h2"
//             sx={{
//               fontWeight: 'bold',
//               color: 'text.primary',
//             }}
//           >
//             {title}
//           </Typography>
//           <StandardButton label="Add Event" buttonColor="yellow" onClick={() => console.log('Add event clicked')} />
//         </Box>
//         <Carousel
//           indicators={true}
//           navButtonsAlwaysVisible={true}
//           autoPlay={false}
//           NextIcon={<ArrowForwardIos sx={{ color: 'white' }} />}
//           PrevIcon={<ArrowBackIos sx={{ color: 'white' }} />}
//           navButtonsProps={{
//             style: {
//               backgroundColor: 'rgba(0, 0, 0, 0.5)',
//               color: 'white',
//               margin: '0 0px',
//               zIndex: 2,
//             },
//           }}
//           navButtonsWrapperProps={{
//             style: {
//               top: '50%',
//               transform: 'translateY(-50%)',
//             },
//           }}
//         >
//           {eventChunks.map((chunk, index) => (
//             <Box key={index} sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
//               {chunk.map((event) => (
//                 <EventCard
//                   key={event.id}
//                   name={event.name}
//                   dateTime={event.dateTime}
//                   location={event.location}
//                   cost={event.cost}
//                   primaryButtonLabel="More Info"
//                   secondaryButtonLabel={isLoggedIn ? "Join" : "Sign in to Join"}
//                   onClick={() => handleJoin(event.id)}
//                 />
//               ))}
//             </Box>
//           ))}
//         </Carousel>
//       </Box>

//       <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
//         <SignInProvider>
//           <SigninPageDialog onClose={handleClose} />
//         </SignInProvider>
//       </Dialog>
//     </Box>
//   );
// };

// export default EventsSection;

import React, { useState } from 'react';
import { Box, Dialog, Typography } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import EventCard from '../cards/Card';
import useAuth from '../../hooks/useAuth';
import { useMutation } from '@tanstack/react-query';
import { SignInProvider } from '../../provider/SigninProvider';
import SigninPageDialog from '../signIn/SigninPageDialog';
import { joinEvent } from '../../queries/event';
import StandardButton from '../buttons/StandardButton';
import CreateEventDialog from '../createEvent/CreateEventGeneralFields';

interface Event {
  id: string;
  name: string;
  dateTime: Date;
  location: string;
  cost: string;
}

interface EventsSectionProps {
  events: Event[];
  title: string;
}

const EventsSection: React.FC<EventsSectionProps> = ({ events, title }) => {
  const { isLoggedIn, userId } = useAuth();

  const joinEventMutation = useMutation({
    mutationFn: ({ eventId, userId }: { eventId: string, userId: string }) => joinEvent(eventId, userId),
    onSuccess: (data) => {
      console.log('Event joined successfully:', data);
    },
    onError: (error) => {
      console.error('Error joining event:', error);
    },
  });

  const [signInDialogOpen, setSignInDialogOpen] = useState(false);
  const [createEventDialogOpen, setCreateEventDialogOpen] = useState(false);

  const handleSignInClose = () => {
    setSignInDialogOpen(false);
  };

  const handleCreateEventClose = () => {
    setCreateEventDialogOpen(false);
  };

  const handleSignIn = () => {
    setSignInDialogOpen(true);
  };

  const handleCreateEventOpen = () => {
    setCreateEventDialogOpen(true);
  };

  const chunkEvents = (events: Event[], size: number) => {
    const chunks = [];
    for (let i = 0; i < events.length; i += size) {
      chunks.push(events.slice(i, i + size));
    }
    return chunks;
  };

  const eventChunks = chunkEvents(events, 4);

  const handleJoin = (eventId: string) => {
    if (isLoggedIn && userId) {
      joinEventMutation.mutate({ eventId, userId });
    } else {
      handleSignIn();
    }
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Box sx={{ py: 4, px: 2, width: '100%' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography
            variant="h5"
            component="h2"
            sx={{
              fontWeight: 'bold',
              color: 'text.primary',
            }}
          >
            {title}
          </Typography>
          <StandardButton label="Add Event" buttonColor="yellow" onClick={handleCreateEventOpen} />
        </Box>
        <Carousel
          indicators={true}
          navButtonsAlwaysVisible={true}
          autoPlay={false}
          NextIcon={<ArrowForwardIos sx={{ color: 'white' }} />}
          PrevIcon={<ArrowBackIos sx={{ color: 'white' }} />}
          navButtonsProps={{
            style: {
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              color: 'white',
              margin: '0 0px',
              zIndex: 2,
            },
          }}
          navButtonsWrapperProps={{
            style: {
              top: '50%',
              transform: 'translateY(-50%)',
            },
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
                  secondaryButtonLabel={isLoggedIn ? "Join" : "Sign in to Join"}
                  onClick={() => handleJoin(event.id)}
                />
              ))}
            </Box>
          ))}
        </Carousel>
      </Box>

      <Dialog open={signInDialogOpen} onClose={handleSignInClose} fullWidth maxWidth="sm">
        <SignInProvider>
          <SigninPageDialog onClose={handleSignInClose} />
        </SignInProvider>
      </Dialog>

      <Dialog open={createEventDialogOpen} onClose={handleCreateEventClose} fullWidth maxWidth="md">
        <CreateEventDialog open={createEventDialogOpen} onClose={handleCreateEventClose} />
      </Dialog>
    </Box>
  );
};

export default EventsSection;
