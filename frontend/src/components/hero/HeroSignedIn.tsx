import { Box, Container, styled, Typography } from "@mui/material"
import UserProfile from "./UserProfileCard"
import { useQuery } from "@tanstack/react-query"
import useAuth from "../../hooks/useAuth"
import { getUserDetails } from "../../queries/user"

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
    fname: string
    lname: string
    email: string
    isHomeSchooled: boolean
    school: string
}


export default function HeroNotSignedIn() {
    const { userId } = useAuth();

    const { data: userData, isLoading, error } = useQuery<UserProfileData>({
        queryKey: ['userDetails', userId],
        queryFn: () => getUserDetails(userId!),
        enabled: !!userId,
  });

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  if (error) {
    return <Typography>Error loading user details.</Typography>;
  }

  if (!userData) {
    return <Typography>No user data available.</Typography>;
  }

    return (
        <Container maxWidth="md">
            <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 600 }}>
            {/* <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 600, marginBottom: 2, marginTop: 3}}> */}
                Welcome <HighlightedText>{userData.fname}</HighlightedText>
            </Typography>
            <UserProfileContainer>
                <UserProfile/>
            </UserProfileContainer>
        </Container>
    )
}