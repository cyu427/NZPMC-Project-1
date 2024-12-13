import { Box, } from "@mui/material";
import Navigation from "../../components/Navigation";
import EventSection from "../../components/EventSection/EventSection";
import Footer from "../../components/footer/Footer";
import HeroSectionSignedIn from "../../components/HeroSectionSignedIn";
import { getEventByUser, getEventsUserNotJoined } from "../../queries/event";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";

interface Event {
  id: string;
  name: string;
  dateTime: Date;
  location: string;
  cost: string;
}

const LandingPageSignedIn: React.FC = () => {
  const { userId } = useAuth();
  

  console.log('userId:', userId);

  const { data: eventNotJoinedByUser, } = useQuery<Event[], Error>({
    queryKey: ['userEventsNotJoined', userId],
    queryFn: () => getEventsUserNotJoined(userId!),
    enabled: !!userId
  });

  const { data: eventByUser } = useQuery<Event[], Error>({
    queryKey: ['userEvents', userId],
    queryFn: () => getEventByUser(userId!),
    enabled: !!userId
  });


  return (
    <Box 
      component="main"
      sx={{ 
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center', // Centers everything horizontally
      }}
    >
      <Navigation />
      <Box sx={{ paddingTop: '30px' }}> 
        <HeroSectionSignedIn /> 
      </Box>
      <Box 
        sx={{ 
          maxWidth: '1200px',
          width: '100%', // Ensure it takes full width up to max-width
        }}
      > 
        <EventSection events={eventNotJoinedByUser || []} title="Upcoming Events (Not Joined)" /> 
      </Box>
      <Box 
        sx={{ 
          maxWidth: '1200px',
          width: '100%', // Ensure it takes full width up to max-width
        }}
      > 
        <EventSection events={eventByUser || []} title="Joined Events" /> 
      </Box>
      <Footer />
    </Box>
  );
};

export default LandingPageSignedIn;

