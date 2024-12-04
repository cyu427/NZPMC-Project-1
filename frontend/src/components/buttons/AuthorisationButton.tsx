import React from 'react';
import { Button } from '@mui/material';

const templateButtonStyle = {
    borderRadius: 100,
    textTransform: 'none',
    fontSize: '16px',
    padding: '7px 15px',
};

const blueButtonStyle = {
    backgroundColor: '#285DE5',
    color: 'white',
    border: '2px solid #285DE5',
    '&:hover': {
        backgroundColor: 'white',
        color: '#285DE5',
    },
};

const whiteButtonStyle = {
    backgroundColor: 'white',
    color: '#285DE5',
    border: '2px solid #285DE5',
    '&:hover': {
        backgroundColor: '#1C4BB9',
        color: 'white',
    },
};

interface AuthorisationButtonProps {
    buttonType: 'register' | 'signin' | 'signout';
}

const AuthorisationButton: React.FC<AuthorisationButtonProps> = ({ buttonType }) => {
    // Conditionally apply the styles based on the buttonType
    let buttonStyle = {};

    switch (buttonType) {
        case 'register':
            buttonStyle = { ...templateButtonStyle, ...blueButtonStyle };
            break;
        case 'signin':
            buttonStyle = { ...templateButtonStyle, ...whiteButtonStyle };
            break;
        case 'signout':
            buttonStyle = { ...templateButtonStyle, ...whiteButtonStyle };
            break;
    }

    return (
        <div>
            <Button type="submit" sx={buttonStyle}>
                {buttonType === 'register' ? 'Register' : buttonType === 'signin' ? 'Sign In' : 'Sign Out'}
            </Button>
        </div>
    );
};

export default AuthorisationButton;