import { useState, useEffect } from 'react';

export default function ModImage({ src, alt }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
  }, [src]);

  return (
    <div className="aspect-video overflow-hidden rounded bg-secondary/50 mb-4">
      {!loaded && (
        <div className="w-full h-full animate-pulse bg-secondary/50" />
      )}

      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
}