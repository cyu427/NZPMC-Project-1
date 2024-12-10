import { styled, Box } from '@mui/material';
import HeroSignedIn from './hero/HeroSignedIn';

const StyledBox = styled(Box)({
  minHeight: '480px',
  width: '100vw',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#28242C',
  color: 'white',
  textAlign: 'center',
});

export default function HeroSectionSignedIn() {
  // const isSignedIn = false; // Replace this with the actual logic to check user authentication.

  return (
    <StyledBox>
      {/* {isSignedIn ? <HeroSignedIn /> : <HeroNotSignedIn />} */}
      <HeroSignedIn />
    </StyledBox>
  );
}
