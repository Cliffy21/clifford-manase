'use client'

import ParticlesBackground from '@/components/ParticlesBackground'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Footer from '@/components/Footer'
import ContactUs from '@/components/blocks/contact-us/contact-us'
import { Clock8Icon, MapPinIcon, MailIcon, PhoneIcon } from 'lucide-react'

const contactInfo = [
  {
    title: 'Office Hours',
    icon: Clock8Icon,
    description: 'Monday-Friday\n8:00 am to 5:00 pm'
  },
  {
    title: 'Our Location',
    icon: MapPinIcon,
    description: 'Nairobi, Kenya\nEast Africa'
  },
  {
    title: 'Email',
    icon: MailIcon,
    description: 'cliffordmanase8@gmail.com\nwork@clifford.dev'
  },
  {
    title: 'Get in Touch',
    icon: PhoneIcon,
    description: '+254 723 937 043'
  }
]

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0a0a0a] text-white overflow-hidden">
      {/* Animated Particles Background */}
      <ParticlesBackground />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <ContactUs contactInfo={contactInfo} />
        <Footer />
      </div>
    </main>
  )
}
