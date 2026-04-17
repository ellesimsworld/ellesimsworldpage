import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function HelpBubble() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="mb-3 w-56 bg-card border border-border/40 rounded-lg shadow-lg p-4 font-lora text-sm">
          <p className="mb-2 font-semibold">Need help?</p>
          <ul className="space-y-2 text-muted-foreground">
            <li><Link to="/help">Mod Problems</Link></li>
            <li><Link to="/mods">Browse Mods</Link></li>
            <li><Link to="/terms">Terms of Use</Link></li>
          </ul>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="w-12 h-12 rounded-full bg-[#3e3a35] text-white flex items-center justify-center shadow-md hover:opacity-90 transition text-lg font-semibold"
      >
        ?
      </button>
    </div>
  );
}