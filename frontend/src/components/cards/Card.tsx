import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import StandardButton from '../buttons/StandardButton';
import Box from '@mui/material/Box';
import DateTimeSection from './DateTimeSection';
import LocationSection from './LocationSection';
import CostSection from './CostSection';

interface EventCardProps {
  title: string;
  date: string;
  location: string;
  cost: string;
  primaryButtonLabel: string,
  secondaryButtonLabel: string,
}

export default function EventCard({ title, date, location, cost, primaryButtonLabel, secondaryButtonLabel }: EventCardProps) {
  return (
    <Card sx={{ width: 250, height: 270, border: '1px solid black'}}>
      <CardMedia
        sx={{ height: 0 }}
        image="/studying.jpg"  
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" align="center">
          {title}
        </Typography>
        <Box>
          <DateTimeSection dateTime= {date} />
          <LocationSection location= {location} />
          <CostSection cost= {cost}/>
        </Box>
      </CardContent>
      <CardActions sx={{ pt: 0 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <StandardButton label={primaryButtonLabel} buttonColor="white" / >
            <StandardButton label={secondaryButtonLabel} buttonColor="blue" />
        </Box>
      </CardActions>
    </Card>
  );
}