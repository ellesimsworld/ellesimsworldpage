import React from 'react';
import { Link } from 'react-router-dom';

export default function FeaturedRow({ featured }) {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <div className="flex items-center justify-between mb-8">
        <h3 className="font-lora text-lg tracking-wide">Latest Mods</h3>
        <Link
          to="/mods"
          className="font-lora text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide"
        >
          View All →
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {featured.length === 0 && (
          <p className="text-muted-foreground text-sm italic col-span-3 text-center py-12">
            No featured mods yet.
          </p>
        )}
       {featured.map((mod, index) => (
  <div key={index} className="group">
            <div className="aspect-video overflow-hidden rounded bg-secondary/50">
              {mod.image_url ? (
                <img
                  src={mod.image_url}
                  alt={mod.title}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-muted-foreground text-xs italic">No image</span>
                </div>
              )}
            </div>
            <p className="font-lora text-sm mt-3 tracking-wide">{mod.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}