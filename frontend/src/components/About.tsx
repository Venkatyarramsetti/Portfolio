
import React from 'react';
import { User } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-700/30 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-400 mb-6">
            <User size={20} className="text-blue-200" />
            <span className="text-blue-100 font-medium">About Me</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Passionate Developer & Problem Solver
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-blue-100 leading-relaxed">
              I'm a motivated and skilled Computer Science undergraduate from VJIT Visakhapatnam, 
              with a strong foundation in full stack web development, data structures, and software 
              engineering principles.
            </p>
            
            <p className="text-lg text-blue-100 leading-relaxed">
              I have demonstrated experience through internships and live projects involving React, 
              Node.js, MongoDB, and REST APIs. I'm passionate about participating in hackathons, 
              contributing to open-source projects, and quick learning.
            </p>
            
            <p className="text-lg text-blue-100 leading-relaxed">
              With a problem-solving mindset, I aim to deliver impactful, production-ready applications 
              in collaborative environments.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-blue-800/30 backdrop-blur-sm p-4 rounded-lg border border-blue-400">
                <h4 className="text-blue-200 font-semibold mb-2">Education</h4>
                <p className="text-blue-100 text-sm">B.Tech Computer Science</p>
                <p className="text-blue-200 text-sm">VIIT, Duvvada</p>
                <p className="text-blue-300 text-sm">GPA: 8.5/10</p>
              </div>
              
              <div className="bg-blue-800/30 backdrop-blur-sm p-4 rounded-lg border border-blue-400">
                <h4 className="text-blue-200 font-semibold mb-2">Experience</h4>
                <p className="text-blue-100 text-sm">Frontend Developer Intern</p>
                <p className="text-blue-200 text-sm">Octanet Services</p>
                <p className="text-blue-300 text-sm">Remote (2024)</p>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-800/20 backdrop-blur-sm p-8 rounded-2xl border border-blue-400">
            <h3 className="text-2xl font-bold text-white mb-6">Key Achievements</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-300 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-blue-100 font-medium">Top 30 in SusHacks Hackathon 2024</p>
                  <p className="text-blue-200 text-sm">National-level innovative tech solutions</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-300 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-blue-100 font-medium">
                    <a
                      href="https://www.codechef.com/users/satyasaivenkat"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline text-blue-100"
                    >
                      1⭐ Rated Coder on CodeChef
                    </a>
                  </p>
                  <p className="text-blue-200 text-sm">Peak rating of 1400+ in competitive programming</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-300 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-blue-100 font-medium">
                    <a
                      href="https://leetcode.com/u/Y_s_s_venkat/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline text-blue-100"
                    >
                      Rating of over 1900 in LeetCode Contest
                    </a>
                  </p>
                  <p className="text-blue-200 text-sm">Ranked 26000 among global competitors</p>
                </div>
              </div>

              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-300 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-blue-100 font-medium">Multiple Certifications</p>
                  <p className="text-blue-200 text-sm">Frontend Web Development, Google AI/ML, Postman API</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
