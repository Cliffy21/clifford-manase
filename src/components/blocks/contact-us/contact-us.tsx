'use client'

import type { ComponentType } from 'react'
import { motion } from 'framer-motion'
import { Send, ArrowUpRight } from 'lucide-react'
import { useState } from 'react'

import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'

type ContactInfo = {
  title: string
  icon: ComponentType
  description: string
}[]

const ContactUs = ({ contactInfo }: { contactInfo: ContactInfo }) => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setSubmitted(true)
    setFormState({ name: '', email: '', message: '' })
    
    setTimeout(() => setSubmitted(false), 5000)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
  }

  return (
    <section id="contact" className='relative min-h-screen bg-[#0a0a0f] py-16 sm:py-24 lg:py-32 overflow-hidden'>
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(168, 85, 247, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(168, 85, 247, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px]" />

      <motion.div 
        className='relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Header */}
        <motion.div 
          className='relative mx-auto mb-16 text-center sm:mb-20 lg:mb-24'
          variants={itemVariants}
        >
          <motion.span 
            className='inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/5 mb-6'
            whileHover={{ scale: 1.05, borderColor: 'rgba(168, 85, 247, 0.5)' }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
            </span>
            <span className="text-gray-400 text-sm font-medium tracking-wide">Available for projects</span>
          </motion.span>
          
          <h2 className='text-4xl font-bold text-white md:text-5xl lg:text-6xl tracking-tight'>
            Get In{' '}
            <span className='relative'>
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400'>
                Touch
              </span>
              <motion.span 
                className="absolute -bottom-2 left-0 right-0 h-[3px] bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              />
            </span>
          </h2>
          
          <p className='mt-6 text-gray-400 text-lg max-w-2xl mx-auto'>
            Have a project in mind or want to collaborate? I&apos;d love to hear from you. 
            Let&apos;s create something amazing together.
          </p>
        </motion.div>

        <div className='grid items-start gap-12 lg:grid-cols-2 lg:gap-16'>
          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <Card className='border-white/10 bg-gradient-to-b from-white/[0.07] to-transparent backdrop-blur-sm overflow-hidden'>
              <CardContent className='p-8'>
                {/* Terminal Header */}
                <div className="flex items-center gap-3 mb-8 pb-6 border-b border-white/10">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-gray-500 text-sm font-mono">~/contact-form</span>
                </div>

                {submitted ? (
                  <motion.div 
                    className="text-center py-12"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center border border-green-500/30">
                      <svg className="w-10 h-10 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-gray-400">Thanks for reaching out. I&apos;ll get back to you soon.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className='space-y-6'>
                    <div className='grid gap-6 sm:grid-cols-2'>
                      <div className='space-y-2'>
                        <Label htmlFor='name' className='text-gray-300'>Name</Label>
                        <Input 
                          id='name' 
                          placeholder='John Doe' 
                          required
                          value={formState.name}
                          onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
                          className='bg-white/[0.03] border-white/10 text-white placeholder:text-gray-600 focus:border-purple-500 focus:ring-purple-500/20 h-12'
                        />
                      </div>
                      <div className='space-y-2'>
                        <Label htmlFor='email' className='text-gray-300'>Email</Label>
                        <Input 
                          id='email' 
                          type='email' 
                          placeholder='john@example.com' 
                          required
                          value={formState.email}
                          onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
                          className='bg-white/[0.03] border-white/10 text-white placeholder:text-gray-600 focus:border-purple-500 focus:ring-purple-500/20 h-12'
                        />
                      </div>
                    </div>
                    
                    <div className='space-y-2'>
                      <Label htmlFor='message' className='text-gray-300'>Message</Label>
                      <Textarea 
                        id='message' 
                        placeholder='Tell me about your project...' 
                        rows={6}
                        required
                        value={formState.message}
                        onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
                        className='bg-white/[0.03] border-white/10 text-white placeholder:text-gray-600 focus:border-purple-500 focus:ring-purple-500/20 resize-none'
                      />
                    </div>

                    <Button 
                      type='submit' 
                      disabled={isSubmitting}
                      className='w-full h-12 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 hover:opacity-90 text-white font-semibold transition-all duration-300 disabled:opacity-50'
                    >
                      {isSubmitting ? (
                        <span className='flex items-center gap-2'>
                          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className='flex items-center gap-2'>
                          Send Message
                          <Send className='w-4 h-4' />
                        </span>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div className='space-y-6' variants={itemVariants}>
            <div className='grid gap-4 sm:grid-cols-2'>
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className='border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent hover:border-white/20 transition-all duration-300 group h-full'>
                    <CardContent className='flex flex-col items-center gap-4 text-center p-6'>
                      <Avatar className='size-12 border border-purple-500/30 bg-purple-500/10 group-hover:border-purple-500/50 group-hover:bg-purple-500/20 transition-all duration-300'>
                        <AvatarFallback className='bg-transparent text-purple-400 [&>svg]:size-5'>
                          <info.icon />
                        </AvatarFallback>
                      </Avatar>
                      <div className='space-y-2'>
                        <h4 className='text-lg font-semibold text-white group-hover:text-purple-300 transition-colors'>{info.title}</h4>
                        <div className='text-gray-400 text-sm'>
                          {info.description.split('\n').map((line, idx) => (
                            <p key={idx}>{line}</p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Quick Connect Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Card className='border-white/10 bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-cyan-500/10 overflow-hidden'>
                <CardContent className='p-6'>
                  <div className='flex items-center gap-4 mb-4'>
                    <div className='relative'>
                      <div className='w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold'>
                        CM
                      </div>
                      <span className='absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-400 rounded-full border-2 border-[#0a0a0f]' />
                    </div>
                    <div>
                      <h4 className='text-white font-semibold'>Clifford Manase</h4>
                      <p className='text-gray-500 text-sm'>Usually responds within 24hrs</p>
                    </div>
                  </div>
                  <p className='text-gray-400 text-sm mb-4'>
                    Open for freelance projects, full-time opportunities, and exciting collaborations. Let&apos;s build something amazing!
                  </p>
                  <div className='flex gap-3'>
                    <a 
                      href='https://github.com/Cliffy21' 
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-white/[0.05] border border-white/10 text-gray-400 hover:text-white hover:border-white/20 transition-all text-sm font-medium group'
                    >
                      GitHub
                      <ArrowUpRight className='w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform' />
                    </a>
                    <a 
                      href='https://linkedin.com' 
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-white/[0.05] border border-white/10 text-gray-400 hover:text-white hover:border-white/20 transition-all text-sm font-medium group'
                    >
                      LinkedIn
                      <ArrowUpRight className='w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform' />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default ContactUs