import * as React from 'react';
import { AppBar, Box, CssBaseline, Container, IconButton, Toolbar, Typography, Dialog } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AuthorisationButton from './buttons/AuthorisationButton';
import useAuth from '../hooks/useAuth';
import SigninPageDialog from './signIn/SigninPageDialog';
import { SignInProvider } from '../provider/SigninProvider';
import { useState } from 'react';
import { RegisterProvider } from '../provider/RegisterProvider';
import RegisterDialog from './register/RegisterDialog';
import { useNavigate } from 'react-router-dom';

interface NavProps {
  window?: () => Window;
}

export default function Navigation(props: NavProps) {
  const { isLoggedIn, logout, userId } = useAuth();
  const navigate = useNavigate();

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

  const handleSignOut = () => {
    if (userId) {
      logout(userId); // Call the logout function from your auth context
      navigate('/');
    }
  };

  console.log('isLoggedIn:', isLoggedIn);


  return (
    <Box>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: 'white', width: '100%', height: '65px', boxShadow: 'none' }}>
        <Container maxWidth="lg"> {/* This centers content within 1200px */}
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '65px', px: { xs: 0, sm: 2 } }}>
            <IconButton color="inherit" aria-label="open drawer" edge="start" sx={{ mr: 2, display: { sm: 'none' } }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, color: 'primary.main' }}>
              NZPMC
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              {/* <AuthorisationButton label="Sign in" buttonType="nav" buttonColor="white" onClick={handleSignIn} />
              <AuthorisationButton label="Register" buttonType="nav" buttonColor="blue" onClick={handleRegister} /> */}
              {isLoggedIn ? (
                <AuthorisationButton label="Sign Out" buttonType="nav" buttonColor="white" onClick={handleSignOut} />
              ) : (
                <>
                  <AuthorisationButton label="Sign in" buttonType="nav" buttonColor="white" onClick={handleSignIn} />
                  <AuthorisationButton label="Register" buttonType="nav" buttonColor="blue" onClick={handleRegister} />
                </>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

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

    </Box>
  );
}