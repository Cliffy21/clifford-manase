'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'
import { ModeToggle } from './ModeToggle'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Determine active section
      const sections = navItems.map(item => item.href.slice(1))
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    setIsOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-[#0a0a0a]/95 border-b border-white/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a 
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }}
            className="flex items-center gap-2 group"
          >
            <span className="text-2xl font-bold font-mono tracking-tight">
              <span className="text-cyber-purple group-hover:text-cyber-cyan transition-colors duration-300">dev</span>
              <span className="text-cyber-cyan">_</span>
              <span className="text-white group-hover:text-gradient transition-all duration-300">manase</span>
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-cyber-cyan animate-pulse group-hover:bg-cyber-pink transition-colors duration-300" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 group ${
                  activeSection === item.href.slice(1) 
                    ? 'text-cyber-cyan' 
                    : 'text-gray-400 hover:text-white'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="relative z-10 transform group-hover:scale-105 transition-transform inline-block">{`{ ${item.label} }`}</span>
                {activeSection === item.href.slice(1) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-cyber-cyan rounded-full" />
                )}
                <span className="absolute inset-0 rounded-lg bg-cyber-purple/0 group-hover:bg-cyber-purple/10 transition-all duration-300 group-hover:scale-110" />
              </a>
            ))}
          </div>

          {/* Social Links - Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <a 
              href="https://github.com/Cliffy21" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg text-gray-400 hover:text-cyber-cyan hover:bg-cyber-cyan/10 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyber-cyan/30 group"
            >
              <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg text-gray-400 hover:text-cyber-purple hover:bg-cyber-purple/10 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyber-purple/30 group"
            >
              <Linkedin className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </a>
            <a 
              href="mailto:cliffordmanase@gmail.com"
              className="p-2.5 rounded-lg text-gray-400 hover:text-cyber-pink hover:bg-cyber-pink/10 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyber-pink/30 group"
            >
              <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </a>
            <ModeToggle />
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-cyber-cyan transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-[#0a0a0a]/95 border-t border-white/10 px-4 py-6 space-y-4">
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
              className={`block py-2 text-center text-lg transition-all duration-300 ${
                activeSection === item.href.slice(1)
                  ? 'text-cyber-cyan glow-text-cyan'
                  : 'text-gray-400 hover:text-white'
              }`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {`// ${item.label}`}
            </a>
          ))}
          <div className="flex justify-center gap-6 pt-4 border-t border-cyber-purple/20">
            <a href="https://github.com/Cliffy21" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyber-cyan">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyber-purple">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:cliffordmanase@gmail.com" className="text-gray-400 hover:text-cyber-pink">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
