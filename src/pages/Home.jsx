import React from 'react';
import modsData from '@/data/mods-cleaned.json';
import HeroSection from '../components/home/HeroSection';
import FeaturedRow from '../components/home/FeaturedRow';

export default function Home() {
const hero = {
  title: "Origins",
  description: "Ever wanted to explore where your Sim is REALLY from? Hopefully this mod can help you do that! This mod introduces native types, accents, passports, and more!",
  image_url: "/images/Origins.png"
};

  const featuredModTitles = [
    "Better Brand Sponsorships",
    "Timelines", 
    "Romantica"
  ];
  
  const featured = modsData.filter(mod => 
    featuredModTitles.includes(mod.title)
  );

  return (
    <div>
      <HeroSection hero={hero} />
      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-border/30" />
      </div>
      <FeaturedRow featured={featured} />
    </div>
  );
}