import { styled, Box } from '@mui/material';
import HeroNotSignedIn from './hero/HeroNotSignedIn';

const StyledBox = styled(Box)({
  minHeight: '400px',
  width: '100vw',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#28242C',
  color: 'white',
  textAlign: 'center',
});

export default function HeroSectionNotSignedIn() {
  // const isSignedIn = false; // Replace this with the actual logic to check user authentication.

  return (
    <StyledBox>
      {/* {isSignedIn ? <HeroSignedIn /> : <HeroNotSignedIn />} */}
      <HeroNotSignedIn />
    </StyledBox>
  );
}
