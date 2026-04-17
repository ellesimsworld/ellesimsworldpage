import React, { useState } from 'react';
import { ChevronDown, Plus } from 'lucide-react';

const faqData = [
  {
    section: "General Setup Issues",
    items: [
      {
        problem: "Mod is not working at all",
        solution: [
          "Update your game to the latest version",
          "Make sure you own required packs",
          "Enable Custom Content and Script Mods in settings",
          "Do not place mods too deep in subfolders",
          "Do not leave files zipped, always extract them",
          "Keep your mods folder organized",
        ],
      },
    ],
  },
  {
    section: "Interactions",
    items: [
      {
        problem: "Pie menu is not showing up",
        solution: [
          "Install XML Injector",
          "Update XML Injector to the latest version",
          "Make sure it is not too deep in subfolders",
        ],
      },
      {
        problem: "Mod interactions are not appearing",
        solution: [
          "Update XML Injector",
          "Make sure your Sim meets all requirements (traits, progression, etc.)",
          "Complete any required prior interactions",
          "Check for conflicting mods",
          "Delete localthumbcache and restart the game",
        ],
      },
    ],
  },
  {
    section: "Careers",
    items: [
      {
        problem: "Sim is not being promoted",
        solution: [
          "Promotion timing is controlled by the game",
          "Continue playing or use UI Cheats to promote manually",
        ],
      },
      {
        problem: "Sim cannot join a career",
        solution: [
          "Complete any required interactions or conditions before applying",
        ],
      },
      {
        problem: "Cannot follow Sim to work or school",
        solution: [
          "Make sure you installed the active version of the mod, not the rabbithole version",
        ],
      },
    ],
  },
  {
    section: "Active Careers",
    items: [
      {
        problem: "Sim is not going to work or school",
        solution: [
          "Enable follow messages",
          "Wait for the follow prompt to appear",
        ],
      },
      {
        problem: "Venue is not appearing",
        solution: [
          "Install either Basemental's Venue or Zerbu's Custom Venues",
          "Do not install both",
        ],
      },
      {
        problem: "Sim is not completing career tasks",
        solution: ["Likely an in-game bug"],
      },
      {
        problem: "Can professors or students be chosen",
        solution: ["No, roles are assigned randomly by the game"],
      },
    ],
  },
  {
    section: "Main Menu",
    items: [
      {
        problem: "Main menu is not showing",
        solution: [
          "Check for conflicting UI mods",
          "Delete localthumbcache",
          "Reinstall the mod",
          "If the issue continues, it may be game-related",
        ],
      },
    ],
  },
  {
    section: "Loading Screens",
    items: [
      {
        problem: "Loading screen is not appearing",
        solution: [
          "Update the mod",
          "Enable mods in settings",
          "Check for conflicts",
        ],
      },
      {
        problem: "Multiple loading screens",
        solution: ["Only one loading screen can be used at a time"],
      },
      {
        problem: "Cannot unzip folder",
        solution: [
          "Move the folder to desktop and rename it",
          "Extract files manually into the mods folder",
        ],
      },
    ],
  },
  {
    section: "Entry Screens",
    items: [
      {
        problem: "Opening screen is not appearing",
        solution: [
          "Update the mod",
          "Enable mods in settings",
          "Make sure it is not too deep in subfolders",
          "Confirm correct language is installed",
        ],
      },
      {
        problem: "Language support",
        solution: ["Not all languages are currently supported"],
      },
      {
        problem: "Cannot unzip folder",
        solution: [
          "Move the folder to desktop and rename it",
          "Extract files manually into the mods folder",
        ],
      },
    ],
  },
  {
    section: "Common Fixes",
    items: [
      {
        problem: "General mod issues or instability",
        solution: [
          "Delete localthumbcache",
          "Repair the game",
          "Redownload the mod",
          "Check for conflicting mods",
          "Avoid using OneDrive for mods",
        ],
      },
    ],
  },
];

function SectionAccordion({ section, items, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen || false);

  return (
    <div className="border border-border/40 rounded-lg overflow-hidden bg-card">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left"
      >
        <span className="font-lora text-base font-semibold">{section}</span>
        {open
          ? <ChevronDown className="w-5 h-5 text-muted-foreground" />
          : <Plus className="w-5 h-5 text-muted-foreground" />
        }
      </button>

      {open && (
        <div className="border-t border-border/30">
          {items.map((item, i) => (
            <div key={i} className="px-5 py-4 border-b border-border/20 last:border-b-0">
              <p className="font-lora text-sm font-bold mb-2">
                Problem: {item.problem}
              </p>
              <p className="font-lora text-xs text-muted-foreground uppercase tracking-wider mb-1">Solution</p>
              <ul className="space-y-1">
                {item.solution.map((s, j) => (
                  <li key={j} className="font-lora text-sm text-muted-foreground leading-relaxed flex gap-2">
                    <span className="text-foreground/40 shrink-0">–</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function FAQs() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <h1 className="font-lora text-3xl font-semibold tracking-wide mb-2 text-center">FAQs</h1>
      <p className="font-lora text-sm text-muted-foreground mb-10 text-center">
        Frequently asked questions and common troubleshooting tips.
      </p>

      <div className="space-y-4">
        {faqData.map((section, i) => (
          <SectionAccordion
            key={i}
            section={section.section}
            items={section.items}
            defaultOpen={i === 0}
          />
        ))}
      </div>
    </div>
  );
}