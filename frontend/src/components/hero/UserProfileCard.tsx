// import React from 'react';
// import { Box, Paper, Typography, styled } from '@mui/material';
// import { useQuery } from '@tanstack/react-query';
// import StandardButton from '../buttons/StandardButton';
// import { getUserDetails } from '../../queries/user';
// import useAuth from '../../hooks/useAuth';

// interface UserProfileData {
//   fname: string;
//   lname: string;
//   email: string;
//   isHomeSchooled: boolean;
//   school: string;
// }

// const ProfileRow = styled(Box)({
//   display: 'flex',
//   marginBottom: '8px',
// });

// const ProfileLabel = styled(Typography)({
//   color: '#fff',
//   fontWeight: 'bold',
//   width: '140px',
//   flexShrink: 0,
//   textAlign: 'left',
// });

// const ProfileValue = styled(Typography)({
//   color: '#fff',
//   flexGrow: 1,
//   textAlign: 'left',
// });

// const ProfileContainer = styled(Paper)({
//   backgroundColor: '#28242C',
//   borderRadius: '16px',
//   padding: '24px',
//   width: '400px',
//   height: '300px',
//   border: '3px solid #fff',
//   display: 'flex',
//   flexDirection: 'column',
// });

// export default function UserProfile() {
//   const { userId } = useAuth();

//   const { data: userData, isLoading, error } = useQuery<UserProfileData>({
//     queryKey: ['userDetails', userId],
//     queryFn: () => getUserDetails(userId!),
//     enabled: !!userId,
//   });

//   if (isLoading) {
//     return <Typography>Loading...</Typography>;
//   }

//   if (error) {
//     return <Typography>Error loading user details.</Typography>;
//   }

//   if (!userData) {
//     return <Typography>No user data available.</Typography>;
//   }

//   return (
//     <ProfileContainer elevation={0}>
//       <Typography variant="h5" sx={{ color: '#fff', mb: 2, fontWeight: 'bold' }}>
//         User Profile
//       </Typography>
      
//       <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
//         <Box>
//           <ProfileRow>
//             <ProfileLabel>First Name:</ProfileLabel>
//             <ProfileValue>{userData.fname}</ProfileValue>
//           </ProfileRow>
          
//           <ProfileRow>
//             <ProfileLabel>Last Name:</ProfileLabel>
//             <ProfileValue>{userData.lname}</ProfileValue>
//           </ProfileRow>
          
//           <ProfileRow>
//             <ProfileLabel>Email:</ProfileLabel>
//             <ProfileValue>{userData.email}</ProfileValue>
//           </ProfileRow>
          
//           <ProfileRow>
//             <ProfileLabel>Home Schooled:</ProfileLabel>
//             <ProfileValue>{userData.isHomeSchooled ? 'Yes' : 'No'}</ProfileValue>
//           </ProfileRow>
          
//           <ProfileRow>
//             <ProfileLabel>School:</ProfileLabel>
//             <ProfileValue>{userData.school}</ProfileValue>
//           </ProfileRow>
//         </Box>

//         <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1}}>
//           <StandardButton label='Edit Profile' buttonColor='yellow'/>
//         </Box>
//       </Box>
//     </ProfileContainer>
//   );
// }

// import React, { useState } from 'react';
// import { Box, Paper, Typography, styled, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button } from '@mui/material';
// import { useMutation, useQuery } from '@tanstack/react-query';
// import StandardButton from '../buttons/StandardButton';
// import { getUserDetails } from '../../queries/user';
// import useAuth from '../../hooks/useAuth';
// import { editName } from '../../queries/user';

// interface UserProfileData {
//   fname: string;
//   lname: string;
//   email: string;
//   isHomeSchooled: boolean;
//   school: string;
// }

// const ProfileRow = styled(Box)({
//   display: 'flex',
//   marginBottom: '8px',
// });

// const ProfileLabel = styled(Typography)({
//   color: '#fff',
//   fontWeight: 'bold',
//   width: '140px',
//   flexShrink: 0,
//   textAlign: 'left',
// });

// const ProfileValue = styled(Typography)({
//   color: '#fff',
//   flexGrow: 1,
//   textAlign: 'left',
// });

