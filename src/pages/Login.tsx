import React, { useState } from 'react';
import { useNavigate, Navigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";
import { authService } from '../auth/auth';

const Login:React.FC = () => {
  const { user, token, login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Redirect if already logged in
  if (user && token) return <Navigate to="/dashboard" replace />;
  
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try{
      const res = await authService.login(email, password);
      login(res.data.user,res.data.token);
      navigate('/dashboard');
    }catch{
      setError("Invalid credentials");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200">
      <form onSubmit={handleLogin}
        className="card w-96 shadow-xl bg-base-100 p-6 space-y-4">
        <h2 className="text-2xl font-bold text-center text-primary">
          Login
        </h2>

        {error && <div className="text-error text-sm">{error}</div>}

        <input
          type="email"
          placeholder="Email"
          className="input input-bordered w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="input input-bordered w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="btn btn-info w-full" disabled={loading} >
          {loading ? ( <span className="loading loading-spinner text-primary" /> ) : 
          ( "Login" )}
        </button>
      </form>
    </div>
  );
}

export default Login;