import { Box, Button, Typography } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'


const VerficationStep = () => {
  return (
    <Box sx={{ textAlign: 'center' }}>
            <CheckCircleIcon sx={{ fontSize: 60, color: 'success.main', mb: 2 }} />
            <Typography variant="h6" gutterBottom>
              Success
            </Typography>
            <Typography variant="body1" color="textSecondary" paragraph>
              Congratulations, your account has been successfully created.
            </Typography>
            <Button variant="contained" color="primary">
              Sign in
            </Button>
    </Box>
  )
}

export default VerficationStep