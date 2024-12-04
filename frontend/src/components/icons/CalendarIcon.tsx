import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { IconButton } from '@mui/material';

const CalendarIcon: React.FC = () => {
    return (
        <div>
            <IconButton sx={{ fontSize: 30 }}> {/* Adjust the size here */}
                <CalendarMonthIcon sx={{ fontSize: 'inherit' }} />
            </IconButton>
        </div>
    );
};

export default CalendarIcon;
