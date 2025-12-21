'use client'

import { useEffect, useState, useRef } from 'react'
import { User, MapPin, Briefcase, GraduationCap, Heart, Rocket } from 'lucide-react'
import { NoiseBackground } from '@/components/ui/noise-background'

export default function About() {
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

  const highlights = [
    { icon: Briefcase, label: 'Experience', value: '4+ Years' },
    { icon: MapPin, label: 'Location', value: 'Nairobi, Kenya' },
    { icon: GraduationCap, label: 'Focus', value: 'Frontend & UI/UX' },
    { icon: Heart, label: 'Passion', value: 'Clean Code' },
  ]

  const interests = [
    'Web3 & Blockchain',
    'Smart Contracts',
    'Cyber Security',
    'UI Animation',
    'System Design',
    'Open Source',
  ]

  return (
    <section id="about" ref={sectionRef} className="relative py-32 overflow-hidden">

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div 
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="text-cyber-purple text-sm font-medium tracking-widest uppercase">
            // Introduction
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            <span className="text-white">About</span>{' '}
            <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-purple to-cyber-cyan mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Terminal Style Bio */}
          <div 
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <NoiseBackground
              gradientColors={[
                "rgb(168, 85, 247)", // cyber-purple
                "rgb(236, 72, 153)", // cyber-pink
                "rgb(34, 211, 238)", // cyber-cyan
              ]}
              noiseIntensity={0.12}
              speed={0.07}
              containerClassName="bg-cyber-dark/90 border border-cyber-purple/30"
              className="p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-gray-500 text-sm ml-2">about_clifford.md</span>
              </div>

              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p className="flex items-start gap-2">
                  <span className="text-cyber-cyan mt-1">→</span>
                  <span>
                    Hey there! I&apos;m <span className="text-cyber-purple font-semibold">Clifford Manase</span>, 
                    a passionate Frontend Developer based in Nairobi, Kenya with over 
                    <span className="text-cyber-cyan font-semibold"> 4 years</span> of experience 
                    crafting digital experiences.
                  </span>
                </p>

                <p className="flex items-start gap-2">
                  <span className="text-cyber-cyan mt-1">→</span>
                  <span>
                    I specialize in building <span className="text-cyber-pink">modern web applications</span> using 
                    React, Next.js, TypeScript, and other cutting-edge technologies. My journey also 
                    extends into <span className="text-cyber-green">Web3</span>, smart contracts, and blockchain development.
                  </span>
                </p>

                <p className="flex items-start gap-2">
                  <span className="text-cyber-cyan mt-1">→</span>
                  <span>
                    Beyond coding, I&apos;m skilled in <span className="text-cyber-orange">graphics design</span> using 
                    Canva, allowing me to bridge the gap between design and development seamlessly.
                  </span>
                </p>

                <p className="flex items-start gap-2">
                  <span className="text-cyber-cyan mt-1">→</span>
                  <span>
                    I believe in writing <span className="text-cyber-purple">clean, maintainable code</span> and 
                    creating intuitive user interfaces that make technology accessible to everyone.
                  </span>
                </p>
              </div>

              {/* Interests Tags */}
              <div className="mt-8 pt-6 border-t border-cyber-purple/20">
                <p className="text-gray-500 text-sm mb-4">// Interests & Explorations</p>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 text-xs rounded-full bg-cyber-purple/10 border border-cyber-purple/30 text-cyber-purple hover:bg-cyber-purple/20 hover:scale-110 hover:border-cyber-cyan/50 transition-all duration-300 cursor-default inline-block"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </NoiseBackground>
          </div>

          {/* Right Column - Stats & Highlights */}
          <div 
            className={`transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            {/* Highlight Cards */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {highlights.map((item, index) => (
                <div 
                  key={index}
                  className="holo-card p-6 rounded-xl group hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-cyber-purple/20"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <item.icon className="w-8 h-8 text-cyber-purple mb-3 group-hover:text-cyber-cyan transition-colors" />
                  </div>
                  <p className="text-gray-500 text-sm group-hover:text-gray-400 transition-colors">{item.label}</p>
                  <p className="text-white font-semibold text-lg group-hover:text-gradient transition-all">{item.value}</p>
                </div>
              ))}
            </div>

            {/* Code Block Style Info */}
            <div className="bg-cyber-darker/50 rounded-xl p-6 border border-cyber-purple/20">
              <pre className="text-sm overflow-x-auto">
                <code>
                  <span className="text-gray-500">{'// What I bring to the table'}</span>
                  {'\n\n'}
                  <span className="text-cyber-purple">const</span>{' '}
                  <span className="text-cyber-cyan">strengths</span> = [{'\n'}
                  {'  '}<span className="text-cyber-green">&quot;Problem Solving&quot;</span>,{'\n'}
                  {'  '}<span className="text-cyber-green">&quot;Attention to Detail&quot;</span>,{'\n'}
                  {'  '}<span className="text-cyber-green">&quot;Team Collaboration&quot;</span>,{'\n'}
                  {'  '}<span className="text-cyber-green">&quot;Continuous Learning&quot;</span>,{'\n'}
                  {'  '}<span className="text-cyber-green">&quot;Creative Thinking&quot;</span>{'\n'}
                  ];
                </code>
              </pre>
            </div>

            {/* CTA */}
            <div className="mt-8 flex gap-4">
              <a 
                href="#contact"
                className="cyber-btn flex items-center gap-2 flex-1 justify-center"
              >
                <Rocket className="w-5 h-5" />
                Let&apos;s Work Together
              </a>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
