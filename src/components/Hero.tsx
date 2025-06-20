
import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            SATYA SAI VENKAT
            <span className="block text-blue-200 text-4xl sm:text-5xl lg:text-6xl mt-2">
              YARRAMSETTI
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Computer Science Undergraduate | Frontend Developer | Problem Solver
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="bg-blue-700/50 backdrop-blur-sm px-4 py-2 rounded-full text-blue-100 border border-blue-400">
              Python
            </span>
            <span className="bg-blue-700/50 backdrop-blur-sm px-4 py-2 rounded-full text-blue-100 border border-blue-400">
              React
            </span>
            <span className="bg-blue-700/50 backdrop-blur-sm px-4 py-2 rounded-full text-blue-100 border border-blue-400">
              JavaScript
            </span>
            <span className="bg-blue-700/50 backdrop-blur-sm px-4 py-2 rounded-full text-blue-100 border border-blue-400">
              Node.js
            </span>
          </div>

          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="https://github.com/Venkatyarramsetti" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-blue-200 transition-colors transform hover:scale-110"
            >
              <Github size={32} />
            </a>
            <a 
              href="https://linkedin.com/in/venkatyarramsetti" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-blue-200 transition-colors transform hover:scale-110"
            >
              <Linkedin size={32} />
            </a>
            <a 
              href="mailto:yarramsettisai3@gmail.com"
              className="text-white hover:text-blue-200 transition-colors transform hover:scale-110"
            >
              <Mail size={32} />
            </a>
            <a 
              href="tel:+918328242849"
              className="text-white hover:text-blue-200 transition-colors transform hover:scale-110"
            >
              <Phone size={32} />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors transform hover:scale-105"
            >
              Get In Touch
            </a>
            <a 
              href="#projects" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors transform hover:scale-105"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
