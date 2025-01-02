import { Box } from "@mui/material";

import Navigation from "../components/Navigation";
import Footer from "../components/footer/Footer";
import CompetitionAttemptSection from "../components/competition/CompetitionAttempt";

const StartCompetitionPage: React.FC = () => {

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
              <CompetitionAttemptSection competitionId={"677090c82c6f1942c4b2aef4"} userId={"6768bad20ed8ad6500e07b5d"} />
            </Box>
            <Footer />
        </Box>
    );
};

export default StartCompetitionPage;
