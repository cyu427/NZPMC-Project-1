import { styled, Box } from '@mui/material';
import HeroNotSignedIn from './hero/HeroNotSignedIn';
import HeroSignedIn from './hero/HeroSignedIn';

const StyledBox = styled(Box)({
  height: '421px',
  width: '100vw',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#28242C',
  color: 'white',
  textAlign: 'center',
});

export default function HeroSection() {
  const isSignedIn = true; // Replace this with the actual logic to check user authentication.

  return (
    <StyledBox>
      {isSignedIn ? <HeroSignedIn /> : <HeroNotSignedIn />}
    </StyledBox>
  );
}
