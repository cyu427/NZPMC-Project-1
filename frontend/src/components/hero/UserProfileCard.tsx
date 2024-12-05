'use client'

import { Box, Paper, Typography, styled } from '@mui/material'
import StandardButton from '../buttons/StandardButton'

interface UserProfileData {
  firstName: string
  lastName: string
  email: string
  homeSchooled: boolean
  school: string
}

const ProfileRow = styled(Box)({
  display: 'flex',
  marginBottom: '8px',
})

const ProfileLabel = styled(Typography)({
  color: '#fff',
  fontWeight: 'bold',
  width: '140px',
  flexShrink: 0,
  textAlign: 'left',
})

const ProfileValue = styled(Typography)({
  color: '#fff',
  flexGrow: 1,
  textAlign: 'left',
})

const ProfileContainer = styled(Paper)({
  backgroundColor: '#28242C',
  borderRadius: '16px',
  padding: '24px',
  width: '400px',
  height: '250px',
  border: '3px solid #fff',
  display: 'flex',
  flexDirection: 'column',
})

export default function UserProfile() {
  const userData: UserProfileData = {
    firstName: 'Cedric',
    lastName: 'Yu',
    email: 'cedricyu3717@hotmail.com',
    homeSchooled: true,
    school: 'Westlake Boys High School',
  }

  return (
    <ProfileContainer elevation={0}>
      <Typography variant="h5" sx={{ color: '#fff', mb: 2, fontWeight: 'bold' }}>
        User Profile
      </Typography>
      
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Box>
          <ProfileRow>
            <ProfileLabel>First Name:</ProfileLabel>
            <ProfileValue>{userData.firstName}</ProfileValue>
          </ProfileRow>
          
          <ProfileRow>
            <ProfileLabel>Last Name:</ProfileLabel>
            <ProfileValue>{userData.lastName}</ProfileValue>
          </ProfileRow>
          
          <ProfileRow>
            <ProfileLabel>Email:</ProfileLabel>
            <ProfileValue>{userData.email}</ProfileValue>
          </ProfileRow>
          
          <ProfileRow>
            <ProfileLabel>Home Schooled:</ProfileLabel>
            <ProfileValue>{userData.homeSchooled ? 'Yes' : 'No'}</ProfileValue>
          </ProfileRow>
          
          <ProfileRow>
            <ProfileLabel>School:</ProfileLabel>
            <ProfileValue>{userData.school}</ProfileValue>
          </ProfileRow>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1}}>
          <StandardButton label='Edit Profile' buttonColor='yellow'/>
        </Box>
      </Box>
    </ProfileContainer>
  )
}

