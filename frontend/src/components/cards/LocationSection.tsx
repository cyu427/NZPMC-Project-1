import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import LocationIcon from '../icons/LocationIcon';

interface LocationSectionProps {
    location: string; // The prop for custom date and time
}

const LocationSection: React.FC<LocationSectionProps> = ({ location: location}) => {
    return (
        <Box display="flex" alignItems="center"> {/* Use flexbox for horizontal alignment */}
            <LocationIcon /> {/* Use the CalendarIcon component */}
            <Typography variant="body2" sx={{ color: 'text.primary', marginLeft: 1, fontSize: 16 }}> {/* Add margin to space out the icon and text */}
                {location}
            </Typography>
        </Box>
    );
};

export default LocationSection;
