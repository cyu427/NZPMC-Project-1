import { createContext } from 'react';
import { SignInFormData } from '../schema/formValidation/signinSchema';

interface AuthContextType {
  isLoggedIn: boolean;
  userId: string | null;
  login: (data: SignInFormData) => void;
  logout: (id: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export default AuthContext;