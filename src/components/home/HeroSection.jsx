import React from 'react';

export default function HeroSection({ hero }) {
  if (!hero) {
    return (
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="aspect-video bg-secondary/50 rounded flex items-center justify-center">
          <p className="text-muted-foreground font-lora text-sm italic">
            No featured mod yet.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row gap-10 items-center">
        {hero.image_url ? (
          <div className="w-full md:w-1/2 aspect-video overflow-hidden rounded shrink-0">
            <img
              src={hero.image_url}
              alt={hero.title || 'Featured mod'}
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="w-full md:w-1/2 aspect-video bg-secondary/50 rounded shrink-0 flex items-center justify-center">
            <p className="text-muted-foreground font-lora text-sm italic">
              Image coming soon
            </p>
          </div>
        )}
        <div className="space-y-3">
          <p className="font-lora text-xs tracking-widest uppercase text-muted-foreground">
            Latest Release • Early Access
          </p>

          {hero.title && (
            <h2 className="font-lora text-3xl font-semibold tracking-wide">
              {hero.title}
            </h2>
          )}

          {hero.description && (
            <p className="font-lora text-sm text-muted-foreground leading-relaxed">
              {hero.description}
            </p>
          )}

          <a
            href="https://www.patreon.com/posts/preview-origins-155576051"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-5 py-2 bg-[#3e3a35] text-white text-sm font-semibold rounded hover:bg-[#2f2b27] transition"
          >
            View on Patreon
          </a>
        </div>
      </div>
    </section>
  );
}