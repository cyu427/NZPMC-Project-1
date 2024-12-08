import { Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import RegisterStepWrapper from './RegisterStepWrapper'

const RegisterDialog = () => {
  return (
    <Dialog open={true} maxWidth="sm" fullWidth>
      <DialogTitle>
        Registration
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
        <RegisterStepWrapper />
      </DialogContent>
    </Dialog>
  )
}

export default RegisterDialog