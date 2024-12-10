import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { 
  Box, 
  Button, 
  TextField, 
  Dialog 
} from '@mui/material';
import { SignInFormData, signInSchema } from '../../schema/signinSchema';
import { useSigninContext } from '../../hooks/useSigninContext';
import ResetPasswordDialog from '../resetPassword/ResetPasswordDialog';
import { ResetPasswordProvider } from '../../provider/ResetPasswordProvider';

export const SigninSection: React.FC = () => {
  const { setPage } = useSigninContext();
  const [resetDialogOpen, setResetDialogOpen] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
  });

  const onLoginSubmit = (data: SignInFormData) => {
    console.log('Login data:', data);
    // Implement login logic here
  };

  const handleOpenResetDialog = () => {
    setResetDialogOpen(true);
  };

  const handleCloseResetDialog = () => {
    setResetDialogOpen(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onLoginSubmit)}>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="Email"
              fullWidth
              margin="normal"
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="Password"
              type="password"
              fullWidth
              margin="normal"
              error={!!errors.password}
              helperText={errors.password?.message}
            />
          )}
        />
        <Box sx={{ mt: 2 }}>
          <Button
            onClick={handleOpenResetDialog}
            sx={{ textTransform: 'none' }}
          >
            Forgot Password?
          </Button>
        </Box>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Sign in
        </Button>
      </form>
      <Dialog open={resetDialogOpen} onClose={handleCloseResetDialog} fullWidth maxWidth="sm">
        <ResetPasswordProvider>
          <ResetPasswordDialog onClose={handleCloseResetDialog} />
        </ResetPasswordProvider>
      </Dialog>
    </div>
  );
};
