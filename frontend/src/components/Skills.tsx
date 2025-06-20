
import React, { useState } from 'react';
import { Settings, Code, Database, Globe, Wrench, Brain } from 'lucide-react';

const Skills = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const skillCategories = {
    "Programming Languages": {
      skills: ["Python", "C/C++", "JavaScript", "Java", "HTML", "CSS"],
      color: "from-blue-600 to-blue-700",
      hoverColor: "from-blue-500 to-blue-600",
      icon: Code,
      bgPattern: "bg-gradient-to-br from-blue-900/20 to-blue-800/30"
    },
    "Frontend Development": {
      skills: ["React", "React.js", "HTML", "CSS", "JavaScript"],
      color: "from-cyan-600 to-cyan-700",
      hoverColor: "from-cyan-500 to-cyan-600",
      icon: Globe,
      bgPattern: "bg-gradient-to-br from-cyan-900/20 to-cyan-800/30"
    },
    "Backend Development": {
      skills: ["Node.js", "Express.js", "MongoDB", "SQL"],
      color: "from-indigo-600 to-indigo-700",
      hoverColor: "from-indigo-500 to-indigo-600",
      icon: Database,
      bgPattern: "bg-gradient-to-br from-indigo-900/20 to-indigo-800/30"
    },
    "Tools & Technologies": {
      skills: ["Git", "GitHub", "Postman API", "Data Structures", "OOP"],
      color: "from-purple-600 to-purple-700",
      hoverColor: "from-purple-500 to-purple-600",
      icon: Wrench,
      bgPattern: "bg-gradient-to-br from-purple-900/20 to-purple-800/30"
    },
    "Additional Skills": {
      skills: ["Machine Learning", "TensorFlow", "Problem Solving", "Competitive Programming"],
      color: "from-teal-600 to-teal-700",
      hoverColor: "from-teal-500 to-teal-600",
      icon: Brain,
      bgPattern: "bg-gradient-to-br from-teal-900/20 to-teal-800/30"
    }
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-700/40 to-indigo-700/40 backdrop-blur-sm px-8 py-4 rounded-full border border-blue-400/50 mb-8 animate-scale-in">
            <Settings size={24} className="text-blue-200 animate-spin" style={{ animationDuration: '3s' }} />
            <span className="text-blue-100 font-semibold text-lg">My Skills</span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Technical Expertise
            </span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
            A comprehensive skill set spanning full-stack development, data structures, and modern technologies
          </p>
        </div>

        <div className="grid gap-8">
          {Object.entries(skillCategories).map(([category, { skills, color, hoverColor, icon: Icon, bgPattern }], index) => (
            <div 
              key={category}
              className={`${bgPattern} backdrop-blur-sm p-8 rounded-3xl border border-blue-400/30 transform transition-all duration-500 hover:scale-[1.02] hover:border-blue-300/50 animate-fade-in relative overflow-hidden group`}
              style={{ animationDelay: `${index * 0.15}s` }}
              onMouseEnter={() => setHoveredCategory(category)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              {/* Animated Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${color} shadow-lg transform transition-transform duration-300 ${hoveredCategory === category ? 'scale-110 rotate-12' : ''}`}>
                    <Icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">{category}</h3>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {skills.map((skill, skillIndex) => (
                    <div
                      key={skill}
                      className={`bg-gradient-to-r ${hoveredCategory === category ? hoverColor : color} text-white px-4 py-3 rounded-xl font-medium transform transition-all duration-300 hover:scale-110 hover:-translate-y-1 cursor-default shadow-lg border border-white/20 animate-scale-in relative overflow-hidden group/skill`}
                      style={{ animationDelay: `${(index * 0.15) + (skillIndex * 0.05)}s` }}
                    >
                      <div className="absolute inset-0 bg-white/20 opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300"></div>
                      <span className="relative z-10 text-center block">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-blue-800/40 to-indigo-800/40 backdrop-blur-sm p-10 rounded-3xl border border-blue-400/30 animate-fade-in relative overflow-hidden group" style={{ animationDelay: '0.8s' }}>
          {/* Floating Elements */}
          <div className="absolute top-4 right-4 w-8 h-8 bg-blue-400/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-4 left-4 w-6 h-6 bg-cyan-400/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          
          <h3 className="text-4xl font-bold text-white mb-8 text-center">
            <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              🏆 Certifications
            </span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Frontend Web Developer",
                issuer: "INFOSYS",
                description: "HTML, CSS, JS, responsive practices",
                color: "from-blue-600 to-blue-700",
                icon: "🌐"
              },
              {
                title: "Google AI/ML",
                issuer: "Google",
                description: "Supervised learning, TensorFlow basics",
                color: "from-green-600 to-green-700",
                icon: "🤖"
              },
              {
                title: "Postman API",
                issuer: "Postman",
                description: "API requests, authentication, testing",
                color: "from-orange-600 to-orange-700",
                icon: "🔧"
              }
            ].map((cert, certIndex) => (
              <div 
                key={cert.title}
                className={`bg-gradient-to-br ${cert.color} p-6 rounded-2xl border border-white/20 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 cursor-default shadow-xl animate-scale-in relative overflow-hidden group/cert`}
                style={{ animationDelay: `${1 + certIndex * 0.2}s` }}
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover/cert:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 text-center">
                  <div className="text-3xl mb-3 animate-bounce" style={{ animationDelay: `${1.5 + certIndex * 0.2}s` }}>
                    {cert.icon}
                  </div>
                  <h4 className="text-white font-bold text-lg mb-2">{cert.title}</h4>
                  <p className="text-white/90 text-sm font-medium mb-2">{cert.issuer}</p>
                  <p className="text-white/80 text-sm">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
