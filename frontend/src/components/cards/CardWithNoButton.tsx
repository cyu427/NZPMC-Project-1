import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import DateTimeSection from './DateTimeSection';
import LocationSection from './LocationSection';
import CostSection from './CostSection';

interface EventCardProps {
  name: string;
  dateTime: Date;
  location: string;
  cost: string;
}

export default function EventCardWithNoButton({ name, dateTime, location, cost }: EventCardProps) {
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
    </Card>
  );
}