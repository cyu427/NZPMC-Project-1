import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import StandardButton from '../buttons/StandardButton';
import Box from '@mui/material/Box';
import DateTimeSection from './DateTimeSection';
import LocationSection from './LocationSection';
import CostSection from './CostSection';

interface EventCardProps {
  name: string;
  dateTime: Date;
  location: string;
  cost: string;
  primaryButtonLabel: string,
  secondaryButtonLabel: string,
  onClick: (eventId?: string) => void;
  onClickMoreInfo: () => void;
}

export default function EventCard({ name, dateTime, location, cost, primaryButtonLabel, secondaryButtonLabel, onClick, onClickMoreInfo }: EventCardProps) {
  return (
    <Card sx={{ width: 240, height: 270, border: '1px solid black'}}>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" align="center">
          {name}
        </Typography>
        <Box>
          <DateTimeSection dateTime= {dateTime} />
          <LocationSection location= {location} />
          <CostSection cost= {cost}/>
        </Box>
      </CardContent>
      <CardActions sx={{ pt: 0 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <StandardButton label={primaryButtonLabel} buttonColor="white" onClick={onClickMoreInfo}/>
            <StandardButton label={secondaryButtonLabel} buttonColor="blue" onClick={onClick}/>
        </Box>
      </CardActions>
    </Card>
  );
}