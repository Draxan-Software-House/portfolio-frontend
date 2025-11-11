import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logoutClient } from '../auth/auth';

export default function Nav() {
  const nav = useNavigate();

  function logout() {
    // call backend logout (optional) then remove token
    logoutClient();
    nav('/login');
  }

  return (
    <div className="navbar bg-base-100 shadow-md">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl">MyPortfolio</Link>
      </div>
      <div className="flex-none gap-2">
        <Link to="/dashboard" className="btn btn-sm btn-outline">Dashboard</Link>
        <button onClick={logout} className="btn btn-sm btn-error text-white">Logout</button>
      </div>
    </div>
  );
};