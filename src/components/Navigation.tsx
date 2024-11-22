import React from 'react';
import { Home, User, Briefcase } from 'lucide-react';

interface NavigationProps {
  currentSection: number;
  setCurrentSection: (section: number) => void;
}

export default function Navigation({ currentSection, setCurrentSection }: NavigationProps) {
  const sections = [
    { icon: Home, label: 'Home' },
    { icon: User, label: 'About' },
    { icon: Briefcase, label: 'Projects' }
  ];

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50">
      <div className="flex flex-col gap-6">
        {sections.map((section, index) => {
          const Icon = section.icon;
          return (
            <button
              key={section.label}
              onClick={() => setCurrentSection(index)}
              className={`group relative flex items-center justify-center w-12 h-12 rounded-full 
                ${currentSection === index 
                  ? 'bg-beige-200 text-white' 
                  : 'bg-periglacial-blue-800/50 text-beige-200 hover:bg-periglacial-blue-800'
                } backdrop-blur-sm transition-all`}
            >
              <Icon size={20} />
              <span className="absolute right-full mr-4 px-2 py-1 rounded bg-periglacial-blue-800 text-white text-sm
                opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {section.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}