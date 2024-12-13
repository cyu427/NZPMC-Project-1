import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import LocationIcon from '../icons/LocationIcon';

interface LocationSectionProps {
    location: string; 
}

const LocationSection: React.FC<LocationSectionProps> = ({ location: location}) => {
    return (
        <Box display="flex" alignItems="center"> 
            <LocationIcon /> 
            <Typography variant="body2" sx={{ color: 'text.primary', marginLeft: 1, fontSize: 16 }}> 
                {location}
            </Typography>
        </Box>
    );
};

export default LocationSection;
