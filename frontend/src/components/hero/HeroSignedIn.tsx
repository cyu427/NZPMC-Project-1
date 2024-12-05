import { Box, Container, styled, Typography } from "@mui/material"
import UserProfile from "./UserProfileCard"

const HighlightedText = styled('span')({
    color: '#FFD700',
})

const UserProfileContainer = styled(Box)({    
    display: 'flex',
    gap: '150px',
    alignItems: 'center',
    justifyContent: 'center',
})

interface UserProfileData {
    firstName: string
    lastName: string
    email: string
    homeSchooled: boolean
    school: string
}

const userData: UserProfileData = {
    firstName: 'Cedric',
    lastName: 'Yu',
    email: 'cedricyu3717@hotmail.com',
    homeSchooled: true,
    school: 'Westlake Boys High School',
}


export default function HeroNotSignedIn() {
    return (
        <Container maxWidth="md">
            <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 600, marginBottom: 1}}>
                Welcome <HighlightedText>{userData.firstName}</HighlightedText>
            </Typography>
            <UserProfileContainer>
                <UserProfile/>
            </UserProfileContainer>
        </Container>
    )
}