import CancelIcon from '@mui/icons-material/Cancel';
import { IconButton } from '@mui/material';

const ExitIcon: React.FC = () => {
    return (
        <div>
            <IconButton> {/* Adjust the size here */}
                <CancelIcon sx={{ fontSize: 'inherit', color: 'black' }} />
            </IconButton>
        </div>
    );
};

export default ExitIcon;
