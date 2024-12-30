import { Box } from "@mui/material";

import Navigation from "../components/Navigation";
import QuestionSection from "../components/questions/QuestionSection";
import Footer from "../components/footer/Footer";

const QuestionPage: React.FC = () => {

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
              <QuestionSection />
            </Box>
            <Footer />
        </Box>
    );
};

export default QuestionPage;
