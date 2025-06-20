
import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "Front-End Developer Intern",
      company: "Octanet Services Pvt. Ltd",
      duration: "03/2024 - 06/2024",
      location: "Remote",
      type: "Internship",
      description: "Octanet is a tech company focusing on web development and IT solutions.",
      responsibilities: [
        "Created and styled pages using HTML, CSS, and JavaScript",
        "Ensured responsiveness and cross-browser compatibility", 
        "Collaborated using Git for version control and team coordination",
        "Applied UI/UX best practices to improve user experience"
      ],
      skills: ["HTML", "CSS", "JavaScript", "Git", "UI/UX", "Responsive Design"]
    }
  ];

  const achievements = [
    {
      title: "SusHacks Hackathon 2024",
      achievement: "Reached Top 30 out of 120+ teams",
      description: "National-level event focused on innovative tech solutions under the theme 'Resume Analyzing'",
      date: "2024"
    },
    {
      title: "CodeChef Rating",
      achievement: "2⭐ Rated Coder",
      description: "Achieved a 2⭐ rating on CodeChef with participation in 15+ contests and a peak rating of 2000+, showcasing consistent growth and strong coding skills",
      date: "Ongoing"
    },
    {
      title: "LeetCode Performance", 
      achievement: "Contest Performance - Top 6-8%",
      description: "Achieved a LeetCode Contest ranking of 1814, placing in the top 6-8% of global competitors, demonstrating advanced problem-solving skills in timed environments",
      date: "2024"
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-700/30 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-400 mb-6">
            <div className="w-5 h-5 bg-blue-200 rounded-full"></div>
            <span className="text-blue-100 font-medium">Experience & Achievements</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Professional Journey
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Section */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-8">Work Experience</h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  className="bg-blue-800/20 backdrop-blur-sm p-6 rounded-2xl border border-blue-400 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-white mb-1">{exp.title}</h4>
                      <p className="text-blue-200 font-semibold">{exp.company}</p>
                      <p className="text-blue-300 text-sm">{exp.description}</p>
                    </div>
                    <div className="text-right mt-2 sm:mt-0">
                      <span className="bg-blue-700/40 text-blue-100 px-3 py-1 rounded-full text-sm border border-blue-400">
                        {exp.type}
                      </span>
                      <p className="text-blue-200 text-sm mt-2">{exp.duration}</p>
                      <p className="text-blue-300 text-sm">{exp.location}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h5 className="text-blue-200 font-semibold mb-2">Key Responsibilities:</h5>
                    <ul className="space-y-1">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-blue-300 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-blue-100 text-sm">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="bg-blue-600/30 text-blue-100 px-2 py-1 rounded text-xs border border-blue-400"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements Section */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-8">Key Achievements</h3>
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="bg-blue-800/20 backdrop-blur-sm p-6 rounded-2xl border border-blue-400 animate-fade-in"
                  style={{ animationDelay: `${(index + 1) * 0.1}s` }}
                >
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-lg font-bold text-white">{achievement.title}</h4>
                    <span className="bg-blue-600/40 text-blue-100 px-3 py-1 rounded-full text-xs border border-blue-400">
                      {achievement.date}
                    </span>
                  </div>
                  
                  <p className="text-blue-200 font-semibold mb-2">{achievement.achievement}</p>
                  <p className="text-blue-100 text-sm leading-relaxed">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
