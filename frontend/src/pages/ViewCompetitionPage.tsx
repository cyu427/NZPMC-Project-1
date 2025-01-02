import { Box } from "@mui/material";

import Navigation from "../components/Navigation";
import Footer from "../components/footer/Footer";
import CompetitionSection from "../components/competition/CompetitionSection";
import CompetitionDetailSection from "../components/competition/CompetitionDetailSection";

const ViewCompetitionPage: React.FC = () => {

    return (
        <Box 
          component="main"
          sx={{ 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center', // Centers everything horizontally
            minHeight: '100vh',  // Ensure the page takes up the full viewport height
          }}
        >
            <Navigation />
            <Box 
              sx={{ 
                width: '100vw',
                flexGrow: 1,
                marginTop: '100px',
                paddingBottom: '50px',
              }}
            > 
              <CompetitionDetailSection />
            </Box>
            <Footer />
        </Box>
    );
};

export default ViewCompetitionPage;
