import { Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import ResetPasswordStepWrapper from './ResetPasswordStepWrapper'

const ResetPasswordDialog = () => {
  return (
    <Dialog open={true} maxWidth="sm" fullWidth>
      <DialogTitle>
        Reset Password
        <IconButton
          aria-label="close"
          onClick={() => {/* handle close */}}
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
  )
}

export default ResetPasswordDialog