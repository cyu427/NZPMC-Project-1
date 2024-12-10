// import { Box, Typography} from '@mui/material';
// import Carousel from 'react-material-ui-carousel';
// import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
// import EventCard from '../cards/Card';

// interface Event {
//   id: string;
//   title: string;
//   date: string;
//   location: string;
//   cost: string;
// }

// export default function EventsSection() {
//   const events: Event[] = [
//     {
//       id: '1',
//       title: 'NZPMC 2024 Round 1',
//       date: '30 Dec, 1pm',
//       location: 'University of Auckland',
//       cost: '13.50',
//     },
//     {
//       id: '2',
//       title: 'NZPMC 2024 Round 2',
//       date: '30 Dec, 1pm',
//       location: 'University of Auckland',
//       cost: '13.50',
//     },
//     {
//       id: '3',
//       title: 'NZPMC 2024 Round 3',
//       date: '30 Dec, 1pm',
//       location: 'University of Auckland',
//       cost: '13.50',
//     },
//     {
//       id: '4',
//       title: 'NZPMC 2024 Round 4',
//       date: '30 Dec, 1pm',
//       location: 'University of Auckland',
//       cost: '13.50',
//     },
//     {
//       id: '5',
//       title: 'NZPMC 2024 Round 5',
//       date: '31 Dec, 1pm',
//       location: 'University of Auckland',
//       cost: '13.50',
//     },
//     // Add more events as needed
//   ];

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
//           Events
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
//               // margin: '0 610px',

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
//                   title={event.title}
//                   date={event.date}
//                   location={event.location}
//                   cost={event.cost}
//                   primaryButtonLabel="More Info"
//                   secondaryButtonLabel="Sign in to Join"
//                 />
//               ))}
//             </Box>
//           ))}
//         </Carousel>
//       </Box>
//     </Box>
//   );
// }

import React from 'react';
import { Box, Typography } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import EventCard from '../cards/Card';

interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  cost: string;
}

interface EventsSectionProps {
  events: Event[];
  title: string;
}

const EventsSection: React.FC<EventsSectionProps> = ({ events, title }) => {
  const chunkEvents = (events: Event[], size: number) => {
    const chunks = [];
    for (let i = 0; i < events.length; i += size) {
      chunks.push(events.slice(i, i + size));
    }
    return chunks;
  };

  const eventChunks = chunkEvents(events, 4);

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
                  title={event.title}
                  date={event.date}
                  location={event.location}
                  cost={event.cost}
                  primaryButtonLabel="More Info"
                  secondaryButtonLabel="Sign in to Join"
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
