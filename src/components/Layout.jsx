import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Navbar from './Navbar';
import HelpBubble from './HelpBubble';

export default function Layout() {
  return (
    <div className="min-h-screen bg-background font-lora">
      <Navbar />
      <main className="pt-20">
        <Outlet />
      </main>
      <HelpBubble />
      <footer className="border-t border-border/30 mt-24 py-8 text-center space-y-3">
        <p className="font-lora text-xs text-muted-foreground tracking-widest uppercase">
          © {new Date().getFullYear()} ellesimsworld
        </p>

        <Link
          to="/terms"
          className="block font-lora text-xs text-muted-foreground hover:text-foreground transition"
        >
          Terms of Use
        </Link>
      </footer>
    </div>
  );
}