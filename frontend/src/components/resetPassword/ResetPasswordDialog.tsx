// import { Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material'
// import CloseIcon from '@mui/icons-material/Close'
// import ResetPasswordStepWrapper from './ResetPasswordStepWrapper'

// const ResetPasswordDialog = () => {
//   return (
//     <Dialog open={true} maxWidth="sm" fullWidth>
//       <DialogTitle>
//         Reset Password
//         <IconButton
//           aria-label="close"
//           onClick={() => {/* handle close */}}
//           sx={{
//             position: 'absolute',
//             right: 8,
//             top: 8,
//             color: (theme) => theme.palette.grey[500],
//           }}
//         >
//           <CloseIcon />
//         </IconButton>
//       </DialogTitle>
//       <DialogContent>
//         <ResetPasswordStepWrapper />
//       </DialogContent>
//     </Dialog>
//   )
// }

// export default ResetPasswordDialog

import React from 'react';
import { Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ResetPasswordStepWrapper from './ResetPasswordStepWrapper';

interface ResetPasswordDialogProps {
  onClose: () => void;
}

const ResetPasswordDialog: React.FC<ResetPasswordDialogProps> = ({ onClose }) => {
  return (
    <Dialog open={true} maxWidth="sm" fullWidth onClose={onClose}>
      <DialogTitle>
        Reset Password
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
        <ResetPasswordStepWrapper />
      </DialogContent>
    </Dialog>
  );
}

export default ResetPasswordDialog;
