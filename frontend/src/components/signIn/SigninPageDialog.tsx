import { Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import SigninPageWrapper from './SigninPageWrapper'

const SigninPageDialog = () => {
  return (
    <Dialog open={true} maxWidth="sm" fullWidth>
      <DialogTitle>
        Sign in
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
        <SigninPageWrapper />
      </DialogContent>
    </Dialog>
  )
}

export default SigninPageDialog