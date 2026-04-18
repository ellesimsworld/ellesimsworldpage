import React, { useState } from 'react';
import modsData from '@/data/mods-cleaned.json';
import ModImage from '@/components/ModImage';

export default function Mods() {
  const [activeTab, setActiveTab] = useState('Gameplay');

  const filtered = modsData.filter((m) => m.category === activeTab);

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="font-lora text-3xl font-semibold tracking-wide mb-2">Mods</h1>
      <p className="font-lora text-sm text-muted-foreground mb-10">
        Browse gameplay mods and overrides.
      </p>

      <div className="flex gap-8 mb-10 border-b border-border/30">
        {['Gameplay', 'Override'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`font-lora text-sm tracking-wide pb-3 transition-colors ${
              activeTab === tab
                ? 'text-foreground border-b-2 border-foreground'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-muted-foreground text-sm italic text-center py-20">
          No {activeTab.toLowerCase()} mods yet.
        </p>
      ) : (
        <div key={activeTab} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map((mod) => {
            const hasLink = mod.patreon_link && mod.patreon_link.trim() !== '';
            const CardWrapper = hasLink ? 'a' : 'div';
            const linkProps = hasLink
              ? {
                  href: mod.patreon_link,
                  target: '_blank',
                  rel: 'noopener noreferrer',
                }
              : {};

            return (
              <CardWrapper
                key={mod.title}
                className={`group ${hasLink ? 'cursor-pointer' : ''}`}
                {...linkProps}
              >
                {/* 👇 THIS is the important change */}
                {mod.image_url ? (
                  <ModImage src={mod.image_url} alt={mod.title} />
                ) : (
                  <div className="aspect-video overflow-hidden rounded bg-secondary/50 mb-4 flex items-center justify-center">
                    <span className="text-muted-foreground text-xs italic">
                      No image
                    </span>
                  </div>
                )}

                <h3 className="font-lora text-base font-medium tracking-wide mb-1">
                  {mod.title}
                </h3>

                {mod.description && (
                  <p className="font-lora text-sm text-muted-foreground leading-relaxed">
                    {mod.description}
                  </p>
                )}

                {!hasLink && (
                  <p className="font-lora text-xs text-muted-foreground italic mt-2">
                    Download link coming soon
                  </p>
                )}
              </CardWrapper>
            );
          })}
        </div>
      )}
    </div>
  );
}