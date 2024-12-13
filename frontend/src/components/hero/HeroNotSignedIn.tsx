import { Box, Container, Dialog, styled, Typography } from "@mui/material"
import AuthorisationButton from "../buttons/AuthorisationButton"
import { useState } from "react";
import { SignInProvider } from "../../provider/SigninProvider";
import SigninPageDialog from "../signIn/SigninPageDialog";
import { RegisterProvider } from "../../provider/RegisterProvider";
import RegisterDialog from "../register/RegisterDialog";

const HighlightedText = styled('span')({
    color: '#FFD700',
})

const ButtonContainer = styled(Box)({    
    display: 'flex',
    gap: '150px',
    alignItems: 'center',
    justifyContent: 'center',
})

export default function HeroNotSignedIn() {
    const [open, setOpen] = useState(false);
    const [dialogType, setDialogType] = useState<'signIn' | 'register' | null>(null);

    const handleClose = () => {
        setOpen(false);
        setDialogType(null);
    };

    const handleSignIn = () => {
        setDialogType('signIn');
        setOpen(true);
    };

    const handleRegister = () => {
        setDialogType('register');
        setOpen(true);
    };

    return (
        <Container maxWidth="md">
            <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 600 }}>
                Welcome to <HighlightedText>NZPMC</HighlightedText>
            </Typography>
            <Typography variant="h5" sx={{ mb: 4, fontWeight: 400 }}>
                All-in-one portal for NZPMC event registration and payment
            </Typography>
            <ButtonContainer>
                <AuthorisationButton label='Sign in' buttonType='landing' buttonColor='white' onClick={handleSignIn}/>
                <AuthorisationButton label='Register' buttonType='landing' buttonColor='blue' onClick={handleRegister}/>
            </ButtonContainer>

            {/* Render Dialog Conditionally */}
            <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
                {dialogType === 'signIn' && (
                <SignInProvider>
                    <SigninPageDialog onClose={handleClose} />
                </SignInProvider>
                )}
                {dialogType === 'register' && (
                <RegisterProvider>
                    <RegisterDialog onClose={handleClose} />
                </RegisterProvider>
                )}
            </Dialog>
        </Container>
    )
}