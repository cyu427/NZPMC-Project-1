import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import CalendarIcon from '../icons/CalendarIcon';

interface DateTimeSectionProps {
    dateTime?: Date | string; // Allow both Date and string types
}

const DateTimeSection: React.FC<DateTimeSectionProps> = ({ dateTime }) => {
    // Ensure we have a valid Date object
    const validDateTime = dateTime instanceof Date 
        ? dateTime 
        : dateTime 
            ? new Date(dateTime) 
            : null;

    // Format the date if it's valid
    const formattedDateTime = validDateTime 
        ? new Intl.DateTimeFormat('en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        }).format(validDateTime)
        : 'Date Not Available';

    return (
        <Box display="flex" alignItems="center">
            <CalendarIcon />
            <Typography variant="body2" sx={{ color: 'text.primary', marginLeft: 1, fontSize: 15 }}>
                {formattedDateTime}
            </Typography>
        </Box>
    );
};

export default DateTimeSection;