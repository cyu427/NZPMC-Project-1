// import React, { useState } from 'react';
// import { Button, Dialog } from '@mui/material';
// import RegisterDialog from '../register/RegisterDialog';
// import { RegisterProvider } from '../../provider/RegisterProvider';

// const navButtonStyle = {
//   borderRadius: 100,
//   textTransform: 'none',
//   fontSize: '16px',
//   padding: '7px 15px',
//   width: '100px',
//   height: '40px',
// };

// const landingButtonStyle = {
//   borderRadius: 100,
//   textTransform: 'none',
//   fontSize: '20px',
//   padding: '27px 48px',
//   minWidth: '180px',
//   height: '80px',
// };

// const blueButtonStyle = {
//   backgroundColor: '#285DE5',
//   color: 'white',
//   border: '2px solid #285DE5',
//   '&:hover': {
//     backgroundColor: 'white',
//     color: '#285DE5',
//   },
// };

// const whiteButtonStyle = {
//   backgroundColor: 'white',
//   color: '#285DE5',
//   border: '2px solid #285DE5',
//   '&:hover': {
//     backgroundColor: '#1C4BB9',
//     color: 'white',
//   },
// };

// interface AuthorisationButtonProps {
//   label: string;
//   buttonType: 'nav' | 'landing';
//   buttonColor: 'blue' | 'white';
// }

// const AuthorisationButton: React.FC<AuthorisationButtonProps> = ({ label, buttonType, buttonColor }) => {
//   const [open, setOpen] = useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   let buttonTypeStyle;
//   switch (buttonType) {
//     case 'nav':
//       buttonTypeStyle = { ...navButtonStyle };
//       break;
//     case 'landing':
//       buttonTypeStyle = { ...landingButtonStyle };
//       break;
//     default:
//       buttonTypeStyle = {};
//   }

//   let buttonColorStyle;
//   switch (buttonColor) {
//     case 'blue':
//       buttonColorStyle = { ...blueButtonStyle };
//       break;
//     case 'white':
//       buttonColorStyle = { ...whiteButtonStyle };
//       break;
//     default:
//       buttonColorStyle = {};
//   }

//   return (
//     <div>
//       <Button type="button" sx={{ ...buttonTypeStyle, ...buttonColorStyle }} onClick={handleClickOpen}>
//         {label}
//       </Button>
//       <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
//         <RegisterProvider>
//           <RegisterDialog onClose={handleClose} />
//         </RegisterProvider>
//       </Dialog>
//     </div>
//   );
// };

// export default AuthorisationButton;

import React, { useState } from 'react';
import { Button, Dialog } from '@mui/material';
import RegisterDialog from '../register/RegisterDialog';
import SigninPageDialog from '../signIn/SigninPageDialog';
import { RegisterProvider } from '../../provider/RegisterProvider';
import { SignInProvider } from '../../provider/SigninProvider';

const navButtonStyle = {
  borderRadius: 100,
  textTransform: 'none',
  fontSize: '16px',
  padding: '7px 15px',
  width: '100px',
  height: '40px',
};

const landingButtonStyle = {
  borderRadius: 100,
  textTransform: 'none',
  fontSize: '20px',
  padding: '27px 48px',
  minWidth: '180px',
  height: '80px',
};

const blueButtonStyle = {
  backgroundColor: '#285DE5',
  color: 'white',
  border: '2px solid #285DE5',
  '&:hover': {
    backgroundColor: 'white',
    color: '#285DE5',
  },
};

const whiteButtonStyle = {
  backgroundColor: 'white',
  color: '#285DE5',
  border: '2px solid #285DE5',
  '&:hover': {
    backgroundColor: '#1C4BB9',
    color: 'white',
  },
};

interface AuthorisationButtonProps {
  label: string;
  buttonType: 'nav' | 'landing';
  buttonColor: 'blue' | 'white';
  actionType: 'register' | 'login'; // Add actionType to distinguish between register and login
}

const AuthorisationButton: React.FC<AuthorisationButtonProps> = ({ label, buttonType, buttonColor, actionType }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let buttonTypeStyle;
  switch (buttonType) {
    case 'nav':
      buttonTypeStyle = { ...navButtonStyle };
      break;
    case 'landing':
      buttonTypeStyle = { ...landingButtonStyle };
      break;
    default:
      buttonTypeStyle = {};
  }

  let buttonColorStyle;
  switch (buttonColor) {
    case 'blue':
      buttonColorStyle = { ...blueButtonStyle };
      break;
    case 'white':
      buttonColorStyle = { ...whiteButtonStyle };
      break;
    default:
      buttonColorStyle = {};
  }

  return (
    <div>
      <Button type="button" sx={{ ...buttonTypeStyle, ...buttonColorStyle }} onClick={handleClickOpen}>
        {label}
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        {actionType === 'register' ? (
          <RegisterProvider>
            <RegisterDialog onClose={handleClose} />
          </RegisterProvider>
        ) : (
          <SignInProvider>
            <SigninPageDialog onClose={handleClose} />
          </SignInProvider>
        )}
      </Dialog>
    </div>
  );
};

export default AuthorisationButton;

