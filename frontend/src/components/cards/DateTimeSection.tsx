import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import CalendarIcon from '../icons/CalendarIcon';

interface DateTimeSectionProps {
    dateTime: string; // The prop for custom date and time
}

const DateTimeSection: React.FC<DateTimeSectionProps> = ({ dateTime}) => {
    return (
        <Box display="flex" alignItems="center"> {/* Use flexbox for horizontal alignment */}
            <CalendarIcon /> {/* Use the CalendarIcon component */}
            <Typography variant="body2" sx={{ color: 'text.primary', marginLeft: 1, fontSize: 15 }}> {/* Add margin to space out the icon and text */}
                {dateTime}
            </Typography>
        </Box>
    );
};

export default DateTimeSection;
