import { createContext } from 'react';

// ✅ Type definitions
export interface User {
  id: number;
  name: string;
  email: string;
}

export interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (user: User, token: string) => void;
  logout: () => void;
}

// ✅ Create Context
export const AuthContext = createContext<AuthContextType | undefined>(undefined);