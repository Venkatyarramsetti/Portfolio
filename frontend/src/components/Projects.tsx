import React from 'react';
import { Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "ResuTrack",
      description: "Resume Insight Analyzer based on Job Roles. Analyzes resumes and provides tailored feedback based on job titles and priorities. Features live deployment and comprehensive resume analysis.",
      technologies: ["Python", "Machine Learning", "Web Development", "Data Analysis"],
      features: [
        "Analyzes resumes and provides tailored feedback",
        "Hosted live application",
        "Suggests improvements by identifying missing skills",
        "Weak sections analysis and formatting gaps"
      ],
      githubUrl: "https://github.com/Venkatyarramsetti/ResuTrack",
      liveUrl: "https://resutrack.netlify.app/",
      color: "from-blue-600 to-cyan-600"
    },
    {
      title: "Volume Control by Gestures",
      description: "Hands-free System Volume Control via Hand Gestures. An innovative computer vision project that recognizes hand gestures and controls system volume in real-time.",
      technologies: ["Python", "OpenCV", "Computer Vision", "Hand Tracking"],
      features: [
        "Uses Python logic with full-stack implementation",
        "Real-time hand gesture recognition",
        "Smooth frontend-backend communication via ngrok",
        "Live hosted application with gesture controls"
      ],
      githubUrl: "https://github.com/Venkatyarramsetti/Hand-Gesture-Volume-Ctrl",
      liveUrl: "https://volumectrlbygestures.vercel.app/",
      color: "from-indigo-600 to-purple-600"
    },
    {
      title: "My Portfolio",
      description: "A personal portfolio website showcasing my projects, skills, experience, and contact details. Designed with modern UI, smooth animations, and responsive design principles.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "ShadCN UI"],
      features: [
        "Responsive and modern UI built with Tailwind CSS",
        "Separate sections for About, Skills, Experience, and Projects",
        "Integrated ShadCN UI components for consistent styling",
        "Smooth navigation and interactive animations"
      ],
      githubUrl: "https://github.com/Venkatyarramsetti/Portfolio",
      liveUrl: "https://satyasaivenkatportfolio.netlify.app/",   
      color: "from-green-600 to-emerald-500"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-700/30 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-400 mb-6">
            <Github size={20} className="text-blue-200" />
            <span className="text-blue-100 font-medium">Featured Projects</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            My Latest Work
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Innovative projects showcasing full-stack development, machine learning, and computer vision
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="bg-blue-800/20 backdrop-blur-sm rounded-2xl border border-blue-400 overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="p-8">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-2/3">
                    <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
                    <p className="text-blue-100 text-lg mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="text-blue-200 font-semibold mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-blue-300 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-blue-100">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-blue-700/40 text-blue-100 px-3 py-1 rounded-full text-sm border border-blue-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <a
                        href={project.githubUrl || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 ${
                          project.githubUrl ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-500 cursor-not-allowed"
                        } text-white px-6 py-3 rounded-lg font-semibold transition-colors transform ${project.githubUrl ? "hover:scale-105" : ""}`}
                      >
                        <Github size={20} />
                        View Code
                      </a>
                      <a
                        href={project.liveUrl || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 border-2 ${
                          project.liveUrl ? "border-blue-400 text-blue-100 hover:bg-blue-400 hover:text-white" : "border-gray-500 text-gray-300 cursor-not-allowed"
                        } px-6 py-3 rounded-lg font-semibold transition-colors transform ${project.liveUrl ? "hover:scale-105" : ""}`}
                      >
                        Live Demo
                      </a>
                    </div>
                  </div>
                  
                  <div className="lg:w-1/3">
                    <div className={`bg-gradient-to-br ${project.color} p-6 rounded-xl h-48 flex items-center justify-center`}>
                      <div className="text-center">
                        <div className="text-white text-4xl font-bold mb-2">{project.title.split(' ')[0]}</div>
                        <div className="text-blue-100">Project Showcase</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://github.com/Venkatyarramsetti"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors transform hover:scale-105"
          >
            <Github size={24} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
