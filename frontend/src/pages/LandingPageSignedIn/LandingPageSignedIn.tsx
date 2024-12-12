import { Box, CircularProgress, Typography } from "@mui/material";
import Navigation from "../../components/Navigation";
import EventSection from "../../components/EventSection/EventSection";
import Footer from "../../components/footer/Footer";
import HeroSectionSignedIn from "../../components/HeroSectionSignedIn";
import { getAllEvents } from "../../queries/event";
import { useQuery } from "@tanstack/react-query";

interface Event {
  id: string;
  name: string;
  dateTime: Date;
  location: string;
  cost: string;
}

// const events: Event[] = [
//     {
//       id: '1',
//       title: 'NZPMC 2024 Round 1',
//       date: '30 Dec, 1pm',
//       location: 'University of Auckland',
//       cost: '13.50',
//     },
//     {
//       id: '2',
//       title: 'NZPMC 2024 Round 2',
//       date: '30 Dec, 1pm',
//       location: 'University of Auckland',
//       cost: '13.50',
//     },
//     {
//       id: '3',
//       title: 'NZPMC 2024 Round 3',
//       date: '30 Dec, 1pm',
//       location: 'University of Auckland',
//       cost: '13.50',
//     },
//     {
//       id: '4',
//       title: 'NZPMC 2024 Round 4',
//       date: '30 Dec, 1pm',
//       location: 'University of Auckland',
//       cost: '13.50',
//     },
//     {
//       id: '5',
//       title: 'NZPMC 2024 Round 5',
//       date: '31 Dec, 1pm',
//       location: 'University of Auckland',
//       cost: '13.50',
//     },
//     // Add more events as needed
//   ];

const LandingPageSignedIn: React.FC = () => {
  const { data: events, error, isLoading, isError } = useQuery<Event[], Error>({
    queryKey: ['allEvents'],
    queryFn: getAllEvents,
  });

  const renderContent = () => {
    if (isLoading) {
      return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
          <CircularProgress />
        </Box>
      );
    }

    if (isError) {
      console.error('Error fetching events:', error);
      return (
        <Box sx={{ textAlign: 'center', py: 4 }}>
          <Typography variant="h6" color="error">
            Error loading events. Please try again later.
          </Typography>
        </Box>
      );
    }

    console.log('events:', events);

    return (
      <>
        <Box 
          sx={{ 
            maxWidth: '1200px',
            width: '100%',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            mx: 'auto',
          }}
        > 
          <EventSection events={events || []} title="Upcoming Events" />
        </Box>
        <Box 
          sx={{ 
            maxWidth: '1200px',
            width: '100%',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            mx: 'auto',
          }}
        > 
          <EventSection events={events || []} title="Joined Events" />
        </Box>
      </>
    );
  };

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
      {renderContent()}
      <Footer />
    </Box>
  );
};

export default LandingPageSignedIn;

