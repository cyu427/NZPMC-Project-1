import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, TextField, Dialog, CircularProgress, Alert } from '@mui/material';
import { SignInFormData, signInSchema } from '../../schema/formValidation/signinSchema';
import { useSigninContext } from '../../hooks/useSigninContext';
import ResetPasswordDialog from '../resetPassword/ResetPasswordDialog';
import { ResetPasswordProvider } from '../../provider/ResetPasswordProvider';
import { signIn } from '../../queries/auth';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

export const SigninSection: React.FC = () => {
  const { setPage } = useSigninContext();
  const [resetDialogOpen, setResetDialogOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { login } = useAuth();

  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
  });

  // const signInMutation = useMutation({
  //   mutationFn: signIn,
  //   onSuccess: (data) => {
  //     console.log('Login success:', data);
  //     login(data.userId);
  //     navigate('/signed-in');
  //   },
  //   onError: (error) => {
  //     if (error instanceof Error) {
  //       setErrorMessage(error.message);
  //     } else {
  //       setErrorMessage('An error occurred during login.');
  //     }
  //   },
  // });

  // const onLoginSubmit = (data: SignInFormData) => {
  //   console.log('Login data:', data);
  //   signInMutation.mutate(data);
  // };

  const onLoginSubmit = (data: SignInFormData) => {
      console.log('Login data:', data);
      login(data);
      navigate('/signed-in');
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
          <Button onClick={handleOpenResetDialog} sx={{ textTransform: 'none' }}>
            Forgot Password?
          </Button>
        </Box>
        {/* <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }} disabled={signInMutation.isPending}>
          {signInMutation.isPending ? <CircularProgress size={24} color="inherit" /> : 'Sign in'}
        </Button> */}
        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
          Sign in
        </Button>
        {errorMessage && (
          <Alert severity="error" sx={{ mt: 2 }}>
            {errorMessage}
          </Alert>
        )}
      </form>
      <Dialog open={resetDialogOpen} onClose={handleCloseResetDialog} fullWidth maxWidth="sm">
        <ResetPasswordProvider>
          <ResetPasswordDialog onClose={handleCloseResetDialog} />
        </ResetPasswordProvider>
      </Dialog>
    </div>
  );
};
