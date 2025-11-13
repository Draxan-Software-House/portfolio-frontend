// src/context/useAuth.ts
import { useContext } from 'react';
import { AuthContext } from './AuthContext';
import type { AuthContextType } from './AuthContext';

// ✅ Separate hook file to fix Fast Refresh error
export const useAuth = (): AuthContextType => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return ctx;
};
