import { useState, ReactNode, useEffect } from 'react';
import AuthContext from '../context/AuthContext';
import { useMutation } from '@tanstack/react-query';
import { signIn, signOut } from '../queries/auth';
import { SignInFormData } from '../schema/formValidation/signinSchema';

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  // const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
  //   () => localStorage.getItem('isLoggedIn') === 'true'
  // );

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  // const [userId, setUserId] = useState<string | null>(
  //   () => localStorage.getItem('userId')
  // );

  const [userId, setUserId] = useState<string | null>(null);

  // Load initial state from sessionStorage
  useEffect(() => {
    const storedIsLoggedIn = sessionStorage.getItem('isLoggedIn');
    const storedUserId = sessionStorage.getItem('userId');
    if (storedIsLoggedIn === 'true') {
      setIsLoggedIn(true);
      setUserId(storedUserId);
    }
  }, []);

  //const navigate = useNavigate();

  const signInMutation = useMutation({
    mutationFn: signIn,
    onSuccess: (data) => {
      console.log('Login success:', data);
      setIsLoggedIn(true);
      setUserId(data.userId);
      sessionStorage.setItem('isLoggedIn', 'true');
      sessionStorage.setItem('userId', data.userId);
    },
    onError: (error) => {
      if (error instanceof Error) {
        console.log(error.message);
      } else {
        console.log('An error occurred during login.');
      }
    },
  });

  const signOutMutation = useMutation({
    mutationFn: signOut,
    onSuccess: (data) => {
      console.log('Sign out success:', data);
      setIsLoggedIn(false);
      setUserId(null);
      sessionStorage.setItem('isLoggedIn', 'false');
      sessionStorage.removeItem('userId')
      //navigate('/signed-in');
    },
    onError: (error) => {
      if (error instanceof Error) {
        console.log(error.message);
      } else {
        console.log('An error occurred during signout.');
      }
    },
  });

  const login = (data: SignInFormData) => {
    signInMutation.mutate(data);
  };

  const logout = (userId: string) => {
    // setIsLoggedIn(false);
    // setUserId(null);
    // localStorage.setItem('isLoggedIn', 'false');
    // localStorage.removeItem('userId');
    signOutMutation.mutate(userId);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userId, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
