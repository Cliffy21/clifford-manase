'use client'

import { useEffect, useState } from 'react'
import { X, Gift, Sparkles } from 'lucide-react'

const POPUP_INTERVAL = 30 * 60 * 1000 // 30 minutes in milliseconds
const STORAGE_KEY = 'commercial_popup_last_shown'

export default function CommercialPopup() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const checkAndShowPopup = () => {
      const lastShown = localStorage.getItem(STORAGE_KEY)
      const now = Date.now()

      if (!lastShown) {
        // First time visitor, show immediately
        setIsOpen(true)
        localStorage.setItem(STORAGE_KEY, now.toString())
        return
      }

      const timeSinceLastShown = now - parseInt(lastShown)
      
      // Show popup if 30 minutes have passed
      if (timeSinceLastShown >= POPUP_INTERVAL) {
        setIsOpen(true)
        localStorage.setItem(STORAGE_KEY, now.toString())
      }
    }

    // Check on mount
    checkAndShowPopup()

    // Check every minute to see if it's time to show
    const interval = setInterval(checkAndShowPopup, 60 * 1000)

    return () => clearInterval(interval)
  }, [])

  const handleClose = () => {
    setIsOpen(false)
  }

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100] transition-opacity duration-300 opacity-100"
        onClick={handleClose}
      />
      
      {/* Popup Modal */}
      <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none">
        <div 
          className="relative bg-[#0a0a0a] border border-cyber-purple/30 rounded-2xl p-8 max-w-md w-full shadow-2xl pointer-events-auto transform transition-all duration-300 scale-100 opacity-100"
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white hover:bg-cyber-purple/10 rounded-lg transition-all duration-200"
            aria-label="Close popup"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyber-purple via-cyber-pink to-cyber-cyan flex items-center justify-center">
                <Gift className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -top-1 -right-1">
                <Sparkles className="w-6 h-6 text-cyber-cyan animate-pulse" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Grab Your December Offer Now
            </h2>
            <p className="text-xl text-cyber-cyan mb-2 font-semibold">
              and Enjoy the Holidays!
            </p>
            <p className="text-gray-400 text-sm mt-4 mb-6">
              Special deals are waiting for you. Don&apos;t miss out!
            </p>

            {/* CTA Button */}
            <button
              onClick={handleClose}
              className="w-full cyber-btn flex items-center justify-center gap-2 group mt-6"
            >
              <span>Explore Offers</span>
              <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </button>
          </div>

          {/* Decorative Border Glow */}
          <div className="absolute inset-0 rounded-2xl border-2 border-cyber-purple/20 pointer-events-none">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyber-purple/0 via-cyber-purple/20 to-cyber-purple/0 animate-pulse" />
          </div>
        </div>
      </div>
    </>
  )
}

