'use client'

import { useEffect, useState, useRef } from 'react'
import { ExternalLink, Github, Folder, Star, GitBranch, Code2 } from 'lucide-react'
import { NoiseBackground } from '@/components/ui/noise-background'

interface Project {
  title: string
  description: string
  image?: string
  tags: string[]
  github: string
  live?: string
  featured: boolean
  stats?: {
    stars?: number
    forks?: number
  }
}

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const projects: Project[] = [
    {
      title: 'PLANCAVE',
      description: 'Professional construction plans marketplace platform connecting designers with customers. Features JWT authentication, role-based access control, comprehensive plan upload system, and admin dashboard with analytics.',
      tags: ['React 19', 'TypeScript', 'Flask', 'PostgreSQL', 'TailwindCSS', 'JWT Auth'],
      github: 'https://github.com/PLANCAVE/PLANCAVE',
      featured: true,
      stats: { stars: 0, forks: 0 }
    },
    {
      title: 'Think-Create',
      description: 'A creative TypeScript project showcasing modern development practices and clean architecture patterns for web applications.',
      tags: ['TypeScript', 'React', 'Modern Architecture'],
      github: 'https://github.com/Cliffy21/Think-Create',
      featured: true,
    },
    {
      title: 'JN Parts',
      description: 'E-commerce platform for automotive parts with inventory management, search functionality, and user-friendly interface.',
      tags: ['Next.js', 'E-commerce', 'Full Stack'],
      github: 'https://github.com/Cliffy21/jn-parts',
      featured: true,
    },
    {
      title: 'Foundry FundMe',
      description: 'Smart contract project built with Foundry framework for blockchain-based crowdfunding, demonstrating Web3 development skills.',
      tags: ['Solidity', 'Foundry', 'Web3', 'Smart Contracts'],
      github: 'https://github.com/Cliffy21/Foundry-FundMe-Project',
      featured: false,
      stats: { stars: 2 }
    },
    {
      title: 'Archimart',
      description: 'JavaScript-based architecture marketplace platform with modern UI components and seamless user experience.',
      tags: ['JavaScript', 'Frontend', 'UI/UX'],
      github: 'https://github.com/Cliffy21/Archimart',
      featured: false,
    },
    {
      title: 'Daily Report',
      description: 'Python automation tool for generating and managing daily reports with data visualization capabilities.',
      tags: ['Python', 'Automation', 'Data Processing'],
      github: 'https://github.com/Cliffy21/Daily-report',
      featured: false,
    },
  ]

  const featuredProjects = projects.filter(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <section id="projects" ref={sectionRef} className="relative py-32 overflow-hidden">

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div 
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="text-cyber-pink text-sm font-medium tracking-widest uppercase">
            // Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            <span className="text-white">Featured</span>{' '}
            <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-pink to-cyber-purple mx-auto rounded-full" />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            A showcase of my recent work, featuring full-stack applications, 
            Web3 projects, and creative solutions.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div 
              key={project.title}
              className={`group relative transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <NoiseBackground
                gradientColors={[
                  "rgb(168, 85, 247)", // cyber-purple
                  "rgb(236, 72, 153)", // cyber-pink
                  "rgb(34, 211, 238)", // cyber-cyan
                ]}
                noiseIntensity={0.1}
                speed={0.06}
                containerClassName="bg-cyber-dark/80 border border-cyber-purple/20"
                className="p-8 md:p-10"
              >
              <div className="relative overflow-hidden project-card">
                {/* Scanner Effect */}
                <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="scanner-line" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <div className="flex-1">
                      {/* Project Icon & Title */}
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 rounded-xl bg-cyber-purple/20 border border-cyber-purple/30">
                          <Folder className="w-6 h-6 text-cyber-purple" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white group-hover:text-gradient transition-all">
                            {project.title}
                          </h3>
                          {project.stats && (
                            <div className="flex items-center gap-4 mt-1 text-sm text-gray-500">
                              {project.stats.stars !== undefined && (
                                <span className="flex items-center gap-1">
                                  <Star className="w-4 h-4" />
                                  {project.stats.stars}
                                </span>
                              )}
                              {project.stats.forks !== undefined && (
                                <span className="flex items-center gap-1">
                                  <GitBranch className="w-4 h-4" />
                                  {project.stats.forks}
                                </span>
                              )}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-400 leading-relaxed mb-6 max-w-2xl">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                          <span 
                            key={tag}
                            className="px-3 py-1 text-xs rounded-full bg-cyber-dark/50 border border-cyber-cyan/30 text-cyber-cyan"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex md:flex-col gap-3">
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cyber-dark/50 border border-cyber-purple/30 text-gray-300 hover:text-white hover:border-cyber-purple hover:bg-cyber-purple/10 hover:scale-105 transition-all duration-300 group/btn"
                      >
                        <Github className="w-5 h-5 group-hover/btn:rotate-12 transition-transform" />
                        <span>Code</span>
                      </a>
                      {project.live && (
                        <a 
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-cyber-purple to-cyber-pink text-white hover:shadow-lg hover:shadow-cyber-purple/30 hover:scale-105 transition-all duration-300 group/btn"
                        >
                          <ExternalLink className="w-5 h-5 group-hover/btn:rotate-12 transition-transform" />
                          <span>Live</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Corner Decorations */}
                <div className="absolute top-4 right-4 w-20 h-20 border-t-2 border-r-2 border-cyber-purple/20 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-4 left-4 w-20 h-20 border-b-2 border-l-2 border-cyber-cyan/20 rounded-bl-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              </NoiseBackground>
            </div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div 
          className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h3 className="text-xl font-semibold text-white mb-8 flex items-center gap-3">
            <Code2 className="w-5 h-5 text-cyber-cyan" />
            Other Notable Projects
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <a 
                key={project.title}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group neon-border p-6 hover:scale-105 hover:shadow-xl hover:shadow-cyber-purple/20 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <Folder className="w-8 h-8 text-cyber-purple group-hover:text-cyber-cyan transition-colors" />
                  <div className="flex items-center gap-3">
                    <Github className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
                    {project.stats?.stars && project.stats.stars > 0 && (
                      <span className="flex items-center gap-1 text-sm text-gray-500">
                        <Star className="w-4 h-4" />
                        {project.stats.stars}
                      </span>
                    )}
                  </div>
                </div>
                
                <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-gradient transition-all">
                  {project.title}
                </h4>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span 
                      key={tag}
                      className="text-xs text-gray-500"
                    >
                      #{tag.toLowerCase().replace(/\s+/g, '')}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* GitHub CTA */}
        <div 
          className={`mt-16 text-center transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <a 
            href="https://github.com/Cliffy21"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl border border-cyber-purple/30 text-gray-300 hover:text-white hover:border-cyber-purple hover:bg-cyber-purple/10 transition-all"
          >
            <Github className="w-5 h-5" />
            <span>View More on GitHub</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

    </section>
  )
}
