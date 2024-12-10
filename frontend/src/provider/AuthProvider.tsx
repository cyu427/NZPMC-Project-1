import React, { useState, ReactNode } from 'react';
import AuthContext from '../context/AuthContext';

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
    () => localStorage.getItem('isLoggedIn') === 'true'
  );

  const [userId, setUserId] = useState<string | null>(
    () => localStorage.getItem('userId')
  );

  const login = (userId: string) => {
    setIsLoggedIn(true);
    setUserId(userId);
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userId', userId);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserId(null);
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.removeItem('userId');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userId, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
