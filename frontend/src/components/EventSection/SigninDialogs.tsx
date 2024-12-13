import React from 'react';
import { Dialog } from '@mui/material';
import { SignInProvider } from '../../provider/SigninProvider';
import SigninPageDialog from '../signIn/SigninPageDialog';

interface SigninDialogsProps {
  signInDialogOpen: boolean;
  toggleDialog: (setter: React.Dispatch<React.SetStateAction<boolean>>, open: boolean) => () => void;
  setSignInDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SigninDialogs: React.FC<SigninDialogsProps> = ({
  signInDialogOpen,
  toggleDialog,
  setSignInDialogOpen
}) => {
  return (
    <Dialog open={signInDialogOpen} onClose={toggleDialog(setSignInDialogOpen, false)} fullWidth maxWidth="sm">
      <SignInProvider>
        <SigninPageDialog onClose={toggleDialog(setSignInDialogOpen, false)} />
      </SignInProvider>
    </Dialog>
  );
};

export default SigninDialogs