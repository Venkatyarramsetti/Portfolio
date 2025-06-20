
import React from 'react';
import { Settings } from 'lucide-react';

const Skills = () => {
  const skillCategories = {
    "Programming Languages": {
      skills: ["Python", "C/C++", "JavaScript", "Java", "HTML", "CSS"],
      color: "bg-blue-600"
    },
    "Frontend Development": {
      skills: ["React", "React.js", "HTML", "CSS", "JavaScript"],
      color: "bg-cyan-600"
    },
    "Backend Development": {
      skills: ["Node.js", "Express.js", "MongoDB", "SQL"],
      color: "bg-indigo-600"
    },
    "Tools & Technologies": {
      skills: ["Git", "GitHub", "Postman API", "Data Structures", "OOP"],
      color: "bg-purple-600"
    },
    "Additional Skills": {
      skills: ["Machine Learning", "TensorFlow", "Problem Solving", "Competitive Programming"],
      color: "bg-teal-600"
    }
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-700/30 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-400 mb-6">
            <Settings size={20} className="text-blue-200" />
            <span className="text-blue-100 font-medium">My Skills</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Technical Expertise
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            A comprehensive skill set spanning full-stack development, data structures, and modern technologies
          </p>
        </div>

        <div className="grid gap-8">
          {Object.entries(skillCategories).map(([category, { skills, color }], index) => (
            <div 
              key={category}
              className="bg-blue-800/20 backdrop-blur-sm p-6 rounded-2xl border border-blue-400 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className={`${color} text-white px-4 py-2 rounded-lg font-medium transform hover:scale-105 transition-transform cursor-default shadow-lg`}
                    style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-800/30 to-indigo-800/30 backdrop-blur-sm p-8 rounded-2xl border border-blue-400">
          <h3 className="text-3xl font-bold text-white mb-6 text-center">Certifications</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-700/40 p-4 rounded-lg border border-blue-400">
                <h4 className="text-blue-200 font-semibold mb-2">Frontend Web Developer</h4>
                <p className="text-blue-100 text-sm">INFOSYS</p>
                <p className="text-blue-300 text-sm mt-1">HTML, CSS, JS, responsive practices</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-700/40 p-4 rounded-lg border border-blue-400">
                <h4 className="text-blue-200 font-semibold mb-2">Google AI/ML</h4>
                <p className="text-blue-100 text-sm">Google</p>
                <p className="text-blue-300 text-sm mt-1">Supervised learning, TensorFlow basics</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-700/40 p-4 rounded-lg border border-blue-400">
                <h4 className="text-blue-200 font-semibold mb-2">Postman API</h4>
                <p className="text-blue-100 text-sm">Postman</p>
                <p className="text-blue-300 text-sm mt-1">API requests, authentication, testing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
