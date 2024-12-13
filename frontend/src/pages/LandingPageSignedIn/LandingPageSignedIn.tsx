import { Box, CircularProgress, Typography } from "@mui/material";
import Navigation from "../../components/Navigation";
import EventSection from "../../components/EventSection/EventSection";
import Footer from "../../components/footer/Footer";
import HeroSectionSignedIn from "../../components/HeroSectionSignedIn";
import { getAllEvents, getEventByUser } from "../../queries/event";
import { useQuery } from "@tanstack/react-query";
import HeroSectionNotSignedIn from "../../components/HeroSectionNotSignedIn";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";

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

  const { data: events } = useQuery<Event[], Error>({
    queryKey: ['allEvents'],
    queryFn: getAllEvents,
  });

  const { data: eventByUser, isError, isSuccess } = useQuery<Event[], Error>({
    queryKey: ['userEvents', userId],
    queryFn: () => getEventByUser(userId!),
    enabled: !!userId
  });

  if (isError) {
    console.log('eventByUser: not good',);
  }

  if (isSuccess) {
    console.log('eventByUser: good', eventByUser);
  }

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
        <EventSection events={events || []} title="Upcoming Events" /> 
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

