import React from 'react'
import {Navigate} from 'react-router-dom';
import {useAuth} from '../context/useAuth';

interface ProtectedProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedProps> = ({ children }) => {
  const { user, token } = useAuth();

  // DaisyUI spinner while verifying auth
  if (user === undefined) return (
    <div className="flex justify-center items-center min-h-screen bg-base-200">
      <span className="loading loading-spinner loading-xl text-info"></span>
    </div>
  );
  if (!user || !token) return <Navigate to="/login" replace />;
  
  return <>{children}</>;
}

export default ProtectedRoute;