// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import StandardButton from '../buttons/StandardButton';
// import Box from '@mui/material/Box';
// import DateTimeSection from './DateTimeSection';
// import LocationSection from './LocationSection';
// import CostSection from './CostSection';

// interface EventCardProps {
//   name: string;
//   date: string;
//   location: string;
//   cost: string;
//   primaryButtonLabel: string,
//   secondaryButtonLabel: string,
// }

// export default function EventCard({ name, date, location, cost, primaryButtonLabel, secondaryButtonLabel }: EventCardProps) {
//   return (
//     <Card sx={{ width: 240, height: 270, border: '1px solid black'}}>
//       <CardContent>
//         <Typography gutterBottom variant="h6" component="div" align="center">
//           {name}
//         </Typography>
//         <Box>
//           <DateTimeSection dateTime= {date} />
//           <LocationSection location= {location} />
//           <CostSection cost= {cost}/>
//         </Box>
//       </CardContent>
//       <CardActions sx={{ pt: 0 }}>
//         <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
//             <StandardButton label={primaryButtonLabel} buttonColor="white" />
//             <StandardButton label={secondaryButtonLabel} buttonColor="blue" />
//         </Box>
//       </CardActions>
//     </Card>
//   );
// }

import React from 'react';
import { Card, CardContent, Button, Typography } from '@mui/material';

interface EventCardProps {
  id: string;
  name: string;
  date: string;
  location: string;
  cost: string;
  primaryButtonLabel: string;
  secondaryButtonLabel: string;
  onJoin: () => void; // This will handle the join event logic
}

const EventCard: React.FC<EventCardProps> = ({
  id,
  name,
  date,
  location,
  cost,
  primaryButtonLabel,
  secondaryButtonLabel,
  onJoin
}) => {
  return (
    <Card sx={{ width: 250, boxShadow: 3, padding: 2 }}>
      <CardContent>
        <Typography variant="h6" component="h2" sx={{ mb: 1 }}>
          {name}
        </Typography>
        <Typography variant="body2" sx={{ mb: 1 }}>
          {date}
        </Typography>
        <Typography variant="body2" sx={{ mb: 1 }}>
          {location}
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          {cost}
        </Typography>
        {/* Primary Button */}
        <Button variant="contained" sx={{ width: '100%' }}>
          {primaryButtonLabel}
        </Button>
        {/* Secondary Button for Join */}
        <Button
          variant="outlined"
          sx={{ width: '100%', mt: 1 }}
          onClick={onJoin} // Call the onJoin function when the button is clicked
        >
          {secondaryButtonLabel}
        </Button>
      </CardContent>
    </Card>
  );
};

export default EventCard;
