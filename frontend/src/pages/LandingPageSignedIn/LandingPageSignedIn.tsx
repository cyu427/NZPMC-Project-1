import { Box } from "@mui/material";
import Navigation from "../../components/Navigation";
import EventSection from "../../components/EventSection/EventSection";
import Footer from "../../components/footer/Footer";
import HeroSectionSignedIn from "../../components/HeroSectionSignedIn";

interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  cost: string;
}

const events: Event[] = [
    {
      id: '1',
      title: 'NZPMC 2024 Round 1',
      date: '30 Dec, 1pm',
      location: 'University of Auckland',
      cost: '13.50',
    },
    {
      id: '2',
      title: 'NZPMC 2024 Round 2',
      date: '30 Dec, 1pm',
      location: 'University of Auckland',
      cost: '13.50',
    },
    {
      id: '3',
      title: 'NZPMC 2024 Round 3',
      date: '30 Dec, 1pm',
      location: 'University of Auckland',
      cost: '13.50',
    },
    {
      id: '4',
      title: 'NZPMC 2024 Round 4',
      date: '30 Dec, 1pm',
      location: 'University of Auckland',
      cost: '13.50',
    },
    {
      id: '5',
      title: 'NZPMC 2024 Round 5',
      date: '31 Dec, 1pm',
      location: 'University of Auckland',
      cost: '13.50',
    },
    // Add more events as needed
  ];

const LandingPageSignedIn: React.FC = () => {
    return (
        <Box 
          component="main"
          sx={{ 
            display: 'flex', 
            flexDirection: 'column',
            minHeight: '85vh',
            alignItems: 'stretch',
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
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                mx: 'auto', // Margin auto for centering
              }}
            > 
              <EventSection events={events} title="Joined Events" />
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
              <EventSection events={events} title="Upcoming Events" />
            </Box>
            <Footer />
        </Box>
    );
};

export default LandingPageSignedIn;

