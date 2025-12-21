'use client'

import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import { Code, Palette, Database, Globe, Wrench, Cpu } from 'lucide-react'

interface Skill {
  name: string
  level: number
  color: string
}

interface SkillCategory {
  title: string
  icon: React.ElementType
  skills: Skill[]
}

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const skillCategories: SkillCategory[] = [
    {
      title: 'Frontend',
      icon: Code,
      skills: [
        { name: 'React.js', level: 95, color: 'from-cyan-400 to-blue-500' },
        { name: 'Next.js', level: 92, color: 'from-gray-400 to-gray-600' },
        { name: 'TypeScript', level: 88, color: 'from-blue-400 to-blue-600' },
        { name: 'JavaScript', level: 95, color: 'from-yellow-400 to-orange-500' },
      ]
    },
    {
      title: 'Frameworks',
      icon: Globe,
      skills: [
        { name: 'Vue.js / Nuxt.js', level: 80, color: 'from-green-400 to-emerald-600' },
        { name: 'Flutter', level: 75, color: 'from-blue-400 to-cyan-500' },
        { name: 'TailwindCSS', level: 92, color: 'from-cyan-400 to-teal-500' },
        { name: 'Framer Motion', level: 85, color: 'from-purple-400 to-pink-500' },
      ]
    },
    {
      title: 'Backend & Tools',
      icon: Database,
      skills: [
        { name: 'Python', level: 82, color: 'from-blue-400 to-yellow-500' },
        { name: 'Node.js', level: 78, color: 'from-green-400 to-green-600' },
        { name: 'Git & GitHub', level: 90, color: 'from-orange-400 to-red-500' },
        { name: 'REST APIs', level: 88, color: 'from-purple-400 to-indigo-500' },
      ]
    },
    {
      title: 'Design',
      icon: Palette,
      skills: [
        { name: 'Canva', level: 90, color: 'from-purple-400 to-blue-500' },
        { name: 'UI/UX Design', level: 85, color: 'from-pink-400 to-rose-500' },
        { name: 'Figma', level: 75, color: 'from-orange-400 to-pink-500' },
        { name: 'Responsive Design', level: 95, color: 'from-green-400 to-cyan-500' },
      ]
    },
  ]

  // Function to get icon path for tech stack items
  const getTechIcon = (name: string): { type: 'image' | 'emoji', src?: string, emoji?: string } => {
    const iconMap: Record<string, string> = {
      'React': '/React.png', // If you add this later
      'Next.js': '/Next.js.png',
      'TypeScript': '/typescript.png',
      'JavaScript': '/JavaScript.png',
      'Python': '/python.png',
      'Flutter': '/Flutter.png',
      'Vue.js': '/Vue.js.png',
      'Nuxt.js': '/Nuxt JS.png', // Using Vue icon for Nuxt
      'TailwindCSS': '/Tailwind CSS.png', // Using CSS icon for Tailwind
      'Node.js': '/Node.js.png', // If you add this later
      'Git': '/GitHub.png', // If you add this later
      'Canva': '/canva.png', // If you add this later
    }
    
    const iconPath = iconMap[name]
    if (iconPath) {
      return { type: 'image', src: iconPath }
    }
    
    // Fallback emojis for icons not yet added
    const emojiMap: Record<string, string> = {
      'React': '⚛️',
      'Nuxt.js': '💎',
      'Node.js': '🟢',
      'Git': '📂',
      'Canva': '🎭',
    }
    
    return { type: 'emoji', emoji: emojiMap[name] || '💻' }
  }

  const techStack = [
    { name: 'React' },
    { name: 'Next.js' },
    { name: 'TypeScript' },
    { name: 'JavaScript' },
    { name: 'Python' },
    { name: 'Flutter' },
    { name: 'Vue.js' },
    { name: 'Nuxt.js' },
    { name: 'TailwindCSS' },
    { name: 'Node.js' },
    { name: 'Git' },
    { name: 'Canva' },
  ]

  return (
    <section id="skills" ref={sectionRef} className="relative py-32 overflow-hidden">

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div 
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="text-cyber-cyan text-sm font-medium tracking-widest uppercase">
            // Technical Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            <span className="text-white">Skills &</span>{' '}
            <span className="text-gradient">Technologies</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-cyan to-cyber-purple mx-auto rounded-full" />
        </div>

        {/* Tech Stack Marquee */}
        <div 
          className={`mb-16 overflow-hidden transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="flex animate-marquee gap-8">
            {[...techStack, ...techStack].map((tech, index) => {
              const iconInfo = getTechIcon(tech.name)
              return (
              <div 
                  key={`${tech.name}-${index}`}
                className="flex items-center gap-2 px-6 py-3 bg-cyber-dark/50 border border-cyber-purple/20 rounded-full whitespace-nowrap hover:border-cyber-cyan/50 transition-colors"
              >
                  {iconInfo.type === 'image' ? (
                    <Image 
                      src={iconInfo.src!} 
                      alt={tech.name}
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  ) : (
                    <span className="text-xl">{iconInfo.emoji}</span>
                  )}
                <span className="text-gray-300">{tech.name}</span>
              </div>
              )
            })}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <div 
              key={category.title}
              className={`neon-border p-6 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${catIndex * 150}ms` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-cyber-purple/20">
                  <category.icon className="w-5 h-5 text-cyber-purple" />
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>

              {/* Skills */}
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 text-sm group-hover:text-white transition-colors">{skill.name}</span>
                      <span className="text-cyber-cyan text-sm font-medium group-hover:scale-110 transition-transform inline-block">{skill.level}%</span>
                    </div>
                    <div className="h-2.5 bg-cyber-dark/50 rounded-full overflow-hidden relative">
                      <div 
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${(catIndex * 150) + (skillIndex * 100)}ms`
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div 
          className={`mt-12 text-center transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-gray-500 mb-4">// Also experienced with</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Web3', 'Smart Contracts', 'Blockchain', 'REST APIs', 'GraphQL', 'Responsive Design', 'SEO', 'Performance Optimization'].map((skill, index) => (
              <span 
                key={skill}
                className="px-4 py-2 text-sm rounded-lg bg-cyber-dark/50 border border-cyber-pink/20 text-cyber-pink hover:bg-cyber-pink/10 hover:border-cyber-pink/40 hover:scale-110 transition-all duration-300 cursor-default inline-block hover:shadow-lg hover:shadow-cyber-pink/20"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
