import React from 'react';

export default function Help() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="font-lora text-3xl font-semibold tracking-wide mb-2">Help</h1>
      <p className="font-lora text-sm text-muted-foreground mb-10">
        Need to report an issue with a mod?
      </p>

      <div className="bg-card border border-border/40 rounded p-8 space-y-6">
        <h2 className="font-lora text-lg font-medium tracking-wide">
          Before reaching out, please make sure you have:
        </h2>

        <ol className="space-y-4 font-lora text-sm text-muted-foreground leading-relaxed">
          <li className="flex gap-3">
            <span className="text-foreground font-medium shrink-0">1.</span>
            <span>
              Read the mod post on my Patreon <strong className="text-foreground">in its entirety</strong>, 
              including installation instructions and known issues.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-foreground font-medium shrink-0">2.</span>
            <span>
              Read the <a href="/faqs" className="underline underline-offset-4 text-foreground hover:text-muted-foreground transition-colors">FAQs</a> page 
              to see if your question has already been answered.
            </span>
          </li>
        </ol>

        <div className="pt-4 border-t border-border/30">
          <p className="font-lora text-sm text-muted-foreground mb-4">
            If you've done both and still need help, join my Discord to report the issue:
          </p>
          <a
            href="https://discord.com/invite/Tdh8AfY6yf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-lora text-sm tracking-wide bg-foreground text-background px-6 py-3 rounded hover:opacity-90 transition-opacity"
          >
            Join Discord
          </a>
        </div>
      </div>
    </div>
  );
}