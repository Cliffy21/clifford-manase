'use client'

import { Heart, Github, Linkedin, Twitter, Mail, MapPin, Code2, Palette } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    navigation: [
      { label: 'Home', href: '#home' },
      { label: 'About', href: '#about' },
      { label: 'Skills', href: '#skills' },
      { label: 'Projects', href: '#projects' },
      { label: 'Contact', href: '#contact' },
    ],
    resources: [
      { label: 'GitHub', href: 'https://github.com/Cliffy21', icon: Github },
      { label: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
      { label: 'Twitter', href: 'https://twitter.com', icon: Twitter },
    ],
  }

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'cliffordmanase@gmail.com', href: 'mailto:cliffordmanase@gmail.com' },
    { icon: MapPin, label: 'Location', value: 'Nairobi, Kenya', href: '#' },
  ]

  return (
    <footer className="relative bg-[#050505] border-t border-white/10 overflow-hidden">

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-2 group mb-6 inline-block">
              <span className="text-2xl font-bold font-mono tracking-tight">
                <span className="text-cyber-purple group-hover:text-cyber-cyan transition-colors duration-300">dev</span>
                <span className="text-cyber-cyan">_</span>
                <span className="text-white group-hover:text-gradient transition-all duration-300">manase</span>
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-cyber-cyan animate-pulse group-hover:bg-cyber-pink transition-colors duration-300" />
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Frontend Developer & UI/UX Designer crafting immersive digital experiences with cutting-edge technologies.
            </p>
            
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
              <Code2 className="w-5 h-5 text-cyber-cyan" />
              Navigation
            </h3>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-cyber-cyan transition-all duration-300 hover:translate-x-1 inline-flex items-center gap-2 group"
                  >
                    <span className="text-cyber-purple opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    {link.label}
              </a>
                </li>
            ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
              <Mail className="w-5 h-5 text-cyber-pink" />
              Contact
            </h3>
            <ul className="space-y-4">
              {contactInfo.map((info) => (
                <li key={info.label}>
                  <a 
                    href={info.href}
                    className="group flex items-start gap-3 text-gray-400 hover:text-white transition-colors"
                  >
                    <info.icon className="w-5 h-5 text-cyber-purple group-hover:text-cyber-cyan transition-colors mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-xs text-gray-500 mb-1">{info.label}</div>
                      <div className="text-sm">{info.value}</div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Follow Column */}
          <div>
            <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
              <Palette className="w-5 h-5 text-cyber-cyan" />
              Follow Me
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Connect with me on social media
            </p>
            <div className="flex flex-wrap gap-3">
              {footerLinks.resources.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
              target="_blank" 
              rel="noopener noreferrer"
                  className="group flex items-center justify-center w-12 h-12 rounded-xl bg-cyber-dark/50 border border-cyber-purple/20 text-gray-400 hover:text-white hover:border-cyber-purple hover:bg-cyber-purple/10 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyber-purple/20"
                  aria-label={social.label}
            >
                  <social.icon className="w-5 h-5" />
            </a>
              ))}
            <a 
              href="mailto:cliffordmanase@gmail.com"
                className="group flex items-center justify-center w-12 h-12 rounded-xl bg-cyber-dark/50 border border-cyber-purple/20 text-gray-400 hover:text-cyber-pink hover:border-cyber-pink hover:bg-cyber-pink/10 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyber-pink/20"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-cyber-purple/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-600 text-sm">
              © {currentYear} Clifford Manase. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <span>Available for hire</span>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber-green"></span>
              </span>
            </div>
          </div>
        </div>
      </div>

    </footer>
  )
}
