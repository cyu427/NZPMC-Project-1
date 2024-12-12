// import React from 'react';
// import { Box, Typography } from '@mui/material';
// import Carousel from 'react-material-ui-carousel';
// import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
// import EventCard from '../cards/Card';
// import useAuth from '../../hooks/useAuth';

// interface Event {
//   id: string;
//   name: string;
//   date: string;
//   location: string;
//   cost: string;
// }

// interface EventsSectionProps {
//   events: Event[];
//   title: string;
// }

// const EventsSection: React.FC<EventsSectionProps> = ({ events, title }) => {
//   const { isLoggedIn } = useAuth();

//   const chunkEvents = (events: Event[], size: number) => {
//     const chunks = [];
//     for (let i = 0; i < events.length; i += size) {
//       chunks.push(events.slice(i, i + size));
//     }
//     return chunks;
//   };

//   const eventChunks = chunkEvents(events, 4);

//   return (
//     <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//       <Box sx={{ py: 4, px: 2, width: '100%' }}>
//         <Typography 
//           variant="h5" 
//           component="h2" 
//           sx={{ 
//             mb: 3, 
//             fontWeight: 'bold',
//             color: 'text.primary',
//             textAlign: 'center',
//           }}
//         >
//           {title}
//         </Typography>
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
//                   date={event.date}
//                   location={event.location}
//                   cost={event.cost}
//                   primaryButtonLabel="More Info"
//                   secondaryButtonLabel={isLoggedIn ? "Join" : "Sign in to Join"}
//                 />
//               ))}
//             </Box>
//           ))}
//         </Carousel>
//       </Box>
//     </Box>
//   );
// };

// export default EventsSection;


import React from 'react';
import { Box, Typography } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import EventCard from '../cards/Card';
import useAuth from '../../hooks/useAuth';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

// Define the mutation function for joining an event
const joinEvent = async ({ eventId, userId }: { eventId: string, userId: string }) => {
  const response = await axios.post(`http://localhost:3001/event/${eventId}/${userId}`);
  return response.data;
};

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

  // Set up the mutation to join an event
  const { mutate: joinEventMutation, isLoading, error } = useMutation({
    mutationFn: joinEvent,
    onSuccess: (data) => {
      console.log('Event joined successfully:', data);
    },
    onError: (error) => {
      console.error('Error joining event:', error);
    },
  });

  // Chunk events into groups of 4 for display
  const chunkEvents = (events: Event[], size: number) => {
    const chunks = [];
    for (let i = 0; i < events.length; i += size) {
      chunks.push(events.slice(i, i + size));
    }
    return chunks;
  };

  const eventChunks = chunkEvents(events, 4);

  const handleJoinEvent = (eventId: string) => {
    if (userId) {
      joinEventMutation({ eventId, userId }); // Pass both eventId and userId as an object
    } else {
      console.log('User not logged in');
    }
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Box sx={{ py: 4, px: 2, width: '100%' }}>
        <Typography 
          variant="h5" 
          component="h2" 
          sx={{ 
            mb: 3, 
            fontWeight: 'bold',
            color: 'text.primary',
            textAlign: 'center',
          }}
        >
          {title}
        </Typography>
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
                  //onJoin={() => handleJoinEvent(event.id)} // Pass onJoin to EventCard
                />
              ))}
            </Box>
          ))}
        </Carousel>
      </Box>
    </Box>
  );
};

export default EventsSection;


