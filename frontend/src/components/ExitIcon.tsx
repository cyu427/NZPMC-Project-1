import CancelIcon from '@mui/icons-material/Cancel';
import { IconButton } from '@mui/material';

const ExitIcon: React.FC = () => {
    return (
        <div>
            <IconButton sx={{ fontSize: 30 }}> {/* Adjust the size here */}
                <CancelIcon sx={{ fontSize: 'inherit' }} />
            </IconButton>
        </div>
    );
};

export default ExitIcon;
