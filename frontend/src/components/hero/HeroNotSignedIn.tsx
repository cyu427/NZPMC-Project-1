import { Box, Container, styled, Typography } from "@mui/material"
import AuthorisationButton from "../buttons/AuthorisationButton"

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
    return (
        <Container maxWidth="md">
            <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 600 }}>
                Welcome to <HighlightedText>NZPMC</HighlightedText>
            </Typography>
            <Typography variant="h5" sx={{ mb: 4, fontWeight: 400 }}>
                All-in-one portal for NZPMC event registration and payment
            </Typography>
            <ButtonContainer>
                <AuthorisationButton label='Sign in' buttonType='landing' buttonColor='white' actionType="login"/>
                <AuthorisationButton label='Register' buttonType='landing' buttonColor='blue' actionType="register"/>
            </ButtonContainer>
        </Container>
    )
}