'use client'

import { useEffect, useState } from 'react'
import { Sparkles, Code2 } from 'lucide-react'
import TypeWriter from './TypeWriter'
import { NoiseBackground } from '@/components/ui/noise-background'
import { TextHoverEffect } from '@/components/ui/text-hover-effect'

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const roles = [
    'Frontend Developer',
    'UI/UX Designer',
    'React Specialist',
    'Next.js Expert',
    'Creative Coder',
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">

      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        {/* Status Badge */}
        <div 
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyber-dark/80 border border-cyber-green/30 mb-8 transition-all duration-1000 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
        >

        </div>

        {/* Terminal-style greeting */}
        <div 
          className={`max-w-2xl mx-auto mb-8 text-left transition-all duration-1000 delay-200 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <NoiseBackground
            gradientColors={[
              "rgb(168, 85, 247)", // cyber-purple
              "rgb(236, 72, 153)", // cyber-pink
              "rgb(34, 211, 238)", // cyber-cyan
            ]}
            noiseIntensity={0.15}
            speed={0.08}
            className="p-6"
            containerClassName="bg-cyber-dark/90 border border-cyber-purple/30"
          >
            <div className="space-y-2 text-sm">
              <p><span className="text-cyber-purple">const</span> <span className="text-cyber-cyan">developer</span> = {'{'}</p>
              <p className="pl-4"><span className="text-cyber-pink">name</span>: <span className="text-cyber-green">&quot;Clifford Manase&quot;</span>,</p>
              <p className="pl-4"><span className="text-cyber-pink">location</span>: <span className="text-cyber-green">&quot;Nairobi, Kenya&quot;</span>,</p>
              <p className="pl-4"><span className="text-cyber-pink">experience</span>: <span className="text-cyber-orange">4</span> + <span className="text-cyber-green">&quot; years&quot;</span>,</p>
              <p className="pl-4"><span className="text-cyber-pink">passion</span>: <span className="text-cyber-green">&quot;Building the future&quot;</span></p>
              <p>{'}'}</p>
            </div>
          </NoiseBackground>
        </div>

        {/* Main Heading with Text Hover Effect */}
{/* Main Heading with Text Hover Effect */}
<div 
  className={`w-full max-w-7xl mx-auto mb-8 transition-all duration-1000 delay-300 ${
    mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
  }`}
>
  <div className="h-[15rem] md:h-[20rem] lg:h-[25rem] flex items-center justify-center w-full">
    <TextHoverEffect text="CLIFFORD MANASE" strokeWidth={0.6} />
  </div>
</div>

        {/* Dynamic Role with Typing Effect */}
        <div 
          className={`h-12 md:h-16 flex items-center justify-center mb-8 transition-all duration-1000 delay-500 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="text-xl md:text-3xl text-gray-400">
            {'< '}
            <TypeWriter 
              texts={roles} 
              speed={80} 
              deleteSpeed={40} 
              pauseTime={2500}
              className="text-cyber-cyan font-semibold"
            />
            {' />'}
          </span>
        </div>

        {/* Description */}
        <p 
          className={`text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed transition-all duration-1000 delay-700 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Crafting{' '}
          <span className="text-cyber-purple">immersive digital experiences</span>{' '}
          with cutting-edge technologies. Specializing in{' '}
          <span className="text-cyber-cyan">React</span>,{' '}
          <span className="text-cyber-pink">Next.js</span>, and{' '}
          <span className="text-cyber-green">modern web architecture</span>.
        </p>

        {/* CTA Buttons */}
        <div 
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 transition-all duration-1000 delay-900 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <a 
            href="#projects"
            className="cyber-btn flex items-center gap-2 group hover:scale-105"
          >
            <Code2 className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            View My Work
          </a>
          <a 
            href="#contact"
            className="px-8 py-3 border border-cyber-cyan/50 rounded-lg text-cyber-cyan font-semibold hover:bg-cyber-cyan/10 hover:border-cyber-cyan hover:scale-105 transition-all duration-300 flex items-center gap-2 group hover:shadow-lg hover:shadow-cyber-cyan/20"
          >
            <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            Let&apos;s Connect
          </a>
        </div>

        {/* Stats */}
        <div 
          className={`grid grid-cols-3 gap-8 max-w-lg mx-auto transition-all duration-1000 delay-1000 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {[
            { value: '4+', label: 'Years Exp' },
            { value: '15+', label: 'Projects' },
            { value: '7+', label: 'Technologies' },
          ].map((stat, index) => (
            <div 
              key={index} 
              className="text-center group hover:scale-110 transition-transform duration-300"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-1 group-hover:scale-110 transition-transform">
                {stat.value}
              </div>
              <div className="text-gray-500 text-sm group-hover:text-gray-400 transition-colors">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
