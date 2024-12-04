import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import DollarIcon from '../icons/DollarIcon';

interface CostSectionProps {
    cost: string; // The prop for custom date and time
}

const CostSection: React.FC<CostSectionProps> = ({ cost: cost}) => {
    return (
        <Box display="flex" alignItems="center"> {/* Use flexbox for horizontal alignment */}
            <DollarIcon /> {/* Use the CalendarIcon component */}
            <Typography variant="body2" sx={{ color: 'text.primary', marginLeft: 1, fontSize: 16 }}> {/* Add margin to space out the icon and text */}
                {cost}
            </Typography>
        </Box>
    );
};

export default CostSection;
