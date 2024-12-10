import React from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  IconButton,
  Typography,
  styled,
  Grid,
  Tabs,
  Tab,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import DataTableWithSearch from '../table/DataTableWithSearch';

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 1200,
  width: '100%',
  margin: 'auto',
  marginTop: theme.spacing(4),
  position: 'relative',
  padding: theme.spacing(3),
  boxShadow: theme.shadows[3],
}));

const CloseButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  right: theme.spacing(1),
  top: theme.spacing(1),
  color: theme.palette.grey[500],
}));

const DetailItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  marginBottom: theme.spacing(1),
}));

const JoinButton = styled(Button)(({ theme }) => ({
  width: '100%',
  marginTop: theme.spacing(2),
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
  textTransform: 'none',
  fontSize: '1rem',
}));

interface EventDetails {
  title: string;
  date: string;
  time: string;
  location: string;
  price: number;
  registrationDeadline: string;
}

interface EventDetailsProps {
  eventDetails: EventDetails;
  examDetailsHtml: string;
  onClose?: () => void;
  onJoin?: () => void;
  admin?: boolean;
}

const EventDetailsContent: React.FC<{ examDetailsHtml: string, eventDetails: EventDetails, onJoin?: () => void }> = ({ examDetailsHtml, eventDetails, onJoin}) => (
  <Grid container spacing={3}>
    <Grid item xs={12} md={6}>
      <div dangerouslySetInnerHTML={{ __html: examDetailsHtml }} />
    </Grid>
    <Grid item xs={12} md={6}>
            <DetailItem>
              <CalendarTodayIcon color="action" />
              <Typography variant="body2">{eventDetails.date}</Typography>
            </DetailItem>

            <DetailItem>
              <AccessTimeIcon color="action" />
              <Typography variant="body2">{eventDetails.time}</Typography>
            </DetailItem>

            <DetailItem>
              <LocationOnIcon color="action" />
              <Typography variant="body2">{eventDetails.location}</Typography>
            </DetailItem>

            <DetailItem>
              <AttachMoneyIcon color="action" />
              <Typography variant="body2">{eventDetails.price.toFixed(2)}</Typography>
            </DetailItem>

            <JoinButton variant="contained" color="primary" onClick={onJoin}>
              Join Event
            </JoinButton>

            <Typography variant="caption" display="block" align="center" sx={{ mt: 2, color: 'error.main' }}>
              Registration deadline: {eventDetails.registrationDeadline}
            </Typography>
          </Grid>
  </Grid>
);

const RegistrationContent: React.FC<{ onJoin?: () => void }> = ({  onJoin }) => (
  <Box sx={{ width: '100%' }}>
    <DataTableWithSearch />
  </Box>
);

export default function EventDetails({ 
  eventDetails, 
  examDetailsHtml, 
  onClose, 
  onJoin,
  admin,
}: EventDetailsProps) {
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <StyledCard>
      <CloseButton aria-label="close" onClick={onClose}>
        <CloseIcon />
      </CloseButton>

      <CardContent>
        <Typography variant="h5" gutterBottom align="center" sx={{ fontWeight: 'bold', mb: 3 }}>
          {eventDetails.title}
        </Typography>

        {
          <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 6 }}>
            <Tabs value={tabValue} onChange={handleTabChange} aria-label="event navigation">
              <Tab label="Event Details" />
              {admin && <Tab label="Participants" />} 
            </Tabs>
          </Box>
        }

        {tabValue === 0 && <EventDetailsContent examDetailsHtml={examDetailsHtml} eventDetails={eventDetails} onJoin={onJoin}/>}
        {admin && tabValue === 1 && <RegistrationContent onJoin={onJoin} />}
      </CardContent>
    </StyledCard>
  );
}

