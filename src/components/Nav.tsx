import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/useAuth";

const Nav: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <div className="navbar bg-base-300 shadow-md">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl text-accent">Home</Link>
      </div>
      <div className="flex-none gap-2">
        <Link to="/dashboard" className="btn btn-sm btn-outline">Dashboard</Link>
        {user ? (
          <>
            <span className="text-sm text-base-content">
              {user.name || "User"}
            </span>
            <button onClick={logout} className="btn btn-outline btn-error btn-sm">
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="btn btn-info btn-sm">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Nav;