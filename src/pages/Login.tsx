import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../auth/auth';
import Loader from '../components/Loader';

function Login() {
  const [email, setEmail] = useState('admin@example.com');
  const [password, setPassword] = useState('admin123');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await login(email, password);
      nav('/dashboard');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
    } finally {
      setLoading(false);
    }
  }

  if (loading) return <Loader text="Signing in..." />;

  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200">
      <form onSubmit={handleSubmit} className="card w-full max-w-sm bg-base-100 shadow-md p-6">
        <h2 className="text-xl font-bold mb-4 text-center">Sign In</h2>

        <label className="form-control mb-3">
          <span className="label-text">Email</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input input-bordered"
            required
          />
        </label>

        <label className="form-control mb-4">
          <span className="label-text">Password</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input input-bordered"
            required
          />
        </label>

        {error && <p className="text-error text-sm mb-2">{error}</p>}

        <button type="submit" className="btn btn-primary w-full">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;