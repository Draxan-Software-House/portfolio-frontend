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
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-lg font-semibold"><Link to="/">MyPortfolio</Link></div>
        <nav className="space-x-4">
          <Link to="/dashboard" className="hover:underline">Dashboard</Link>
          <button onClick={logout} className="ml-2 px-3 py-1 bg-red-500 text-white rounded">Logout</button>
        </nav>
      </div>
    </header>
  );
};