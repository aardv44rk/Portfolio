import React, { useState } from 'react';
import { ExternalLink, Github, Search, FileText } from 'lucide-react';
import type { Project } from '../types/project';
import ProjectDetails from './ProjectDetails';

const projects: Project[] = [
  {
    id: 1,
    title: "Food managing program",
    description: "My semester assignment in Programming 1. A program that manages food in a storage.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Banana-Single.jpg/2324px-Banana-Single.jpg",
    gallery: [
    ],
    tags: ["Java"],
    features: [
      "Scalable",
      "Real-time inventory management",
    ],
    reflections: "This project taught me a lot of lessons. Technical skills are one thing, but the importance of using git and properly planning out a project before starting are my biggest takeaways.",
    githubUrl: "https://github.com/NTNU-IDI/idatt1003-mappe-2024-aardv44rk",
    technologiesUsed: ["Java"],
    role: "Lead developer",
    assignments: [{
      title: "",
      description: "",
    },
    {
      title: "",
      description: "",

    }
    ],
    duration: "3 months",
    challenges: "Planning properly and finding the most efficient solutions",
    lessonsLearned: "The importance of proper version control with git and setting small milestones.",
  },
  {
    id: 2,
    title: "Lego EV3 Dynamic Solar Panel",
    description: "My semester assignment in IDATT1004. The assignment was to make a robot using Lego EV3 that is sustainable.",
    image: "assets/images/team_image.jpg",
    gallery: [
      "assets/images/robot1.jpg",
      "assets/images/robot2.jpg",
      "assets/images/robot3.jpg",
    ],
    tags: ["EV3", "MicroPython"],
    features: [
      "Dynamically tracks the sun",
      "Works no matter where you are",
    ],
    role: "Meeting Coordinator, Lego Engineer, and Report Writer",
    reflections: "The biggest takeaway from this project was the experience of working in a team. The importance of good communication, planning, and role assignment. This is something that I struggled with at the beginning of the project, but that I have become noticably better at over time.",
    githubUrl: "https://gitlab.stud.idi.ntnu.no/idatx1004-20-v2024/prosjektoppgave.git",
    pdfUrl: "assets/idatt1004.pdf",
    technologiesUsed: ["EV3", "MicroPython"],
    teamMembers: ["Mateja Vasic", "Stian Mathisen Myrbekk", "Audun Rosvold", "Oliver Higgins"],
    duration: "3 months",
    challenges: "There were some challenges underways with the robot, such as the internal clock not syncing properly and the RPM-readings not matching up to our specifications. These were problems that we eventually solved: the first one by sudo-ing the internal clock each time we turned on the robot, and the other by continously comparing the expected RPM to the actual and inputting the difference.",
    lessonsLearned: "Planning, assigning roles, and communicating properly with the team are the lessons I take away from this. I had previous Python experience, but hadn't worked with OOP a lot before this, so that is another thing. Lastly I got more used to Git, even though I personally didn't use it all that much throughout the project. I will use these experiences later in lafe to contribute to a good team dynamic and to deliver well designed products.",
  },
  {
    id: 3,
    title: "Programming Exercises",
    description: "Here are descriptions of some of the assignments I completed in Programming 1 - IDATT1003",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Flag_of_Serbia.svg",
    gallery: [
    ],
    tags: ["Java"],
    githubUrl: "https://github.com/aardv44rk/Prog-Assignments",
    technologiesUsed: ["Java"],
    role: "Lead developer",
    assignments: [{
      title: "Exercise 9",
      description: "Student Manager Application with TUI",
    },
    {
      title: "Exercise 10",
      description: "Event Manager and Menu Registry with TUI",

    },
    {
      title: "Exercise 11",
      description: "Property Manager with TUI",
    }
    ],
    challenges: "Not really any.",
    lessonsLearned: "Use of Java Streams and Interfaces are some of the things I learned.",
  },
];

export default function ProjectsSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const allTags = Array.from(new Set(projects.flatMap(project => project.tags)));

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = !selectedTag || project.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  if (selectedProject) {
    return <ProjectDetails project={selectedProject} onBack={() => setSelectedProject(null)} />;
  }

  return (
    <div className="h-screen overflow-y-auto bg-periglacial-blue-900">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
        <p className="text-periglacial-blue-400 mb-12 max-w-2xl">
          Explore my latest works and side projects (Side projects not added yet).
        </p>

        <div className="flex flex-col md:flex-row gap-6 mb-12">
          <div className="relative flex-1">
            <div className="absolute left-3 top-[13px] text-periglacial-blue-400">
              <Search size={20} />
            </div>
            <input
              type="text"
              placeholder="Search projects..."
              className="w-full bg-periglacial-blue-800 text-white rounded-lg pl-12 pr-4 h-12 focus:ring-2 focus:ring-periglacial-blue-500 outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-3 flex-wrap">
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-4 py-2 rounded-lg transition-all ${
                !selectedTag 
                  ? 'bg-periglacial-blue-500 text-white' 
                  : 'bg-periglacial-blue-800 text-periglacial-blue-400 hover:bg-periglacial-blue-700'
              }`}
            >
              All
            </button>
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  selectedTag === tag 
                    ? 'bg-periglacial-blue-500 text-white' 
                    : 'bg-periglacial-blue-800 text-periglacial-blue-400 hover:bg-periglacial-blue-700'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className="bg-periglacial-blue-800 rounded-xl overflow-hidden group hover:transform hover:scale-[1.02] transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ${
                    project.id === 2 ? 'filter blur-md' : ''
                  }`}
                />
                {project.id === 2 && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/fr/8/8f/Logo_Lego_Mindstorms_EV3.png"
                      alt={`${project.title} overlay`}
                      className="w-1/2 h-auto object-contain"
                    />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-periglacial-blue-900 to-transparent opacity-60" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-periglacial-blue-400 mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-sm px-3 py-1 bg-periglacial-blue-700 text-periglacial-blue-400 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-periglacial-blue-400 hover:text-white transition-colors"
                    onClick={e => e.stopPropagation()}
                  >
                    <Github size={20} />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
