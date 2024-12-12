import { Box } from "@mui/material";
import Navigation from "../../components/Navigation";
import EventSection from "../../components/EventSection/EventSection";
import Footer from "../../components/footer/Footer";
import HeroSectionNotSignedIn from "../../components/HeroSectionNotSignedIn";
import { getAllEvents } from "../../queries/event";
import { useQuery } from "@tanstack/react-query";

interface Event {
  id: string;
  name: string;
  dateTime: Date;
  location: string;
  cost: string;
}

const LandingPage: React.FC = () => {
  const { data: events } = useQuery<Event[], Error>({
    queryKey: ['allEvents'],
    queryFn: getAllEvents,
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
              <HeroSectionNotSignedIn /> 
            </Box>
            <Box 
              sx={{ 
                maxWidth: '1200px',
                width: '100%', // Ensure it takes full width up to max-width
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                mx: 'auto', // Margin auto for centering
              }}
            > 
              <EventSection events={events || []} title="Upcoming Events" /> 
            </Box>
            <Footer />
        </Box>
    );
};

export default LandingPage;
