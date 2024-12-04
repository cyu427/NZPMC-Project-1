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

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345, border: '1px solid black'}}>
      <CardMedia
        sx={{ height: 140 }}
        image="/studying.jpg"  
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" align="center">
          NZPMC 2024 Round 1
        </Typography>
        <DateTimeSection dateTime="30 Dec, 1pm" />
        <LocationSection location="Location: University of Auckland" />
        <CostSection cost="Cost: 13.50" />
      </CardContent>
      <CardActions sx={{ pt: 0, pb: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <StandardButton label="More Info" buttonColor="white" />
            <StandardButton label="Sign in to Join" buttonColor="blue" />
        </Box>
      </CardActions>
    </Card>
  );
}