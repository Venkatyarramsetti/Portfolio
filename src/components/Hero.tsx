
import React from 'react';
import { Github, Linkedin, Mail, Phone, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-300/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="animate-fade-in">
          {/* Profile Image with Glow Effect */}
          <div className="relative inline-block mb-8">
            <div className="w-32 h-32 mx-auto bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full p-1 animate-pulse">
              <div className="w-full h-full bg-blue-900 rounded-full flex items-center justify-center">
                <span className="text-4xl font-bold text-white">SV</span>
              </div>
            </div>
            <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-xl animate-pulse"></div>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 relative">
            <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent animate-scale-in">
              SATYA SAI VENKAT
            </span>
            <span className="block text-blue-200 text-4xl sm:text-5xl lg:text-6xl mt-2 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              YARRAMSETTI
            </span>
          </h1>
          
          <div className="relative mb-8">
            <p className="text-xl sm:text-2xl text-blue-100 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <span className="inline-block animate-pulse">💻</span> Computer Science Undergraduate | 
              <span className="inline-block animate-pulse" style={{ animationDelay: '0.5s' }}> 🚀</span> Frontend Developer | 
              <span className="inline-block animate-pulse" style={{ animationDelay: '1s' }}> 🧩</span> Problem Solver
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {['Python', 'React', 'JavaScript', 'Node.js'].map((skill, index) => (
              <span
                key={skill}
                className="bg-gradient-to-r from-blue-700/60 to-indigo-700/60 backdrop-blur-sm px-6 py-3 rounded-full text-blue-100 border border-blue-400/50 transform hover:scale-110 hover:bg-blue-600/60 transition-all duration-300 cursor-default animate-fade-in"
                style={{ animationDelay: `${0.9 + index * 0.1}s` }}
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="flex justify-center space-x-6 mb-8 animate-fade-in" style={{ animationDelay: '1.3s' }}>
            {[
              { href: "https://github.com/Venkatyarramsetti", icon: Github, color: "hover:text-gray-300" },
              { href: "https://linkedin.com/in/venkatyarramsetti", icon: Linkedin, color: "hover:text-blue-300" },
              { href: "mailto:yarramsettisai3@gmail.com", icon: Mail, color: "hover:text-green-300" },
              { href: "tel:+918328242849", icon: Phone, color: "hover:text-yellow-300" }
            ].map(({ href, icon: Icon, color }, index) => (
              <a 
                key={href}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`text-white ${color} transition-all duration-300 transform hover:scale-125 animate-bounce`}
                style={{ animationDelay: `${2 + index * 0.2}s` }}
              >
                <Icon size={36} />
              </a>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '1.6s' }}>
            <a 
              href="#contact" 
              className="group bg-gradient-to-r from-white to-blue-50 text-blue-900 px-8 py-4 rounded-xl font-semibold hover:from-blue-50 hover:to-white transition-all duration-300 transform hover:scale-105 hover:shadow-2xl relative overflow-hidden"
            >
              <span className="relative z-10">Get In Touch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a 
              href="#projects" 
              className="group border-2 border-white/80 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl relative overflow-hidden"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>

          {/* Scroll Down Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown size={32} className="text-white/70" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
