import { Box } from "@mui/material";
import Navigation from "../../components/Navigation";
import EventSection from "../../components/EventSection/EventSection";
import Footer from "../../components/footer/Footer";
import DataTableWithSearch from "../../components/table/DataTableWithSearch";
import { useQuery } from "@tanstack/react-query";
import { getAllEvents } from "../../queries/event";
import { getAllUsers } from "../../queries/admin/adminUser";
import { AccountWithId } from "../../schema/apiDataValidation/newAccountSchema";

interface Event {
  id: string;
  name: string;
  dateTime: Date;
  location: string;
  cost: string;
}

const AdminPage: React.FC = () => {
  const { data: events } = useQuery<Event[], Error>({
    queryKey: ['allEvents'],
    queryFn: getAllEvents,
  });

  const { data: users } = useQuery<AccountWithId[], Error>({
    queryKey: ['allUsers'],
    queryFn: getAllUsers,
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
        <DataTableWithSearch data={users}/> 
      </Box>
      <Footer />
    </Box>
  );
};

export default AdminPage;