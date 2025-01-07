import { Box } from "@mui/material";
import Navigation from "../../components/Navigation";
import EventSection from "../../components/EventSection/EventSection";
import Footer from "../../components/footer/Footer";
import HeroSectionNotSignedIn from "../../components/HeroSectionNotSignedIn";
import { getAllEvents } from "../../queries/event";
import { useQuery } from "@tanstack/react-query";
import { useGetAllEvents } from "../../queries/event/useGetAllEvent";

interface Event {
  id: string;
  name: string;
  dateTime: Date;
  location: string;
  cost: string;
}

const LandingPage: React.FC = () => {

  const { data, error, isLoading } = useGetAllEvents();
  console.log(data);

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
              }}
            > 
              <EventSection events={data || []} title="Upcoming Events" /> 
            </Box>
            <Footer />
        </Box>
    );
};

export default LandingPage;
