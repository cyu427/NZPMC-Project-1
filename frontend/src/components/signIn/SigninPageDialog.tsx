import React from 'react';
import { Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import SigninPageWrapper from './SigninPageWrapper';

interface SigninPageDialogProps {
  onClose: () => void;
}

const SigninPageDialog: React.FC<SigninPageDialogProps> = ({ onClose }) => {
  return (
    <Dialog open={true} maxWidth="sm" fullWidth onClose={onClose}>
      <DialogTitle>
        Sign in
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <SigninPageWrapper />
      </DialogContent>
    </Dialog>
  );
}

export default SigninPageDialog;
