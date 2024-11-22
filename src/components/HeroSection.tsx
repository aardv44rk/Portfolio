import React from 'react';
import { Github, Linkedin, Mail, ArrowRight, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onNavigate: () => void;
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      {/* Main content */}
      <div className="relative container mx-auto px-6 pt-32 pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-teal-400 font-medium mb-6 animate-fade-in">
            <Sparkles size={20} className="animate-pulse" />
            <span>Welcome to my portfolio</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-blue-500">Audun Aakermann</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed animate-slide-up-delay">
            A student with a goal to work as a developer internationally.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-slide-up-delay-2">
            <button 
              onClick={onNavigate}
              className="group px-8 py-4 bg-teal-200 hover:bg-teal-300 rounded-lg font-medium transition-all transform hover:scale-105 flex items-center gap-2"
            >
              View My Work
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-lg font-medium backdrop-blur-sm transition-all transform hover:scale-105">
              Download Resume
            </button>
          </div>
          
          <div className="flex items-center gap-6 animate-slide-up-delay-3">
            <a href="https://github.com/aardv44rk" className="text-gray-400 hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/audun-aakermann-92221633a/" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:audunaakermann@gmail.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}