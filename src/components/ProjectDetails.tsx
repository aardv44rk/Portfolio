import React from 'react';
import { ArrowLeft, Github, FileText } from 'lucide-react';
import { Project } from '../types/project';

interface ProjectDetailsProps {
  project: Project;
  onBack: () => void;
}

export default function ProjectDetails({ project, onBack }: ProjectDetailsProps) {
  return (
    <div className="h-screen overflow-y-auto bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gray-400 hover:text-white mb-8 group"
        >
          <ArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </button>

        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        
        <div className="flex gap-4 mb-8">
          {project.tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-gray-800 text-teal-400 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div className="space-y-8">
              <div className="aspect-video rounded-xl overflow-hidden bg-gray-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            
            <div className="grid grid-cols-2 gap-4">
              {project.gallery?.map((img, index) => (
                <div key={index} className="aspect-video rounded-lg overflow-hidden bg-gray-800">
                  <img 
                    src={img} 
                    alt={`${project.title} gallery ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
              <p className="text-gray-300 leading-relaxed">{project.description}</p>
            </div>

            {project.technologiesUsed && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  {project.technologiesUsed.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </div>
            )}

            {project.duration && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Project Duration</h2>
                <p className="text-gray-300 leading-relaxed">{project.duration}</p>
              </div>
            )}

            {project.features && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
            {project.role && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Role</h2>
                <p className="text-gray-300 leading-relaxed">{project.role}</p>
              </div>
            )}
            {project.assignments && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Assignments</h2>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  {project.assignments.map((assignment, index) => (
                    <li key={index}>
                      <strong>{assignment.title}:</strong> {assignment.description}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {project.teamMembers && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Team Members</h2>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  {project.teamMembers.map((member, index) => (
                    <li key={index}>{member}</li>
                  ))}
                </ul>
              </div>
            )}
            {project.challenges && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Challenges</h2>
                <p className="text-gray-300 leading-relaxed">{project.challenges}</p>
              </div>
            )}
            {project.lessonsLearned && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Lessons Learned</h2>
                <p className="text-gray-300 leading-relaxed">{project.lessonsLearned}</p>
              </div>
            )}

            {project.reflections && project.reflections.trim() !== '' && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Reflections</h2>
                <p className="text-gray-300 leading-relaxed">{project.reflections}</p>
              </div>
            )}
              
            <div className="flex gap-6 mt-8">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-lg transition-colors"
              >
                <Github size={20} />
                View Code
              </a>
        {project.pdfUrl && (
              <a
                href={project.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                onClick={e => e.stopPropagation()}
              >
                <FileText size = {20} />
                <span>View PDF</span>
              </a>
            )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
