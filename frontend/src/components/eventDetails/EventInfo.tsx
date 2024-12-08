import React from 'react';
import { Box, Typography, styled } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const InfoRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2), // Increased spacing between icon and text
  marginBottom: theme.spacing(2), // Increased spacing between rows
}));

const EventInfo: React.FC = () => {
  return (
    <Box>
      <InfoRow>
        <CalendarMonthIcon sx={{ color: 'black', fontSize: 32 }} /> {/* Increased icon size */}
        <Typography sx={{ fontSize: '1.25rem', fontWeight: 500 }}>02/12/2024</Typography> {/* Increased text size */}
      </InfoRow>
      <InfoRow>
        <AccessTimeIcon sx={{ color: 'black', fontSize: 32 }} />
        <Typography sx={{ fontSize: '1.25rem', fontWeight: 500 }}>3pm</Typography>
      </InfoRow>
      <InfoRow>
        <LocationOnIcon sx={{ color: 'black', fontSize: 32 }} />
        <Typography sx={{ fontSize: '1.25rem', fontWeight: 500 }}>University of Auckland</Typography>
      </InfoRow>
      <InfoRow>
        <AttachMoneyIcon sx={{ color: 'black', fontSize: 32 }} />
        <Typography sx={{ fontSize: '1.25rem', fontWeight: 500 }}>13.50</Typography>
      </InfoRow>
    </Box>
  );
};

export default EventInfo;
