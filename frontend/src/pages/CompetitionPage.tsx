import { Box } from "@mui/material";

import Navigation from "../components/Navigation";
import Footer from "../components/footer/Footer";
import CompetitionSection from "../components/competition/CompetitionSection";

const CompetitionPage: React.FC = () => {

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
              <CompetitionSection />
            </Box>
            <Footer />
        </Box>
    );
};

export default CompetitionPage;
