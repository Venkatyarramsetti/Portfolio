
import React from 'react';

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Vignan's Institute of Information Technology, Durvada",
      duration: "08/2022 - Present",
      location: "Visakhapatnam, India",
      gpa: "8.5 / 10",
      type: "Undergraduate",
      description: "Specializing in Computer Science with focus on software engineering, data structures, and web technologies."
    },
    {
      degree: "Senior Secondary (Intermediate)",
      institution: "Sri Chaitanya Educational Institutions",
      duration: "06/2019 - 03/2021",
      location: "Rajahmundry, India", 
      gpa: "921 / 1000",
      type: "12th Grade",
      description: "Completed intermediate education with strong foundation in Mathematics, Physics, and Chemistry."
    },
    {
      degree: "Secondary School (SSC)",
      institution: "Maharshi Vidya Niketan",
      duration: "2019",
      location: "Atreyapuram, India",
      gpa: "9.7 / 10",
      type: "10th Grade", 
      description: "Completed secondary education with excellent academic performance across all subjects."
    }
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-700/30 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-400 mb-6">
            <div className="w-5 h-5 bg-blue-200 rounded-sm"></div>
            <span className="text-blue-100 font-medium">Education</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Academic Background
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Strong academic foundation with consistent excellence across all levels of education
          </p>
        </div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div 
              key={index}
              className="bg-blue-800/20 backdrop-blur-sm rounded-2xl border border-blue-400 overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6">
                  <div className="lg:w-2/3">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-blue-600/40 text-blue-100 px-3 py-1 rounded-full text-sm font-medium border border-blue-400">
                        {edu.type}
                      </span>
                      <span className="text-blue-300 text-sm">{edu.duration}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                    <p className="text-blue-200 font-semibold text-lg mb-2">{edu.institution}</p>
                    <p className="text-blue-300 text-sm mb-4">{edu.location}</p>
                    <p className="text-blue-100 leading-relaxed">{edu.description}</p>
                  </div>
                  
                  <div className="lg:w-1/3 lg:text-right">
                    <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-6 rounded-xl text-center lg:text-right">
                      <div className="text-white text-sm font-medium mb-1">Academic Performance</div>
                      <div className="text-white text-3xl font-bold">{edu.gpa}</div>
                      <div className="text-blue-100 text-sm mt-1">
                        {edu.type === 'Undergraduate' ? 'CGPA' : 
                         edu.type === '12th Grade' ? 'Score' : 'CGPA'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-800/30 to-indigo-800/30 backdrop-blur-sm p-8 rounded-2xl border border-blue-400">
          <h3 className="text-3xl font-bold text-white mb-6 text-center">Academic Highlights</h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-200 mb-2">8.5</div>
              <div className="text-blue-100">Current CGPA</div>
              <div className="text-blue-300 text-sm">B.Tech CSE</div>
            </div>
            
            <div>
              <div className="text-3xl font-bold text-blue-200 mb-2">921</div>
              <div className="text-blue-100">Intermediate Score</div>
              <div className="text-blue-300 text-sm">Out of 1000</div>
            </div>
            
            <div>
              <div className="text-3xl font-bold text-blue-200 mb-2">9.7</div>
              <div className="text-blue-100">SSC CGPA</div>
              <div className="text-blue-300 text-sm">Out of 10</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
