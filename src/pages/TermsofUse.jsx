import React from 'react';

const terms = [
  "Do NOT claim my mods as your own.",
  "Do NOT modify or edit my mods.",
  "Do NOT post my mod files to any other website.",
  "Do NOT place my mods behind a paywall.",
  "Translations of my mods are allowed with proper credit.",
];

export default function TermsOfUse() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <h1 className="font-lora text-3xl font-semibold tracking-wide mb-2 text-center">
        Terms of Use
      </h1>

      <p className="font-lora text-sm text-muted-foreground mb-10 text-center">
        By downloading and using my mods, you agree to the following terms.
      </p>

      <div className="bg-card border border-border/40 rounded-lg px-8 py-6">
        <ul className="space-y-4">
          {terms.map((term, i) => (
            <li key={i} className="flex gap-3 font-lora text-sm leading-relaxed">
              <span className="text-muted-foreground shrink-0">•</span>
              <span>{term}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}