// const ProfileContainer = styled(Paper)({
//   backgroundColor: '#28242C',
//   borderRadius: '16px',
//   padding: '24px',
//   width: '400px',
//   height: '300px',
//   border: '3px solid #fff',
//   display: 'flex',
//   flexDirection: 'column',
// });

// export default function UserProfile() {
//   const { userId } = useAuth();
//   const [openEditModal, setOpenEditModal] = useState(false);
//   const [editedName, setEditedName] = useState<{ fname: string, lname: string }>({ fname: '', lname: '' });

//   const { data: userData, isLoading, error } = useQuery<UserProfileData>({
//     queryKey: ['userDetails', userId],
//     queryFn: () => getUserDetails(userId!),
//     enabled: !!userId,
//   });

//   if (isLoading) {
//     return <Typography>Loading...</Typography>;
//   }

//   if (error) {
//     return <Typography>Error loading user details.</Typography>;
//   }

//   if (!userData) {
//     return <Typography>No user data available.</Typography>;
//   }

//   const handleEditProfileClick = () => {
//     setEditedName({ fname: userData.fname, lname: userData.lname });  // Pre-fill the name fields with current values
//     setOpenEditModal(true);
//   };

//   const handleSave = () => {
//     // Handle saving the updated name to the backend (this could be a mutation or API call)
//     console.log('Updated Name:', editedName);

//     setOpenEditModal(false);
//   };

//   const handleClose = () => {
//     setOpenEditModal(false);
//   };

//   return (
//     <ProfileContainer elevation={0}>
//       <Typography variant="h5" sx={{ color: '#fff', mb: 2, fontWeight: 'bold' }}>
//         User Profile
//       </Typography>

//       <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
//         <Box>
//           <ProfileRow>
//             <ProfileLabel>First Name:</ProfileLabel>
//             <ProfileValue>{userData.fname}</ProfileValue>
//           </ProfileRow>

//           <ProfileRow>
//             <ProfileLabel>Last Name:</ProfileLabel>
//             <ProfileValue>{userData.lname}</ProfileValue>
//           </ProfileRow>

//           <ProfileRow>
//             <ProfileLabel>Email:</ProfileLabel>
//             <ProfileValue>{userData.email}</ProfileValue>
//           </ProfileRow>

//           <ProfileRow>
//             <ProfileLabel>Home Schooled:</ProfileLabel>
//             <ProfileValue>{userData.isHomeSchooled ? 'Yes' : 'No'}</ProfileValue>
//           </ProfileRow>

//           <ProfileRow>
//             <ProfileLabel>School:</ProfileLabel>
//             <ProfileValue>{userData.school}</ProfileValue>
//           </ProfileRow>
//         </Box>

//         <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1 }}>
//           <StandardButton label='Edit Profile' buttonColor='yellow' onClick={handleEditProfileClick} />
//         </Box>
//       </Box>

//       {/* Modal for editing profile */}
//       <Dialog open={openEditModal} onClose={handleClose}>
//         <DialogTitle>Edit Profile</DialogTitle>
//         <DialogContent>
//           <TextField
//             label="First Name"
//             fullWidth
//             value={editedName.fname}
//             onChange={(e) => setEditedName({ ...editedName, fname: e.target.value })}
//             margin="normal"
//           />
//           <TextField
//             label="Last Name"
//             fullWidth
//             value={editedName.lname}
//             onChange={(e) => setEditedName({ ...editedName, lname: e.target.value })}
//             margin="normal"
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose} color="primary">Cancel</Button>
//           <Button onClick={handleSave} color="primary">Save</Button>
//         </DialogActions>
//       </Dialog>
//     </ProfileContainer>
//   );
// }

import React, { useState } from 'react';
import { Box, Paper, Typography, styled, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button } from '@mui/material';
import { useMutation, useQuery } from '@tanstack/react-query';
import StandardButton from '../buttons/StandardButton';
import { getUserDetails } from '../../queries/user';
import useAuth from '../../hooks/useAuth';
import { editName } from '../../queries/user';

interface UserProfileData {
  fname: string;
  lname: string;
  email: string;
  isHomeSchooled: boolean;
  school: string;
}

const ProfileRow = styled(Box)({
  display: 'flex',
  marginBottom: '8px',
});

