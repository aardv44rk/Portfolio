/// <reference types="vite-plugin-svgr/client" />

import React from 'react';
import { Code2, Cpu, Globe2 } from 'lucide-react';
import TechIcon from './TechIcon';
import JavaIcon from '../assets/svg/java.svg?react';
import VSCodeIcon from '../assets/svg/vscode.svg?react';

interface BaseTechnology {
  name: string;
  color: string;
}

interface IconTechnology extends BaseTechnology {
  icon: string;
  customIcon?: never; // Prevents having both `icon` and `customIcon`
}

interface CustomIconTechnology extends BaseTechnology {
  customIcon: string;
  icon?: never; // Prevents having both `customIcon` and `icon`
}

type Technology = IconTechnology | CustomIconTechnology;

const technologies: {
  frontend: Technology[];
  backend: Technology[];
  tools: Technology[];
} = {
  frontend: [
    { name: 'React', icon: 'react', color: '61DAFB' },
    { name: 'TypeScript', icon: 'typescript', color: '3178C6' },
    { name: 'Next.js', icon: 'nextdotjs', color: 'ffffff' },
    { name: 'Tailwind CSS', icon: 'tailwindcss', color: '06B6D4' },
  ],
  backend: [
    { name: 'Node.js', icon: 'nodedotjs', color: '339933' },
    { name: 'Python', icon: 'python', color: '3776AB' },
    { name: 'Flask', icon: 'flask', color: 'bbbbbb'},
    { name: 'NGINX', icon: 'nginx', color: '009639'},
    { name: 'Java', color: 'E32D2D', customIcon: 'java' }
  ],
  tools: [
    { name: 'Git', icon: 'git', color: 'F05032' },
    { name: 'Docker', icon: 'docker', color: '2496ED' },
    { name: 'NVim', icon: 'neovim', color: '57A143' },
    { name: 'VSCode', color: '0098FF', customIcon: 'vscode' },
  ],
};

const skills = [
  {
    icon: Code2,
    title: "Frontend Development",
    description: "Currently learning React, TypeScript, and Tailwind.",
    technologies: technologies.frontend
  },
  {
    icon: Cpu,
    title: "Backend Development",
    description: "Experience working with server solutions and APIs with Node.js, Python, and NGINX. Java Experience from school",
    technologies: technologies.backend
  },
  {
    icon: Globe2,
    title: "DevOps & Tools",
    description: "Experience with a number of tools and technologies",
    technologies: technologies.tools
  }
];

export default function AboutSection() {
  return (
    <div className="h-screen overflow-y-auto bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row gap-12 mb-16">
          <div className="md:w-1/3">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-800/50 backdrop-blur-sm">
              <img
                src="/assets/images/IMG_6409.jpg"
                alt="Profile"
                style={{transform: 'rotate(90deg)'}}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
            </div>
          </div>

          <div className="md:w-2/3">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <p className="text-xl text-gray-300 mb-8">
              I'm currently a student at the Norwegian University of Science and Technology studying Computer Engineering.
              With a passion for mathematics and physics, my goal is to apply my knowledge to solve real world problems on a global scale.
            </p>
            <p className="text-xl text-gray-300 mb-8">
              My journey in technology started with a deep curiosity about how things work.
              Today, that curiosity drives me to continuously learn and adapt to new technologies.
            </p>
            <p className="text-xl text-gray-300">
              My freetime is mostly spent with friends, but I also play guitar and work out frequently.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skills.map(({ icon: Icon, title, description, technologies }) => (
            <div key={title} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6">
              <Icon size={32} className="text-teal-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p className="text-gray-400 mb-6">{description}</p>
              <div className="flex flex-wrap gap-4">
                {technologies.map((tech) =>
                  tech.customIcon ? (
                    <div key={tech.name} className="group relative flex flex-col items-center">
                      <div
                        className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-800/50 backdrop-blur-sm hover:scale-110 transition-transform duration-300"
                      >
                        {tech.customIcon === 'java' && <JavaIcon fill={`#${tech.color}`} className="w-6 h-6" />}
                        {tech.customIcon === 'vscode' && (
                          <VSCodeIcon className="w-6 h-6" style={{ fill: `#${tech.color}` }} />
                        )}
                      </div>
                      <span className="absolute -bottom-8 px-2 py-1 bg-gray-800 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {tech.name}
                      </span>
                    </div>
                  ) : (
                    <TechIcon key={tech.name} {...tech} />
                  )
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-4">Professional Journey</h3>
          <div className="space-y-6">
            <div className="border-l-2 border-teal-500 pl-4">
              <h4 className="text-xl font-semibold">Student at NTNU</h4>
              <p className="text-teal-400">2024 - Present</p>
              <p className="text-gray-400 mt-2">
                Starting August 2024 I became a student of Computer Engineering at NTNU.
              </p>
            </div>
            <div className="border-l-2 border-gray-500 pl-4">
              <h4 className="text-xl font-semibold">Hobby Projects</h4>
              <p className="text-teal-400">2019 - 2023</p>
              <p className="text-gray-400 mt-2">
                From 2019 onwards I have worked on small hobby projects using the technologies mentioned above.
              </p>
            </div>
            <div className="border-l-2 border-gray-700 pl-4">
              <h4 className="text-xl font-semibold">Introduction to Programming</h4>
              <p className="text-teal-400">2019</p>
              <p className="text-gray-400 mt-2">
                I took a programming class in high school, which was the start of my journey in technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
