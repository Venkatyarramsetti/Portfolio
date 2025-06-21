import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [sending, setSending] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setStatusMessage("Sending message...");

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        setStatusMessage("✅ Message sent successfully.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatusMessage("❌ Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatusMessage("⚠️ Error occurred while sending message.");
    } finally {
      setSending(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "yarramsettisai3@gmail.com",
      href: "mailto:yarramsettisai3@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8328242849",
      href: "tel:+918328242849"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/venkatyarramsetti",
      href: "https://linkedin.com/in/venkatyarramsetti"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Venkatyarramsetti",
      href: "https://github.com/Venkatyarramsetti"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-700/30 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-400 mb-6">
            <Mail size={20} className="text-blue-200" />
            <span className="text-blue-100 font-medium">Get In Touch</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Contact Information</h3>
              <p className="text-blue-100 mb-8 leading-relaxed">
                Feel free to reach out to me through any of the following channels. I'm always excited to 
                connect with fellow developers, potential employers, or anyone interested in technology.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 p-4 bg-blue-800/20 backdrop-blur-sm rounded-xl border border-blue-400 hover:bg-blue-700/30 transition-all transform hover:scale-105 group"
                >
                  <div className="p-3 bg-blue-600/40 rounded-lg border border-blue-400 group-hover:bg-blue-500/50 transition-colors">
                    <contact.icon size={24} className="text-blue-200" />
                  </div>
                  <div>
                    <p className="text-blue-200 font-semibold">{contact.label}</p>
                    <p className="text-blue-100">{contact.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-800/30 to-indigo-800/30 backdrop-blur-sm p-6 rounded-2xl border border-blue-400">
              <h4 className="text-xl font-bold text-white mb-4">Quick Stats</h4>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-200">24/7</div>
                  <div className="text-blue-100 text-sm">Response Time</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-200">100%</div>
                  <div className="text-blue-100 text-sm">Commitment</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-blue-800/20 backdrop-blur-sm p-8 rounded-2xl border border-blue-400">
            <h3 className="text-3xl font-bold text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-blue-200 font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-blue-900/50 border border-blue-400 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-blue-200 font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-blue-900/50 border border-blue-400 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    placeholder="your@gamil.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-blue-200 font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-blue-900/50 border border-blue-400 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-blue-200 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-blue-900/50 border border-blue-400 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400"
                disabled={sending}
              >
                {sending ? "Sending..." : "Send Message"}
              </button>

              {statusMessage && (
                <p className="text-blue-200 text-center mt-4">{statusMessage}</p>
              )}
            </form>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-blue-400/30 text-center">
          <p className="text-blue-100 mb-4">
            © 2024 Satya Sai Venkat Yarramsetti. All rights reserved.
          </p>
          <p className="text-blue-200 text-sm">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
