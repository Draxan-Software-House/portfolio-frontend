import React from 'react';
import Nav from './Nav';

// Layout wrapper used across all pages
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-base-200">
      <Nav />
      <main className="flex-1 container mx-auto px-4 py-6">{children}</main>
      <footer className="footer footer-center bg-base-100 text-base-content p-4 text-sm">
        <aside>© {new Date().getFullYear()} — Built with ❤️ using React + Tailwind</aside>
      </footer>
    </div>
  );
}