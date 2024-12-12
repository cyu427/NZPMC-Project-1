import { Box } from "@mui/material";
import Navigation from "../../components/Navigation";
import EventSection from "../../components/EventSection/EventSection";
import Footer from "../../components/footer/Footer";
import DataTableWithSearch from "../../components/table/DataTableWithSearch";
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

const AdminPage: React.FC = () => {
    // return (
    //     <Box 
    //       component="main"
    //       sx={{ 
    //         display: 'flex', 
    //         flexDirection: 'column',
    //         minHeight: '100vh', // Full height of the viewport
    //       }}
    //     >
    //         <Navigation />
    //         <Box 
    //           sx={{ 
    //             paddingTop: '30px',
    //             width: '1200px',
    //             dth: '100%',
    //           }}
    //         >
    //           <EventSection events={events} title="All Events" /> 
    //         </Box>
    //         <Box 
    //           sx={{
    //             paddingTop: '30px',
    //             maxWidth: '1200px',
    //             flexDirection: 'column',
    //             alignItems: 'center',
    //             justifyContent: 'center',
    //             mx: 'auto', // Margin auto for centering
    //             paddingBottom: '30px',
    //           }}
    //         >
    //           <DataTableWithSearch />
    //         </Box>
    //         <Footer />
    //     </Box>
    // );

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
      <Box sx={{ width: '100vw', }}> 
      </Box>
      <Box 
        sx={{ 
          paddingTop: '60px',
          maxWidth: '1200px',
          width: '100%', // Ensure it takes full width up to max-width
        }}
      > 
        <EventSection events={events || []} title="All Events" /> 
      </Box>
      <Box 
        sx={{ 
          paddingTop: '30px',
          paddingBottom: '30px',
          maxWidth: '1200px',
          width: '100%', // Ensure it takes full width up to max-width
        }}
      > 
        <DataTableWithSearch /> 
      </Box>
      <Footer />
    </Box>
  );
};

export default AdminPage;