import React from 'react';
import modsData from '@/data/mods-cleaned.json';
import HeroSection from '../components/home/HeroSection';
import FeaturedRow from '../components/home/FeaturedRow';

export default function Home() {
const hero = {
  title: "Pour Decisions",
  description: "We've all made...'pour' decisions at some point in our lives. This mini mod allows you to give your Sim a 'drunk type' (basically you decide what type of Sim they are when they're drunk).",
  image_url: "/images/PourDecisions.png"
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