import React from 'react';
import {
  Box,
  Typography,
  IconButton,
  Button,
  Paper,
  Link,
  styled,
  Grid,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const InfoRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  marginBottom: theme.spacing(1),
}));

const NZPMCRegistration: React.FC = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        width: 1000,
        height: 882,
        mx: 'auto',
        p: 3,
        position: 'relative',
      }}
    >
      <IconButton
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
        }}
      >
        <CloseIcon />
      </IconButton>

      <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
        NZPMC 2024 Round 1
      </Typography>

      <Typography variant="body1" paragraph>
        Register for the first round of annual New Zealand Physics and Mathematics Competition!
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
              Exam duration:
            </Typography>
            <Typography>1 hour</Typography>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
              Timeframe:
            </Typography>
            <Typography>
              Students may take <br/>the exam in any 60-minute time slot on 4th May 2024 (open for 24 hours NZT).
            </Typography>
            <Typography sx={{ fontStyle: 'italic', my: 1 }}>
              The latest time a student can start to have a full 60 minutes is 04/05/2024 at 11:00 PM NZT.
            </Typography>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
              Location:
            </Typography>
            <Typography>Online, Education Perfect (NO teacher supervision is required)</Typography>
            <Typography sx={{ fontStyle: 'italic', my: 1 }}>
              Students will receive their Education Perfect account details through the email they've used to register closer to the exam date.
            </Typography>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
              Resources to familiarise yourself with the Education Perfect platform for Round 1:
            </Typography>
            <Box component="ul" sx={{ pl: 4 }}>
              <li>
                <Link href="https://youtu.be/xJA6OKwwaT0" target="_blank" rel="noopener">
                  https://youtu.be/xJA6OKwwaT0
                </Link>
              </li>
              <li>
                <Link href="https://help.students.educationperfect.com/" target="_blank" rel="noopener">
                  https://help.students.educationperfect.com/
                </Link>
              </li>
            </Box>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
              Questions format:
            </Typography>
            <Typography>40 multi-choice questions for both Juniors and Seniors</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box sx={{ my: 4 }}>
            <InfoRow>
              <CalendarTodayIcon color="primary" />
              <Typography>02/12/2024</Typography>
            </InfoRow>
            <InfoRow>
              <AccessTimeIcon color="primary" />
              <Typography>3pm</Typography>
            </InfoRow>
            <InfoRow>
              <LocationOnIcon color="primary" />
              <Typography>University of Auckland</Typography>
            </InfoRow>
            <InfoRow>
              <AttachMoneyIcon color="primary" />
              <Typography>13.50</Typography>
            </InfoRow>
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ textAlign: 'center', mt: 3 }}>
        <Button
          variant="contained"
          size="large"
          sx={{
            width: '100%',
            borderRadius: 28,
            py: 1,
            mb: 1,
            textTransform: 'none',
            fontSize: '1.1rem',
          }}
        >
          Join Event
        </Button>
        <Typography color="error" variant="body2">
          Registration deadline: 31/12/2024, 11:59pm
        </Typography>
      </Box>
    </Paper>
  );
};

export default NZPMCRegistration;

