import React, { useState, useEffect, type JSX } from 'react'
import {Navigate} from 'react-router-dom';
import api from '../api/api';
import Loader from './Loader';

type Props = { children: JSX.Element };
function ProtectedRoute({ children }: Props){

  const [loading, setLoading] = useState(true);
  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (!token) {
      setAuthed(false);
      setLoading(false);
      return;
    }
  
     // quick check: call /auth/me
    api.get('/auth/me')
      .then(() => setAuthed(true))
      .catch(() => {
        localStorage.removeItem('access_token');
        setAuthed(false);
      })
      .finally(() => setLoading(false));
  }, []);
  if (loading) return <Loader text='Checking session…' />;
  if (!authed) return <Navigate to="/login" replace />;
  
  return children;
}

export default ProtectedRoute;