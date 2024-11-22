import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import Navigation from './components/Navigation';

function App() {
  const [currentSection, setCurrentSection] = useState(0);

  return (
    <div className="h-screen w-screen overflow-hidden">
      <Navigation currentSection={currentSection} setCurrentSection={setCurrentSection} />
      <div 
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSection * 100}%)` }}
      >
        <div className="min-w-full h-full">
          <HeroSection onNavigate={() => setCurrentSection(1)} />
        </div>
        <div className="min-w-full h-full">
          <AboutSection />
        </div>
        <div className="min-w-full h-full">
          <ProjectsSection />
        </div>
      </div>
    </div>
  );
}

export default App;