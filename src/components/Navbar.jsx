import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border/50">
      
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src="/logo.png"
            alt="ellesimsworld logo"
            className="w-9 h-9 rounded-full"
          />
          <span className="font-lora italic text-lg tracking-wide text-foreground whitespace-nowrap">
            ellesimsworld
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
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

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-xl text-foreground"
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4 bg-background border-t border-border/50">
          <Link to="/mods" className="font-lora text-sm text-muted-foreground">
            Mods
          </Link>
          <a href="https://www.patreon.com/cw/ellesimsworld" target="_blank" rel="noopener noreferrer" className="font-lora text-sm text-muted-foreground">
            Patreon
          </a>
          <Link to="/mod-tracker" className="font-lora text-sm text-muted-foreground">
            Mod Tracker
          </Link>
          <Link to="/faqs" className="font-lora text-sm text-muted-foreground">
            FAQs
          </Link>
          <Link to="/help" className="font-lora text-sm text-muted-foreground">
            Help
          </Link>
        </div>
      )}
    </nav>
  );
}