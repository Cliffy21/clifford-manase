"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ModeToggle() {
  const [mounted, setMounted] = React.useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true)
  }, [])

  const [isOpen, setIsOpen] = React.useState(false)

  if (!mounted) {
    return (
      <button className="p-2.5 rounded-lg text-gray-400 hover:text-cyber-cyan hover:bg-cyber-cyan/10 transition-all duration-300 hover:scale-110">
        <Sun className="w-5 h-5" />
      </button>
    )
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2.5 rounded-lg text-gray-400 hover:text-cyber-cyan hover:bg-cyber-cyan/10 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyber-cyan/30 group"
        aria-label="Toggle theme"
      >
        <Sun className="h-5 w-5 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90 absolute" />
        <Moon className="h-5 w-5 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
        <span className="sr-only">Toggle theme</span>
      </button>

      {isOpen && (
        <>
          {/* Backdrop to close dropdown */}
          <div 
            className="fixed inset-0 z-[60]" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown Menu */}
          <div className="absolute right-0 mt-2 w-32 bg-cyber-dark/95 backdrop-blur-xl border border-cyber-purple/20 rounded-lg shadow-lg shadow-cyber-purple/20 z-[70] overflow-hidden">
            <button
              onClick={() => {
                setTheme("light")
                setIsOpen(false)
              }}
              className={`w-full px-4 py-2 text-left text-sm transition-colors hover:bg-cyber-purple/10 ${
                theme === "light" ? "text-cyber-cyan" : "text-gray-400 hover:text-white"
              }`}
            >
              Light
            </button>
            <button
              onClick={() => {
                setTheme("dark")
                setIsOpen(false)
              }}
              className={`w-full px-4 py-2 text-left text-sm transition-colors hover:bg-cyber-purple/10 ${
                theme === "dark" ? "text-cyber-cyan" : "text-gray-400 hover:text-white"
              }`}
            >
              Dark
            </button>
            <button
              onClick={() => {
                setTheme("system")
                setIsOpen(false)
              }}
              className={`w-full px-4 py-2 text-left text-sm transition-colors hover:bg-cyber-purple/10 ${
                theme === "system" ? "text-cyber-cyan" : "text-gray-400 hover:text-white"
              }`}
            >
              System
            </button>
          </div>
        </>
      )}
    </div>
  )
}

