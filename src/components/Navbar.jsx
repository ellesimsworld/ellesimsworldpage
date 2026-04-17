import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border/50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src="/logo.png"
            alt="ellesimsworld logo"
            className="w-9 h-9 rounded-full"
          />
          <span className="font-lora italic text-lg tracking-wide text-foreground">
            ellesimsworld
          </span>
        </Link>

        <div className="flex items-center gap-8">
          <Link to="/mods" className="font-lora text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors">
            Mods
          </Link>
          <a href="https://www.patreon.com/cw/ellesimsworld" target="_blank" rel="noopener noreferrer" className="font-lora text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors">
            Patreon
          </a>
          <Link to="/mod-tracker" className="font-lora text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors">
            Mod Tracker
          </Link>
          <Link to="/faqs" className="font-lora text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors">
            FAQs
          </Link>
          <Link to="/help" className="font-lora text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors">
            Help
          </Link>
        </div>
      </div>
    </nav>
  );
}