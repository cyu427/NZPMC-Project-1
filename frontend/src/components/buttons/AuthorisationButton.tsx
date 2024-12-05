import React from 'react';
import { Button } from '@mui/material';

const navButtonStyle = {
    borderRadius: 100,
    textTransform: 'none',
    fontSize: '16px',
    padding: '7px 15px',
    width: '100px',
    height: '40px',
};

const landingButtonStyle = {
    borderRadius: 100,
    textTransform: 'none',
    fontSize: '20px',
    padding: '27px 48px',
    minWidth: '180px',
    height: '80px',
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
    label: string;
    buttonType: 'nav' | 'landing';
    buttonColor: 'blue' | 'white';
}

const AuthorisationButton: React.FC<AuthorisationButtonProps> = ({ label, buttonType, buttonColor }) => {
    // Conditionally apply the styles based on the buttonType
    let buttonTypeStyle;
    switch (buttonType) {
        case 'nav':
            buttonTypeStyle = {...navButtonStyle};
            break;
        case 'landing':
            buttonTypeStyle = {...landingButtonStyle}
    }

    let buttonColorStyle;
    switch (buttonColor) {
        case 'blue':
            buttonColorStyle = {...blueButtonStyle};
            break;
        case 'white':
            buttonColorStyle = {...whiteButtonStyle}
    }

    return (
        <div>
            <Button type="submit" sx={{ ...buttonTypeStyle, ...buttonColorStyle }}>
                {label}
            </Button>
        </div>
    );
};

export default AuthorisationButton;