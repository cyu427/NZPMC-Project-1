// import * as React from 'react';
// import { AppBar, Box, CssBaseline, Container, IconButton, Toolbar, Typography } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import AuthorisationButton from './buttons/AuthorisationButton';

// interface NavProps {
//   window?: () => Window;
// }

// export default function Navigation(props: NavProps) {
//   return (
//     <Box>
//       <CssBaseline />
//       <AppBar component="nav" sx={{ backgroundColor: 'white', width: '100%', height: '65px', boxShadow: 'none' }}>
//         <Container maxWidth="lg"> {/* This centers content within 1200px */}
//           <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '65px', px: { xs: 0, sm: 2 } }}>
//             <IconButton color="inherit" aria-label="open drawer" edge="start" sx={{ mr: 2, display: { sm: 'none' } }}>
//               <MenuIcon />
//             </IconButton>
//             <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, color: 'primary.main' }}>
//               NZPMC
//             </Typography>
//             <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//               <AuthorisationButton label="Sign in" buttonType="nav" buttonColor="white" actionType="login" />
//               <AuthorisationButton label="Register" buttonType="nav" buttonColor="blue" actionType="register" />
//             </Box>
//           </Toolbar>
//         </Container>
//       </AppBar>
//     </Box>
//   );
// }

import * as React from 'react';
import { AppBar, Box, CssBaseline, Container, IconButton, Toolbar, Typography, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AuthorisationButton from './buttons/AuthorisationButton';
import useAuth from '../hooks/useAuth';
interface NavProps {
  window?: () => Window;
}

export default function Navigation(props: NavProps) {
  const { isLoggedIn, signOut } = useAuth(); // Destructure to get login status and signOut method

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
              {isLoggedIn ? (
                <Button onClick={signOut}>Logout</Button>
              ) : (
                <>
                  <AuthorisationButton label="Sign in" buttonType="nav" buttonColor="white" actionType="login" />
                  <AuthorisationButton label="Register" buttonType="nav" buttonColor="blue" actionType="register" />
                </>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