const ProfileLabel = styled(Typography)({
  color: '#fff',
  fontWeight: 'bold',
  width: '140px',
  flexShrink: 0,
  textAlign: 'left',
});

const ProfileValue = styled(Typography)({
  color: '#fff',
  flexGrow: 1,
  textAlign: 'left',
});

const ProfileContainer = styled(Paper)({
  backgroundColor: '#28242C',
  borderRadius: '16px',
  padding: '24px',
  width: '400px',
  height: '300px',
  border: '3px solid #fff',
  display: 'flex',
  flexDirection: 'column',
});

export default function UserProfile() {
  const { userId } = useAuth();
  const [openEditModal, setOpenEditModal] = useState(false);
  const [editedName, setEditedName] = useState<{ fname: string, lname: string }>({ fname: '', lname: '' });

  const { data: userData, isLoading, error } = useQuery<UserProfileData>({
    queryKey: ['userDetails', userId],
    queryFn: () => getUserDetails(userId!),
    enabled: !!userId,
  });

  const mutation = useMutation({
    mutationFn: (updatedName: { fname: string, lname: string }) => editName(userId!, updatedName.fname, updatedName.lname),
    onSuccess: () => {
      // If the mutation is successful, you can close the modal
      setOpenEditModal(false);
    },
    onError: (error: any) => {
      // Handle error if needed (e.g., show a toast message)
      console.error('Error updating name:', error);
    },
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

  const handleEditProfileClick = () => {
    setEditedName({ fname: userData.fname, lname: userData.lname });  // Pre-fill the name fields with current values
    console.log('userData:');
    setOpenEditModal(true);
  };

  // const handleSave = () => {
  //   // Trigger mutation to save the updated name
  //   mutation.mutate(editedName);
  // };
  const handleSave = async () => {
    try {
      await editName(userId!, editedName.fname, editedName.lname);
      setOpenEditModal(false); // Close the modal after successful update
      window.location.reload();
    } catch (error: any) {
      console.error("Error updating name:", error.message);
      if (error.response) {
        console.error("Response error details:", error.response.data); // Log detailed response from the server
      }
    }
  };

  const handleClose = () => {
    setOpenEditModal(false);
  };

  return (
    <ProfileContainer elevation={0}>
      <Typography variant="h5" sx={{ color: '#fff', mb: 2, fontWeight: 'bold' }}>
        User Profile
      </Typography>

      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Box>
          <ProfileRow>
            <ProfileLabel>First Name:</ProfileLabel>
            <ProfileValue>{userData.fname}</ProfileValue>
          </ProfileRow>

          <ProfileRow>
            <ProfileLabel>Last Name:</ProfileLabel>
            <ProfileValue>{userData.lname}</ProfileValue>
          </ProfileRow>

          <ProfileRow>
            <ProfileLabel>Email:</ProfileLabel>
            <ProfileValue>{userData.email}</ProfileValue>
          </ProfileRow>

          <ProfileRow>
            <ProfileLabel>Home Schooled:</ProfileLabel>
            <ProfileValue>{userData.isHomeSchooled ? 'Yes' : 'No'}</ProfileValue>
          </ProfileRow>

          <ProfileRow>
            <ProfileLabel>School:</ProfileLabel>
            <ProfileValue>{userData.school}</ProfileValue>
          </ProfileRow>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1 }}>
          <StandardButton label="Edit Profile" buttonColor="yellow" onClick={handleEditProfileClick} />
        </Box>
      </Box>

      {/* Modal for editing profile */}
      <Dialog open={openEditModal} onClose={handleClose}>
        <DialogTitle>Edit Profile</DialogTitle>
        <DialogContent>
          <TextField
            label="First Name"
            fullWidth
            value={editedName.fname}
            onChange={(e) => setEditedName({ ...editedName, fname: e.target.value })}
            margin="normal"
          />
          <TextField
            label="Last Name"
            fullWidth
            value={editedName.lname}
            onChange={(e) => setEditedName({ ...editedName, lname: e.target.value })}
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">Cancel</Button>
          <Button onClick={handleSave} color="primary" disabled={mutation.isPending}>
            {mutation.isPending ? 'Saving...' : 'Save'}
          </Button>
        </DialogActions>
      </Dialog>
    </ProfileContainer>
  );
}
