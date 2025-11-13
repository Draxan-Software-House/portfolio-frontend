// ✅ Auth Provider component
import React,{ useEffect,useState  } from "react";
import { useNavigate } from "react-router-dom";
import {AuthContext} from './AuthContext';
import type {User} from './AuthContext';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const navigate = useNavigate();

  // ✅ Load session from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const storedToken = localStorage.getItem('token');
    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
      setToken(storedToken);
    }
  }, []);

  // ✅ Login handler
  const login = (userData: User, jwt: string) => {
    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('token', jwt);
    setUser(userData);
    setToken(jwt);
  };

  // ✅ Logout handler
  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setUser(null);
    setToken(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};